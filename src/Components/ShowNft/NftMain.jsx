import { Canvas } from '@react-three/fiber'
import React from 'react'
import ShowNfts from './ShowNfts'
import { Environment, OrbitControls } from '@react-three/drei'

function NftMain() {
  return (
    <>
    <Canvas style={{ height: "100vh" }} camera={{fov:"30",position:[0,0.5,-3]}}  >
<Environment preset='sunset' />
<OrbitControls/>
<ShowNfts/>
    </Canvas>
    </>
  )
}

export default NftMain
