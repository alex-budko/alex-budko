import {Canvas} from "@react-three/fiber"
import {PerspectiveCamera, OrbitControls} from "@react-three/drei"
import { angleToRads } from "../utils/angle"
import "../styles.css"
import { Suspense, useEffect, useRef } from "react"
import Ground from "./Ground"

function HomeDrawing() {

    const orbitControlsRef = useRef(null)

    useEffect(()=> {
        if (orbitControlsRef.current) {
            console.log(orbitControlsRef.current)
        }
            
    }, [])
    
    return (
        <div id="home-drawing">
            <Canvas shadows >
                <Suspense fallback={null}>
                    {/* Ambient Light  */}
                    {/* <ambientLight args={["white", .25]} /> */}

                    <color args={[0, 0, 0]} attach={"background"} />

                    <spotLight
                        castShadow
                        color={[1, 0.25, 0.7]} 
                        angle={0.6} 
                        intensity={1.5} 
                        penumbra={0.5} 
                        position={[5, 5, 0]}
                        shadowBias={-0.0001}
                    />

                    <spotLight
                        castShadow
                        color={[.14, 0.5, 1]} 
                        angle={0.6} 
                        intensity={1.5} 
                        penumbra={0.5} 
                        position={[-5, 5, 0]}
                        shadowBias={-0.0001}
                    />

                    <Ground />

                    <PerspectiveCamera makeDefault position={[0, 7, 25]}/>

                    <OrbitControls ref={orbitControlsRef}  maxPolarAngle={angleToRads(80)} />


                </Suspense>
            </Canvas>
        </div>
    )
}

export default HomeDrawing