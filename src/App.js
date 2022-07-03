import { Canvas } from '@react-three/fiber'
import {useState, Suspense} from 'react'
import './styles.css'
import Three from './components/Three';

function App() {
  return (
    <Canvas id="three-canvas-container">
        <Suspense fallback={null}>
          <Three />
        </Suspense>
    </Canvas>
  );
}

export default App;
