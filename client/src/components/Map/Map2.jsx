import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.scss"

const defaultZoom = 2;
const defaultCenter = {
  lat: 0,
  lng: 0,
}


export default function MapSection(props) {
  const [zoom, setZoom] = React.useState(defaultZoom);
  const [center, setCenter] = React.useState(defaultCenter);

  const onClickMarker = (marker) => () => {
    setZoom(marker.zoom);
    setCenter({
      lat: marker.lat,
      lng: marker.lng,
    });
  };


  const isToMarker = (marker) => {
    switch (marker.type) {
      case "country":
        if (zoom < marker.zoom)
          return true;
        break;
      case "place":
        if (zoom >= marker.zoom)
          return true;
        break;
      default:
        return false;
    }
    return false;
  };
  return (


    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={defaultCenter}
      center={center}
      defaultZoom={defaultZoom}
      zoom={zoom}
      margin={[50, 50, 50, 50]}
      style={{ width: "100%", height: "100vh" }}
      options={{ disableDefaultUI: true, zoomControl: true }}
      onChange={({ zoom, center }) => {
        setZoom(zoom);
        setCenter(center);
      }}
    >
      {props.markers.length && props.markers.map((marker, i) => (
        <div
          onClick={onClickMarker(marker)}
          className="marker"
          lat={Number(marker.lat)}
          lng={Number(marker.lng)}
          key={i}
          style={isToMarker(marker) ? { backgroundImage: `url(${marker.marker})`, } : { display: "none" }}
        >

          <div className="popup">
            <img src={marker.marker} alt={marker.marker} />
            <p className="title">{marker.title}</p>

          </div>
        </div>
      ))}
    </GoogleMapReact>
  );
}