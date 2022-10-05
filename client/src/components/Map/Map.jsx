import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./Map.scss"

import worldCities from "./worldcities.csv";
import { readString } from 'react-papaparse';

const defaultZoom = 2;
const defaultCenter = {
  lat: 0,
  lng: 0,
}

//let worldCitiesObj = [];

const Marker = ({ children }) => children;

export default function MapSection(props) {
  const mapRef = useRef();
  //const [points, setPoints] = useState([]);
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = React.useState(defaultZoom);
  const [center, setCenter] = React.useState(defaultCenter);

  /*  const points = props.markers.map(markers => ({
     type: "Feature",
     properties: { cluster: false, markersId: markers.id, city: markers.city, country: markers.country, },
     geometry: {
       type: "Point",
       zoom: markers.zoom,
       marker: markers.marker,
       coordinates: [
         parseFloat(markers.lng),
         parseFloat(markers.lat)
       ]
     }
   }));
 
  */


  const onClickMarker = (lat, lng, zoom) => () => {
    mapRef.current.setZoom(zoom);
    mapRef.current.panTo({ lat: lat, lng: lng });
  };

  const [worldCitiesObjType, setWorldCitiesObjType] = useState(null);
  const [worldCitiesObj, setWorldCitiesObj] = useState(null);
  const [worldCitiesObjLoading, setWorldCitiesObjLoading] = useState(0);
  const papaConfig = {
    complete: (results, file) => {
      const type = {};
      let index = 0;
      results.data[0].map((results, i) => {
        index = i;
        switch (results) {
          case "city":
            return Object.assign(type, { city: i });
            break;
          case "city_ascii":
            return Object.assign(type, { city_ascii: i });
            break;
          case "lat":
            return Object.assign(type, { lat: i });
            break;
          case "lng":
            return Object.assign(type, { lng: i });
            break;
          case "country":
            return Object.assign(type, { country: i });
            break;
          case "iso2":
            return Object.assign(type, { iso2: i });
            break;
          case "iso3":
            return Object.assign(type, { iso3: i });
            break;
          case "admin_name":
            return Object.assign(type, { admin_name: i });
            break;
          case "population":
            return Object.assign(type, { population: i });
            break;
          case "id":
            return Object.assign(type, { id: i });
            break;
          default:
            break;
        }
      });
      for (let i = 0; i <= index; i++) {
        delete results.data[0][i];
      }
      Object.assign(results.data[0], type);
      setWorldCitiesObjType(type);
      setWorldCitiesObj(results);
      setWorldCitiesObjLoading(2);
    },
    download: true,
    error: (error, file) => {
      console.log('Error while parsing:', error, file);
    },
  };

  if (worldCitiesObjLoading === 0) {
    setWorldCitiesObjLoading(1);
    readString(worldCities, papaConfig);
  }
  else if (worldCitiesObjLoading === 2) {
    const points = props.markers.map((markers, i) => {
      const countryMarker = worldCitiesObj.data.filter((worldCity) => worldCity[worldCitiesObjType.country] === markers.country);
      const cityMarker = countryMarker.filter((worldCity) => worldCity[worldCitiesObjType.city] === markers.city);
      return cityMarker.map(cityMarker => ({
        type: "Feature",
        properties: { cluster: false, markersId: cityMarker[worldCitiesObjType.id], city: cityMarker[worldCitiesObjType.city], country: cityMarker[worldCitiesObjType.country], },
        geometry: {
          type: "Point",
          zoom: markers.zoom,
          marker: markers.marker,
          coordinates: [
            parseFloat(cityMarker[worldCitiesObjType.lng]),
            parseFloat(cityMarker[worldCitiesObjType.lat])
          ]
        }
      }));
    });
    console.log(points);
    // setPoints(points);
  }

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    center,
    options: { radius: 75, maxZoom: 20 }
  });


  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
      defaultCenter={defaultCenter}
      defaultZoom={defaultZoom}
      style={{ width: "100%", height: "100vh" }}
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
            /*   key={`marker-${cluster.properties.markersId}`} */
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
    </GoogleMapReact >
  );
}