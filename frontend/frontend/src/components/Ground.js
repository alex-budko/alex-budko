import {Plane, MeshReflectorMaterial} from "@react-three/drei"
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import { usePlane } from '@react-three/cannon'

import React, { useEffect } from 'react'

function Ground() {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0]}))
    const [roughness, normal] = useLoader(TextureLoader, [
        'textures/terrain-roughness.jpg',
        'textures/terrain-normal.jpg',
    ])

    useEffect(()=> {
        [normal, roughness].forEach((tex)=> {
            tex.wrapS = RepeatWrapping;
            tex.wrapT = RepeatWrapping;
            tex.repeat.set(5, 5)
        })
        normal.encoding = LinearEncoding
    }, [normal, roughness])

    return (
        <Plane ref={ref} castShadow receiveShadow args={[150, 150]} rotation-x={[-Math.PI * 0.5]}>
            <MeshReflectorMaterial 
                normalMap={normal}
                roughnessMap={roughness}
                envMapIntensity={0}
                dilthering={true}
                color={[0.0166, 0.0166, 0.0166]}
                roughness={0.7}
                blur={[1000, 400]}
                mixBlur={30}
                mixStrength={80}
                mixContrast={1}
                resolution={512}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                debug={0}
                reflectorOffset={0.2}
            />
        </Plane>
    )
}

export default Ground