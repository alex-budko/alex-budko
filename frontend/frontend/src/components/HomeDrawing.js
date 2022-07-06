import {Canvas} from "@react-three/fiber"
import {PerspectiveCamera, OrbitControls,} from "@react-three/drei"
import { angleToRads } from "../utils/angle"
import "../styles.css"

import { Physics, useBox } from '@react-three/cannon'
import { Suspense, useEffect, useRef } from "react"
import Ground from "./Ground"
import Lights from "./Lights"
import MyObject from "./MyObject"
import TextMesh from './TextMesh'
function HomeDrawing() {

    const orbitControlsRef = useRef(null)
    
    return (
        <div id="home-drawing">
            <Canvas shadows >
                <Suspense fallback={null}>
                    <ambientLight />
                    <color args={[.5, .5, .5]} attach={"background"} />
                    <PerspectiveCamera fov={50} makeDefault position={[3, 2, 5]}/>
                    <OrbitControls ref={orbitControlsRef}  maxPolarAngle={angleToRads(80)} />
                    <Lights />
                    <TextMesh />
                    
                    <Physics>
                        <MyObject />
                        <Ground />
                    </Physics>

                    
                </Suspense>
            </Canvas>
        </div>
    )
}

export default HomeDrawing