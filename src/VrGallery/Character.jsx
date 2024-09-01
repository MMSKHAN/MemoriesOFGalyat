import React from 'react'
import { Avatar } from './Avatars/Avatar'
import { Cali } from './Avatars/Cali'
import { Saim } from './Avatars/Saim'
import { Ali } from './Avatars/Ali'
import { Tariq } from './Avatars/Tariq'
import { Rashid } from './Avatars/Rashid'
import { Ayesha } from './Avatars/Ayesha'

function Character() {
  return (
    <>
    <ambientLight intensity={0.5} />
     <group position={[0,-0.81,-10]} >
     <Avatar/>
     </group>
     <group position={[1,-0.81,-10]} >
     <Cali/>
     </group>
     <group position={[2,-0.81,-10]} >
    <Ali/>
     </group>
     <group position={[3,-0.81,-10]} >
    <Tariq/>
    
     </group>
     <group position={[4,-0.81,-10]} >
    <Ayesha/>
     </group>
     <group position={[5,-0.81,-10]} >
    <Saim/>
     </group>
     <group position={[6,-0.81,-10]} >
    <Rashid/>
     </group>
    </>
  )
}

export default Character
