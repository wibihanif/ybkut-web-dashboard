import { Circle, FeatureGroup, MapContainer, Popup, TileLayer } from 'react-leaflet';
import '../../style.css';
import 'leaflet/dist/leaflet.css';
import { schoolData } from '../../constant/school';

interface SchoolLocation {
  area: string;
  lat: string;
  long: string;
  full: string;
  available_part: string;
  available: string;
  no_ar: string;
  ar: string;
  no_transaction: string;
}

export const Maps = () => {
  const center: any = ['-0.9070', '117.8231'];

  const schoolLocations: SchoolLocation[] | undefined =
    schoolData?.data?.[0]?.level0?.[0]?.perform?.[0]?.nusantara?.[0].mapping;

  return (
    <MapContainer center={center} zoom={5} scrollWheelZoom={false}>
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
