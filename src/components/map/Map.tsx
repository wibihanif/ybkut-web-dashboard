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

export const Legend: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const legend = new L.Control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legends');
      const colors = ['green', 'yellow', 'red'];
      const labels = ['Full Class', 'Partially Available Class', 'Available Class'];

      for (let i = 0; i < colors.length; i++) {
        div.innerHTML +=
          '<i style="background:' +
          colors[i] +
          '; width: 12px; height: 12px; border-radius: 50%; float: left; margin-right: 5px;"></i> ' +
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

export const FlagLegend: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const legend = new L.Control({ position: 'bottomleft' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const colors = ['green', 'yellow', 'red'];
      const labels = ['No AR', 'AR', 'No Transaction'];

      for (let i = 0; i < colors.length; i++) {
        div.innerHTML +=
          '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" style="float: left; margin-right: 5px;">' +
          '<polygon points="2,10 10,6 2,2" fill="' +
          colors[i] +
          '" />' +
          '<line x1="2" y1="2" x2="2" y2="10" stroke="black" stroke-width="1" />' +
          '</svg> ' +
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

  const flagColors = ['red', 'yellow', 'green'];

  const createFlagIcon = (color: string) => {
    const svgHtml = `
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <polygon points="3,9 9,6 3,3" fill="${color}" />
        <line x1="3" y1="3" x2="3" y2="9" stroke="black" stroke-width="1" />
      </svg>
    `;
    return L.divIcon({
      html: svgHtml,
      className: 'custom-flag-icon',
      iconAnchor: [6, 6],
    });
  };

  return (
    <MapContainer
      center={center}
      zoom={4.5}
      scrollWheelZoom={false}
      style={{ height: '350px', width: '100%' }}
      dragging={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      keyboard={false}
      attributionControl={false}
      tap={false}>
      <TileLayer url="https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}" />

      {schoolLocations?.map((schoolLocation, index) => {
        const circleColor =
          schoolLocation.full === '0' ? 'green' : schoolLocation.full === '1' ? 'yellow' : 'red';

        const flagColor = flagColors[index % flagColors.length];

        return (
          <FeatureGroup key={index}>
            <Popup>{schoolLocation.area}</Popup>
            <Circle
              center={[schoolLocation.lat as any, schoolLocation.long as any]}
              radius={100}
              pathOptions={{
                color: circleColor,
                weight: 10,
              }}
            />
            <Marker
              position={[schoolLocation.lat as any, schoolLocation.long as any]}
              icon={createFlagIcon(flagColor)}
            />
          </FeatureGroup>
        );
      })}
      {/* <Legend />
      <FlagLegend /> */}
    </MapContainer>
  );
};
