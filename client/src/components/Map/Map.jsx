import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./Map.scss"

import worldCitiesCSV from "./worldcities.csv";
import worldExtraCitiesCSV from "./worldexteacities.csv";

import { readString } from 'react-papaparse';

const defaultZoom = 2;
const defaultCenter = {
  lat: 49.1485207,
  lng: 2.9511712,
}

const processResults = (results) => {
  const type = {};
  let index = 0;
  results.data[0].map((results, i) => {
    index = i;
    switch (results) {
      case "city":
        return Object.assign(type, { city: i });
      case "city_ascii":
        return Object.assign(type, { city_ascii: i });
      case "lat":
        return Object.assign(type, { lat: i });
      case "lng":
        return Object.assign(type, { lng: i });
      case "country":
        return Object.assign(type, { country: i });
      case "iso2":
        return Object.assign(type, { iso2: i });
      case "iso3":
        return Object.assign(type, { iso3: i });
      case "admin_name":
        return Object.assign(type, { admin_name: i });
      case "population":
        return Object.assign(type, { population: i });
      case "id":
        return Object.assign(type, { id: i });
      default:
        break;
    }
  });

  for (let i = 0; i <= index; i++) {
    delete results.data[0][i];
  }
  Object.assign(results.data[0], type);

  return [results, type];
}

const processNewMarkers = (markers, results, type) => {
  return markers.reduce((total, marker, i) => {
    const country = results.data.filter((worldCity) => worldCity[type.country] === marker.country);
    const cities = country.filter((worldCity) => worldCity[type.city] === marker.city);
    const cityMarkers = cities.map(city => ({
      type: "Feature",
      properties: { cluster: false, markersId: city[type.id], city: city[type.city], country: city[type.country], },
      geometry: {
        type: "Point",
        zoom: marker.zoom,
        marker: marker.marker,
        coordinates: [
          parseFloat(city[type.lng]),
          parseFloat(city[type.lat])
        ]
      }
    }));
    total = [...total, ...cityMarkers];
    return total;
  }, [])
}

const getPapaConfig = (onComplete) => ({
  complete: (results, file) => {
    if (typeof onComplete === "function") {
      onComplete(results);
    }
  },
  download: true,
  error: (error, file) => {
    console.log('Error while parsing:', error, file);
  },
});


const Marker = ({ children }) => children;

export default function MapSection({ markers }) {
  const mapRef = useRef();

  const [zoom, setZoom] = React.useState(defaultZoom);
  const [center, setCenter] = React.useState(defaultCenter);
  const [bounds, setBounds] = useState(null);

  const [csv1, setCSV1] = useState(null);
  const [csv2, setCSV2] = useState(null);

  const [points, setPoints] = useState(
    markers.map(marker => ({
      type: "Feature",
      properties: { cluster: false, markersId: marker.id, city: marker.city, country: marker.country, },
      geometry: {
        type: "Point",
        zoom: marker.zoom,
        marker: marker.marker,
        coordinates: [
          parseFloat(marker.lng),
          parseFloat(marker.lat)
        ]
      }
    }))
  );

  //erro no consola
  /*   react_devtools_backend.js:4012 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at MapSection (http://localhost:3000/static/js/bundle.js:6025:5)
    at div
    at div
    at div
    at div
    at section
    at CardSection (http://localhost:3000/static/js/bundle.js:6247:69)
    at div
    at Cv
   */
  React.useEffect(() => {
    readString(worldCitiesCSV, getPapaConfig((r1) => {
      setCSV1(r1);
      readString(worldExtraCitiesCSV, getPapaConfig((r2) => {
        setCSV2(r2);
      }));
    }));
  }, [])

  React.useEffect(() => {
    if (csv2 !== null) {
      const [processedCSV1, type1] = processResults(csv1);
      const [processedCSV2, type2] = processResults(csv2);
      setPoints([
        ...processNewMarkers(markers, processedCSV1, type1),
        ...processNewMarkers(markers, processedCSV2, type2)
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [csv2]);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    center,
    options: { radius: 75, maxZoom: 20 }
  });

  const onClickMarker = (lat, lng, zoom) => () => {
    mapRef.current.setZoom(zoom);
    mapRef.current.panTo({ lat: lat, lng: lng });
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultCenter}
      defaultZoom={defaultZoom}
      style={{ width: "100%", height: "100%" }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map }) => {
        mapRef.current = map;
      }}
      onChange={({ zoom, bounds, center }) => {
        setZoom(zoom);
        setCenter(center);
        setBounds([
          bounds.nw.lng,
          bounds.se.lat,
          bounds.se.lng,
          bounds.nw.lat
        ]);
      }}
    >
      {clusters.map(cluster => {
        const [lng, lat] = cluster.geometry.coordinates;
        const {
          cluster: isCluster,
          point_count: pointCount
        } = cluster.properties;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              lat={lat}
              lng={lng}
            >
              <div
                className="cluster-marker"
                style={{
                  width: `${10 + (pointCount / points.length) * 20}px`,
                  height: `${10 + (pointCount / points.length) * 20}px`
                }}
                onClick={() => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    20
                  );
                  mapRef.current.setZoom(expansionZoom);
                  mapRef.current.panTo({ lat: lat, lng: lng });
                }}
              >
                {pointCount}
              </div>
            </Marker>
          );
        }

        return (
          <div
            className="marker"
            key={cluster.properties.markersId}
            lat={lat}
            lng={lng}
            style={{ backgroundImage: `url(${cluster.geometry.marker})` }}
            onClick={onClickMarker(lat, lng, cluster.geometry.zoom)}
          >
            <div className="popup">
              <img src={cluster.geometry.marker} alt={cluster.geometry.marker} />
              <p className="title">{cluster.properties.city}</p>
            </div>
          </div>
        );
      })}
    </GoogleMapReact>
  );
}