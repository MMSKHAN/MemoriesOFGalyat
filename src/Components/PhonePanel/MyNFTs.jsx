import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import {  OrbitControls } from '@react-three/drei'
import Form from './Form'
import Tablet from './Tablet'

function MyNFTs() {
  return (
    <Canvas style={{height:"100vh"}}   >
      <Suspense Suspense={false}  >
        <ambientLight intensity={5}  />
        {/* <Environment preset='sunset'  /> */}
      <OrbitControls/>
      <group position={[0,-0.5,4]} >
      <Tablet/>
    {/* <Form/> */}
      </group>
      </Suspense>
    </Canvas>
  )
}

export default MyNFTs
