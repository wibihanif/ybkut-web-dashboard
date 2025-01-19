import {
  Circle,
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import '../../style.css';
import 'leaflet/dist/leaflet.css';
import { SchoolLocation } from '~/features/nusantara/types';
import { useEffect } from 'react';

interface MapsProps {
  schoolLocations: SchoolLocation[];
}

const Legend: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const legend = new L.Control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const colors = ['green', 'yellow', 'red'];
      const labels = ['Full Class', 'Partially Available Class', 'Available Class'];

      for (let i = 0; i < colors.length; i++) {
        div.innerHTML +=
          '<i style="background:' +
          colors[i] +
          '; width: 18px; height: 18px; border-radius: 50%; float: left; margin-right: 8px;"></i> ' +
          labels[i] +
          '<br>';
      }

      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

export const Maps: React.FC<MapsProps> = ({ schoolLocations }) => {
  const center: [number, number] = [-0.907, 117.8231];

  const createFlagIcon = (color: string) => {
    const svgHtml = `
      <svg width="24" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="16" height="10" fill="${color}" />
        <line x1="2" y1="8" x2="2" y2="32" stroke="black" stroke-width="2" />
      </svg>
    `;
    return L.divIcon({
      html: svgHtml,
      className: 'custom-flag-icon',
      iconAnchor: [12, 32],
    });
  };

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
      attributionControl={false}
      tap={false}>
      {/* Menggunakan tile layer dengan background putih dan pulau hitam */}
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />

      {/* <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" /> */}
      {schoolLocations?.map((schoolLocation, index) => {
        const circleColor =
          schoolLocation.full === '0' ? 'green' : schoolLocation.full === '1' ? 'yellow' : 'red';

        const flagColor =
          schoolLocation.full === '0' ? 'green' : schoolLocation.full === '1' ? 'yellow' : 'red';

        return (
          <FeatureGroup key={index}>
            <Popup>{schoolLocation.area}</Popup>
            <Circle
              center={[schoolLocation.lat as any, schoolLocation.long as any]}
              radius={200}
              pathOptions={{
                color: circleColor,
                weight: 15,
              }}
            />
            <Marker
              position={[schoolLocation.lat as any, schoolLocation.long as any]}
              icon={createFlagIcon(flagColor)}
            />
          </FeatureGroup>
        );
      })}
      <Legend />
    </MapContainer>
  );
};

// Menghapus filter CSS agar latar belakang tetap putih dan pulau berwarna hitam
