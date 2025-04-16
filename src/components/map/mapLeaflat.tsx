'use client'; 

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const position: LatLngExpression = [35.6892, 51.3890]; // تهران

const Map = () => {
    return (
        <MapContainer  center={position} zoom={13} style={{ height: '500px', width: '100%' ,  position : "absolute"   ,  zIndex : -1 }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            {/* <Marker position={position}>
                <Popup>
                    اینجا تهرانِ :)
                </Popup>
            </Marker> */}
        </MapContainer>
    );
};

export default Map;
