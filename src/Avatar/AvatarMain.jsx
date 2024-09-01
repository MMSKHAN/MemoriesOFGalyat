import { CameraControls, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
// import { Avatar2 } from '../Avatar/Avatar2'
import AgentVoice from './AgentVoice'
// import { Avatar2 } from './Avatar2'

function AvatarMain() {
  return (
    <Canvas style={{ height: "100vh",width:"100%" }} camera={{fov:"35",position:[0,0,4]}}  >
    {/* <Canvas style={{height:"100vh"}}  > */}

    <ambientLight intensity={5} />
    <CameraControls/>
    {/* <group position-z={[3]} >
    </group> */}
    <AgentVoice/>
    {/* <Avatar2/> */}
    </Canvas>
  )
}

export default AvatarMain
