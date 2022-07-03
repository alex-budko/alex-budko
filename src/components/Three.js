import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { angleToRadians } from '../utils.js/angle'
import * as THREE from 'three'
import gsap from 'gsap'
import Mic from './Mic'

export default function Three() {

    const orbitControlsRef = useRef(null)
    useFrame((state) => {
        const {x, y} = state.mouse
        orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45))
        orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(60))
    })

    const ballRef = useRef(null);
    useEffect(()=> {
        if (ballRef.current) {
            const timeline = gsap.timeline({ paused: true})

            timeline.to(ballRef.current.position, {
                duration: 2,
                x: 3,
                ease:"power2.out"
            })

            timeline.to(ballRef.current.position, {
                y: .75,
                duration: 1.5,
                ease:"bounce.out"
            }, "<")

            timeline.play()
        }
    }, [ballRef.current])
    
  return (
    <>
        {/* Controls */}
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <OrbitControls ref={orbitControlsRef} maxPolarAngle={angleToRadians(80)} minPolarAngle={angleToRadians(40)} />

        {/* Ball */}
        <mesh ref={ballRef} castShadow position={[0, 3.75, 0]}>
            <sphereGeometry args={[.75, 32, 32]}/>
            <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2}/>
        </mesh>

        {/* Car */}
        <Mic />

        {/* Floor  */}
        <mesh receiveShadow rotation={[-angleToRadians(90), 0, 0]}>
            <planeGeometry args={[300, 300]} />
            <meshStandardMaterial color="#lea3d8" />
        </mesh>

         {/* Ambient Light  */}
         <ambientLight args={["#ffffff", 0.25]} />

        {/* Spot Light  */}
        <spotLight args={["white", 1, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />

        {/* Environment */}
        <Environment background>
            <mesh>
                <sphereGeometry args={[50, 100, 100]} />
                <meshBasicMaterial color="black" side={THREE.BackSide} />
            </mesh>
        </Environment>
    </>
  )
}
