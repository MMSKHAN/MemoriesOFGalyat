import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Nfts() {
  // Load GLTF model and animations
  const { nodes, materials, animations } = useGLTF('/models/plane.glb');
  animations[0].name="fly"
  // Reference to access the animations
  const group = useRef();
  // Hook to control animations
  const { actions } = useAnimations(animations, group);
 useEffect(()=>{
    actions["fly"].reset().play()
 },[])
  const model = useLoader(GLTFLoader, '/models/plane.glb');
  const onBoxClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      {/* Render the model with animations */}

      {/* <OrbitControls/> */}
      <mesh >

      <group ref={group}  onClick={() => onBoxClick('/MyNFTS')} >
        <primitive object={model.scene} scale={[0.3,0.3,0.3]} rotation={[0,3,0]}  />
      </group>
      </mesh>
    </>
  );
}

export default Nfts;
