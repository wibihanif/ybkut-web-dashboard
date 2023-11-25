import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet';
import '../../style.css';
import 'leaflet/dist/leaflet.css';
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

export const Maps = () => {
  const center: LatLngExpression = [51.505, -0.09];
  const rectangle: LatLngBoundsExpression = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  const [data, setData] = useState([]);

  console.log(data);

  const fetchLocation = async () => {
    try {
      const response = await fetch('https://vocatic.utschool.sch.id/apps/api/dashboard.db.php');

      console.log(response);

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response as JSON
      const jsonData = await response.json();

      // Update the state with the parsed data
      setData(jsonData);

      // Handle the data as needed
      console.log('Data from API:', jsonData);
    } catch (error) {
      // Handle errors during the fetch
      console.error('Error during fetch:', error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle center={center} pathOptions={{ fillColor: 'blue' }} radius={200} />
            <Circle
              center={center}
              pathOptions={{ fillColor: 'red' }}
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={[51.51, -0.08]}
                pathOptions={{ color: 'green', fillColor: 'green' }}
                radius={100}
              />
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          <FeatureGroup pathOptions={{ color: 'purple' }}>
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={[51.51, -0.06]} radius={200} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};
