import React from "react";
/* import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"; */
import GoogleMapReact from "google-map-react";
import "./Map.scss"

//const apiKey = "AIzaSyAczj4e2hLR_Vp8LlYxFQVDJLjH8Dw1m8U";

/* googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, */
export default function MapSection(props) {
/*   const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  }); */

  const [zoom, setZoom] = React.useState(2); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 0,
    lng: 0,
  });

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };
  const onClick = (e) => { };
console.log(props.markers);
 /*  if (!isLoaded) return <div>Loading...</div>; */
  return (
    <>
      {/*      <GoogleMap center={center} zoom={zoom} mapContainerClassName="map-container">
        {props.markers.map((latLng, i) => (
          <Marker key={i} position={latLng} icon={{
            path: window.google.maps.Marker,
            scale: 7,
          }} />
        ))}
      </GoogleMap> */}

      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        /* defaultCenter={coords} */
        center={center}
        defaultZoom={zoom}
        margin={[50, 50, 50, 50]}
        style={{ width: "100%", height: "100vh" }}
        options={{ disableDefaultUI: true, zoomControl: true }}/* styles: mapStyles */
      /*       onChange={(e) => {
        setCoords({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }} */
      /* onChildClick={(child) => setChildClicked(child)} */
      >
        {props.markers.map((latLng, i) => (
        <div
      /*   className={latLng.markerContainer} */
        lat={Number(latLng.lat)}
        lng={Number(latLng.lng)}
        key={i}
      >

      </div> 
        ))}
        {/*   {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >

          </div> 
        ))}*/}
        {/*   {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}
        {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))} */}
      </GoogleMapReact>
    </>
  );
}



/* export default function MapSection() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
} */

/* import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards"; 

const apiKey = "AIzaSyDm8fLNsS0n1xxJ1ICXlB8_Qot7Cwc6ruE";

 export default function MapSection(props) {
  const render = (status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey={apiKey} render={render} >
      <Map center={props.center} zoom={props.zoom} onClick={props.onClick} onIdle={props.onIdle} style={{ flexGrow: "1", height: "100vh" }}>
        {props.markers.map((latLng, i) => (
          <Marker key={i} position={latLng} />
        ))}
      </Map>
    </Wrapper>
  );
}


export function Map(props) {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(props.options);
    }
  }, [map, props.options]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );
      if (props.onClick) {
        map.addListener("click", props.onClick);
      }

      if (props.onIdle) {
        map.addListener("idle", () => props.onIdle(map));
      }
    }
  }, [map, props.onClick, props.onIdle]);
  return (
    <>
      <div ref={ref} style={props.style} />
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}

const Marker = (options) => {
  const [marker, setMarker] = React.useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);
  return null;
};


const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
  if (
    isLatLngLiteral(a) ||
    a instanceof window.google.maps.LatLng ||
    isLatLngLiteral(b) ||
    b instanceof window.google.maps.LatLng
  ) {
    return new window.google.maps.LatLng(a).equals(new window.google.maps.LatLng(b));
  }
  // TODO extend to other types
  // use fast-equals for other objects
  return deepEqual(a, b);
});

function useDeepCompareMemoize(value) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

function useDeepCompareEffectForMaps(callback, dependencies) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
} */