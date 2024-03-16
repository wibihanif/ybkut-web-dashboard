import { Circle, FeatureGroup, MapContainer, Popup, TileLayer } from 'react-leaflet';
import '../../style.css';
import 'leaflet/dist/leaflet.css';
import { SchoolLocation } from '~/features/nusantara/types';

interface MapsProps {
  schoolLocations: SchoolLocation[];
}

export const Maps: React.FC<MapsProps> = ({ schoolLocations }) => {
  const center: any = ['-0.9070', '117.8231'];

  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: '500px', width: '100%' }}
      dragging={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      keyboard={false}
      tap={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {schoolLocations?.map(schoolLocation => {
        return (
          <FeatureGroup>
            <Popup>{schoolLocation.area}</Popup>
            <Circle
              center={[schoolLocation?.lat as any, schoolLocation.long as any]}
              radius={200}
              pathOptions={{ color: 'purple', weight: 15 }}
            />
          </FeatureGroup>
        );
      })}
    </MapContainer>
  );
};
