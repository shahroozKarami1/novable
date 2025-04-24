'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const position: LatLngExpression = [35.6892, 51.3890];

const Map = () => {
    return (
        <div>
            <MapContainer
                zoomControl={true}
                style={{
                    width: "100%",
                    height: "1500px",
                    position: "relative",
                }}
                center={position}
                zoom={13}  >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                />
            </MapContainer>
        </div>
    );
};

export default Map;
