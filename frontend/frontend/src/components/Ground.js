import { MeshReflectorMaterial } from "@react-three/drei"
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import { usePlane } from '@react-three/cannon'

import React, { useEffect } from 'react'


function Plane(props) {
    const [roughness, normal] = useLoader(TextureLoader, [
        'textures/terrain-roughness.jpg',
        'textures/terrain-normal.jpg',
    ])

    useEffect(()=> {
        [normal, roughness].forEach((tex)=> {
            tex.wrapS = RepeatWrapping;
            tex.wrapT = RepeatWrapping;
            tex.repeat.set(100, 100)
        })
        normal.encoding = LinearEncoding
    }, [normal, roughness])

    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
      <mesh ref={ref}>
        <planeGeometry args={[100, 100]} widthSegments={30} heightSegments={30} />
        <MeshReflectorMaterial 
            normalMap={normal}
            roughnessMap={roughness}
            envMapIntensity={0}
            dilthering={true}
            color={[0.270, 0.380, 0.909]}
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
      </mesh>
    )
}

function Ground() {
    

    return (
        <Plane castShadow receiveShadow args={[150, 150]} rotation-x={[-Math.PI * 0.5]} />
    )
}

export default Ground;