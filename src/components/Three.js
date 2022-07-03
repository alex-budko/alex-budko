import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { angleToRadians } from '../utils.js/angle'

export default function Three() {

    const orbitControlsRef = useRef(null)
    useFrame((state) => {
        const {x, y} = state.mouse
        orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45))
        orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(60))
    })

    useEffect(() => {
        console.log('Started')
    }, [])

  return (
    <>
        {/* Controls */}
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <OrbitControls ref={orbitControlsRef} maxPolarAngle={angleToRadians(80)} minPolarAngle={angleToRadians(40)} />

        {/* Ball */}
        <mesh castShadow position={[0, 0.75, 0]}>
            <sphereGeometry args={[.75, 32, 32]}/>
            <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Floor  */}
        <mesh receiveShadow rotation={[-angleToRadians(90), 0, 0]}>
            <planeGeometry args={[7, 7]} />
            <meshPhongMaterial color="#25f773" />
        </mesh>

         {/* Ambient Light  */}
         <ambientLight args={["#ffffff", 0.25]} />

        {/* Spot Light  */}
        <spotLight args={["#ffffff", 1, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />
    </>
  )
}
