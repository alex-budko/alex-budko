import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { angleToRadians } from '../utils.js/angle'

export default function Three() {
  return (
    <>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <OrbitControls />
        {/* Ball */}
        <mesh position={[0, 0.75, 0]}>
            <sphereGeometry args={[.75, 32, 32]}/>
            <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Floor  */}
        <mesh rotation={[-angleToRadians(90), 0, 0]}>
            <planeGeometry args={[7, 7]} />
            <meshStandardMaterial color="#25f773" />
        </mesh>

        {/* Ambient Light  */}
        <ambientLight args={["#9ff3ff", 1]} />
    </>
  )
}
