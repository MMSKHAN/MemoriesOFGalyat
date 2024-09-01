
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Shop(props) {
  const { nodes, materials } = useGLTF('/models/shop.glb')
  return (
    <group {...props} dispose={null} scale={0.0008}  >
{/* <RigidBody type='fixed' > */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['Material.004']}
        />
        {/* floor */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.005']}
        />


      </group>
      {/* </RigidBody> */}
    </group>
  )
}

useGLTF.preload('/models/shop.glb')
