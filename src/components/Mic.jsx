/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Gistold (https://sketchfab.com/gistold)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/3d-models/microphone-gxl-066-bafhcteks-5172dbe9281a45f48cee8c15bdfa1831
title: Microphone GXL 066 Bafhcteks
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mic({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group castShadow ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_8.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_9.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_10.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_11.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_12.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_13.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_14.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_15.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_16.geometry} material={materials['01___Default']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
