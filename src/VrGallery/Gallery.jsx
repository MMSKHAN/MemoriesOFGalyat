import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Gallery(props) {
  const { nodes, materials } = useGLTF('/models/gallery.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.GalleryMaster}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.GalleryMaster}
        position={[0, 1.125, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.GalleryMaster}
        position={[13.697, 0.991, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/gallery.glb')