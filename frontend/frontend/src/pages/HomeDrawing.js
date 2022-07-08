import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"

import "../styles.css"

import { Physics } from '@react-three/cannon'
import { Suspense } from "react"
import Ground from "../components/Ground"
import Lights from "../components/Lights"
import TextMesh from '../components/TextMesh'
import DropSpawner from "../components/DropSpawner"
import Projects from "./Projects"

function HomeDrawing() {

    return (
        <div className="full-page">
            <Canvas shadows >
                <Suspense fallback={null}>
                    <color args={[0.270, 0.380, 0.909]} attach={"background"} />
                    <PerspectiveCamera fov={50} makeDefault position={[0, 1, 15]}/>
                    {/* <OrbitControls ref={orbitControlsRef}  maxPolarAngle={angleToRads(80)} /> */}
                    <Lights />
                    <ambientLight color={[.2, .2, .2]} />
                    <Physics>
                        <TextMesh />
                        <DropSpawner />
                        <Ground />
                    </Physics>
                </Suspense>
            </Canvas>
            <Projects />
        </div>
    )
}

export default HomeDrawing