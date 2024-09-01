import { MeshPortalMaterial, RoundedBox } from '@react-three/drei'
import React from 'react'

function PortalWalls() {
  return (
    
      
    <RoundedBox args={[8,2,0.1]} position={[0,0.9,3.9]}>
    <MeshPortalMaterial  side={THREE.DoubleSide} blend={0} >
    <ambientLight intensity={1} />
    <mesh  position={[0, 0.5, -4]} >
    <sphereGeometry args={[5,64,64]}  />
    <meshStandardMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    </MeshPortalMaterial>
    </RoundedBox>
  )
}

export default PortalWalls
