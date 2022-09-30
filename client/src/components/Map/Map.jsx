import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.scss"


export default function MapSection(props) {
  const [zoom, setZoom] = React.useState(2); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 0,
    lng: 0,
  });

  return (


      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        margin={[50, 50, 50, 50]}
        style={{ width: "100%", height: "100vh" }}
        options={{ disableDefaultUI: true, zoomControl: true }}
      // onChange={(e) => {
      //   setCoords({ lat: e.center.lat, lng: e.center.lng });
      //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      // }}
      // onChildClick={(child) => setChildClicked(child)}
      >
        {props.markers.length && props.markers.map((marker, i) => (
          <div
            className="marker"
            lat={Number(marker.lat)}
            lng={Number(marker.lng)}
            key={i}
            style={{backgroundImage: `url(${marker.marker})`,}}
          >
            <div className="popup">
              {marker.title}
              <img src={marker.image} alt={marker.title} />
            </div>
          </div>
        ))}
      </GoogleMapReact>
  );
}
