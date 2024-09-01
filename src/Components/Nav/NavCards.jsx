import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from "three"
import Nfts from './Nfts'
function NavCards({background}) {
    const texture=useTexture(background)

  return (
    <>
    <RoundedBox args={[0.9,0.7,0.1]} position={[0,0.5,-0.1]}  >
        {/* <OrbitControls/> */}
        <MeshPortalMaterial side={THREE.DoubleSide} blend={0} >
<ambientLight intensity={1} />
{/* <Environment preset='sunset' /> */}
<Nfts/>
<mesh>
    <sphereGeometry args={[5,64,64]}  />
    <meshStandardMaterial map={texture} side={THREE.BackSide} />
</mesh>


        </MeshPortalMaterial>
    
    </RoundedBox>

<RoundedBox args={[0.9,0.7,0.1]} position={[1,0.5,-0.1]}  >
        {/* <OrbitControls/> */}
        <MeshPortalMaterial side={THREE.DoubleSide} blend={0} >
<ambientLight intensity={1} />
{/* <Environment preset='sunset' /> */}
<mesh rotation={[0,0,0]} position={[0,0,0]}  >
<Nfts/>
</mesh>
<mesh>
    <sphereGeometry args={[5,64,64]}  />
    <meshStandardMaterial map={texture} side={THREE.BackSide} />
</mesh>


        </MeshPortalMaterial>
    
    </RoundedBox>
    </>

  )
}

export default NavCards
