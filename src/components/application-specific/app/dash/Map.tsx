import { Map as MapArea, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Map: React.FC = (): JSX.Element => {
  return (
    <MapArea
      center={[-25.4677022, -49.2942842]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />
    </MapArea>
  );
};

export default Map;
