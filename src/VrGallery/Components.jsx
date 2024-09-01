import React from 'react'
import { Avatar } from './Avatars/Avatar'
import { Gallery } from './Gallery'
import { Box } from '@react-three/drei'
import Textures from './Textures'
import { RigidBody } from '@react-three/rapier'
// import Plants from './Plants'
import Character from './Character'
import Screen from './Screen'
import Texts from './Texts'
import Screenback from './Screenback'
import Audioplayer from './Avatars/Audioplayer'

function Components() {
  return (
    <>
            
          <Character/>
             <Gallery />
             {/* <Plants/> */}
             <Audioplayer/>
             <Texts/>
             <Screen/>
             <Screenback/>
            <Textures/>
        
    </>
  )
}

export default Components
