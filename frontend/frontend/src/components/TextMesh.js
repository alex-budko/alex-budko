import React from 'react';
import * as THREE from 'three';
import GT from '../fonts/GT.json';

export default function App() {
  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(GT);

  // configure font geometry
  const textOptions = {
    font,
    size: 5,
    height: 1
  };

  return (
      <mesh>
        <textGeometry attach='geometry' args={['three.js', textOptions]} />
        <meshStandardMaterial attach='material' />
      </mesh>
  );
}