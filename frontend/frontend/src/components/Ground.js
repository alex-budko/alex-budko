import { MeshReflectorMaterial, useTexture} from "@react-three/drei"
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import { usePlane } from '@react-three/cannon'

import React, { useEffect } from 'react'


function Plane(props) {
    let colorTexture = useTexture('S_Color.jpg')

    const [roughness, normal, ao] = useLoader(TextureLoader, [
        'S_Roughness.jpg',
        'S_Normal.jpg',
        'S_AO.jpg',
    ])

    useEffect(()=> {
        [normal, roughness, colorTexture].forEach((tex)=> {
            tex.wrapS = RepeatWrapping;
            tex.wrapT = RepeatWrapping;
            tex.repeat.set(100, 100)
        })
        normal.encoding = LinearEncoding
    }, [normal, roughness, colorTexture])

    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
      <mesh ref={ref}>
        <planeGeometry args={[1000, 1000]} />
        <MeshReflectorMaterial 
            normalMap={normal}
            map={colorTexture}
            // aoMap={ao}
            roughnessMap={roughness}
            envMapIntensity={0}
            dilthering={true}
            color={[1, 1, 1]}
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