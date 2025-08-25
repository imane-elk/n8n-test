import 'leaflet/dist/leaflet.css'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const MapPage: React.FC = () => {
  return (
    <div
      style={{
        height: '400px',
        width: '100%',
        maxWidth: 600,
        margin: '0 auto'
      }}
    >
      <h2>Carte interactive</h2>
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        style={{ height: '350px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[48.8566, 2.3522]}>
          <Popup>Paris</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapPage
