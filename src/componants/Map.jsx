// src/Map.jsx
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from './Button';
import MyMarker from './MyMarker';

const branches = [
  { name: 'Tel Aviv-Yafo', position: [32.0784, 34.7806] }, // Example coordinates
  { name: 'Nativot', position: [31.3382, 34.5861] }, // Example coordinates
  { name: 'Or Yehuda', position: [32.0165, 34.8285] }, // Example coordinates
  { name: 'Kiryat Ono', position: [32.0218, 34.8356] }  // Example coordinates
];

const Map = () => {
  const [position, setPosition] = useState(branches[0].position);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const handleBranchChange = (e) => {
    const selectedBranchName = e.target.value;
    const branch = branches.find(b => b.name === selectedBranchName);
    if (branch) {
      setPosition(branch.position);
      setSelectedBranch(branch);
    }
  };

  return (
    <>
      <div className="w-[700px] m-auto">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-bold mb-4">Our Locations</h2>
          <select
            onChange={handleBranchChange}
            className="h-12 shadow-lg border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:drop-shadow-lg"
          >
            {branches.map((branch, index) => (
              <option key={index} value={branch.name}>
                {branch.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-[700px] h-[500px] m-auto my-8 border-gray border-[1px] rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {branches.map((branch, index) => (
            <Marker key={index} position={branch.position}>
              <Popup>{branch.name}</Popup>
            </Marker>
          ))}
          <MyMarker pos={position} />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
