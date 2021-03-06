/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: helijah (https://sketchfab.com/helijah)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/9j5bYz1iQZ7LRp3JyB0AaVWDXcH
title: raven.zip
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.DefaultWhite} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials['DefaultWhite_plug.png']} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials.greentrs} />
        <mesh geometry={nodes.mesh_3.geometry} material={materials['DefaultWhite_ai.png']} />
        <mesh geometry={nodes.mesh_4.geometry} material={materials['DefaultWhite_alt.png']} />
        <mesh geometry={nodes.mesh_5.geometry} material={materials['DefaultWhite_asi.png']} />
        <mesh geometry={nodes.mesh_6.geometry} material={materials['DefaultWhite_compass.png']} />
        <mesh geometry={nodes.mesh_7.geometry} material={materials['DefaultWhite_interior.png']} />
        <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
        <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
        <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
        <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
        <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
        <mesh geometry={nodes.mesh_13.geometry} material={materials['DefaultWhite_magneto.png']} />
        <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
        <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
        <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
        <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
        <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
        <mesh geometry={nodes.mesh_19.geometry} material={materials['DefaultWhite_panel.png']} />
        <mesh geometry={nodes.mesh_20.geometry} material={materials['DefaultWhite_rpm.png']} />
        <mesh geometry={nodes.mesh_21.geometry} material={materials['DefaultWhite_seat.png']} />
        <mesh geometry={nodes.mesh_22.geometry} material={materials['DefaultWhite_switch.png']} />
        <mesh geometry={nodes.mesh_23.geometry} material={materials['DefaultWhite_switch.png.001']} />
        <mesh geometry={nodes.mesh_24.geometry} material={materials['DefaultWhite_tailrotor.png']} />
        <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
        <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
        <mesh geometry={nodes.mesh_27.geometry} material={materials['DefaultWhite_vor.png']} />
        <mesh geometry={nodes.mesh_28.geometry} material={materials['DefaultWhite_vsi.png']} />
        <mesh geometry={nodes.mesh_29.geometry} material={materials.RougeTrs} />
        <mesh geometry={nodes.mesh_30.geometry} material={materials.transparent} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
