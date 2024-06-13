import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L, { divIcon } from "leaflet";
import labels from "./assets/labels.json";
import usa from "./assets/usa.json";
import "leaflet/dist/leaflet.css";
import type { GeoJsonObject } from 'geojson';
import "./App.css";

function App() {
  const Usa = usa as GeoJsonObject;
  const Labels = labels as GeoJsonObject;
  
  const lat = 37.8;
  const long = -96;
  const zoom = 4;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setLabel = ({ properties }: any, coords: L.LatLngExpression) => {
    return L.marker(coords, {
      icon: divIcon({
        html: properties.Name,
        className: "icon",
      }),
    });
  };

  return (
    <MapContainer
      center={[lat, long]}
      zoom={zoom}
      maxZoom={19}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png" />
      <GeoJSON data={Usa} style={{ weight: 1 }} />
      <GeoJSON data={Labels} pointToLayer={setLabel} />
    </MapContainer>
  );
}

export default App;
