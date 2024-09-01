import React from 'react'
import { Box, MeshPortalMaterial, RoundedBox, useTexture } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import * as THREE from "three"
import MusicPlayer from '../PhonePanel/MusicPlayer'
import TimeandDate from '../PhonePanel/TimeandDate'
import Form from '../PhonePanel/Form'
import ShowNfts from '../ShowNft/ShowNfts'

function Envelop() {
    const texture=useTexture("/textures/pexels-dinoe-xu-1261776177-23557135.jpg")
  return (
    <>
    <Physics>

          <RigidBody type='fixed' >
    <Box args={[8,0.09,8]} position={[0,-0.05,0]} />
    {/* front */}
    </RigidBody>
    {/* <RigidBody type='fixed' colliders="cuboid">
    <RoundedBox args={[8,2,0.1]} position={[0,0.9,3.9]}>
    <MeshPortalMaterial  side={THREE.DoubleSide} blend={0} >
  <ambientLight intensity={1} />
  <mesh  position={[0, 0.5, -4]} >
  <boxGeometry args={[64,64,64]}  />
  <meshStandardMaterial map={texture} side={THREE.BackSide} />
    </mesh>
    </MeshPortalMaterial>
    </RoundedBox>
    </RigidBody>  */}
  {/* back */}
    <RigidBody type='fixed' colliders="cuboid">
    <RoundedBox args={[8,2,0.1]} position={[0,0.9,-3.9]}>
  <MeshPortalMaterial  side={THREE.DoubleSide} blend={0} >
  <ambientLight intensity={1} />
  <mesh  position={[0, 0.5, -4]} >
  <boxGeometry args={[64,64,64]}  />
  <meshStandardMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  </MeshPortalMaterial>
  <group>

  <MusicPlayer/>
  <TimeandDate/>
  <Form/>
  </group>
  </RoundedBox>
  </RigidBody> 
  {/* left */}
  <RigidBody type='fixed' colliders="cuboid">
    <RoundedBox args={[0.1,2,8]} position={[3.9,0.9,0]}>
  <MeshPortalMaterial  side={THREE.DoubleSide} blend={0} >
  <ambientLight intensity={1} />
  <mesh  position={[0, 0.5, -4]} >
  <boxGeometry args={[64,64,64]}  />
  <meshStandardMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  </MeshPortalMaterial>
  <ShowNfts/>
  </RoundedBox>
  </RigidBody> 
  {/* right */}
  <RigidBody type='fixed' colliders="cuboid">
    <RoundedBox args={[0.1,2,8]} position={[-3.9,0.9,0]}>
  <MeshPortalMaterial  side={THREE.DoubleSide} blend={0} >
  <ambientLight intensity={1} />
  <mesh  position={[0, 0.5, -4]} >
  <boxGeometry args={[64,64,64]}  />
  <meshStandardMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  </MeshPortalMaterial>
  </RoundedBox>
  </RigidBody> 

{/* </RigidBody>
    <RigidBody type='fixed' colliders="cuboid">
    <mesh position={[0, 0.5, 4]}>
    <meshStandardMaterial map={texture} side={THREE.BackSide} />
    <boxGeometry args={[9.5, 3, 1]} />
    </mesh>
    </RigidBody> */}
{/* ////left */}
    {/* <RigidBody type='fixed' colliders="cuboid">
  <mesh position={[4, 0.5, 0]}>
  <meshStandardMaterial map={texture} side={THREE.BackSide} />
  <boxGeometry args={[1, 3, 9.5]} />
  </mesh>
  </RigidBody> */}
{/* right */}
{/* 
    <RigidBody type='fixed' colliders="cuboid">
    <mesh position={[-4, 0.5, 0]}>
    <meshStandardMaterial map={texture} side={THREE.BackSide} />
    <boxGeometry args={[1, 3, 9.5]} />
    </mesh>*/}

    </Physics>


    </>
  )
}

export default Envelop
