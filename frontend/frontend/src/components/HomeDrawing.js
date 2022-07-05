import {Canvas, useFrame} from "@react-three/fiber"
import {Plane,Box, Sphere, PerspectiveCamera, PresentationControls, OrbitControls} from "@react-three/drei"
import { angleToRads } from "../utils/angle"
import "../styles.css"
import { Suspense, useEffect, useRef } from "react"

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
                    <ambientLight args={["white", .25]} />

                    <spotLight castShadow={true} angle={angleToRads(60)} intensity={1.5} distance={40} penumbra={0.35} position={[10, 10, 0]}/>

                    <PerspectiveCamera makeDefault position={[0, 7, 25]}/>

                    <Box castShadow={true} meshStandardMaterial args={[5, 5, 5]} position={[0, 2.5, 0]}>
                        <meshStandardMaterial color="hotpink" />
                    </Box>

                    <OrbitControls ref={orbitControlsRef}  maxPolarAngle={angleToRads(80)} />

                    <Plane receiveShadow args={[50, 50]} rotation={[-angleToRads(90), 0, 0]}>
                        <meshStandardMaterial roughness={0.35} metalness={0.5} color="lightblue" />
                    </Plane>

                </Suspense>
                
            </Canvas>
        </div>
        
    )
}

export default HomeDrawing