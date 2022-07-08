import {Canvas} from "@react-three/fiber"
import {PerspectiveCamera, OrbitControls,} from "@react-three/drei"
import { angleToRads } from "../utils/angle"
import { useBox } from '@react-three/cannon'

import "../styles.css"

import { Physics } from '@react-three/cannon'
import { Suspense, useRef } from "react"
import Ground from "./Ground"
import Lights from "./Lights"
import MyObject from "./MyObject"
import TextMesh from './TextMesh'

function Cube(props) {
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))
    return (
      <mesh receiveShadow castShadow ref={ref}>
        <boxGeometry />
        <meshLambertMaterial color="hotpink" />
      </mesh>
    )
}

function HomeDrawing() {
    
    const orbitControlsRef = useRef(null)
    
    return (
        <div id="home-drawing">
            <Canvas shadows >
                <Suspense fallback={null}>
                    <ambientLight />
                    <color args={[1, 1, 1]} attach={"background"} />
                    <PerspectiveCamera fov={50} makeDefault position={[3, 2, 5]}/>
                    <OrbitControls ref={orbitControlsRef}  maxPolarAngle={angleToRads(80)} />
                    <Lights />
                    
                    <Physics>
                        <TextMesh />
                        {/* <MyObject /> */}
                        <Cube position={[0, 10, -1]} />
                        <Cube position={[0, 20, -2]} />
                        <Cube position={[0, 30, -1]} />
                        <Cube position={[0, 25, -2]} />
                        <Cube position={[0, 25, -1]} />
                        <Cube position={[0, 32, -2]} />
                        <Ground />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default HomeDrawing