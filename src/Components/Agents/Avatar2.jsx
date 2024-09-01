import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import { useAnimations, useFBX } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export function Avatar2({ data, ...props }) {
  const [animation, setAnimation] = useState('idle');
  const { nodes, materials } = useGLTF('/models/Avatar.glb');
  const { animations: run } = useFBX('/animations/Running.fbx');
  const { animations: walk } = useFBX('/animations/Walking.fbx');
  const { animations: idle } = useFBX('/animations/Idle.fbx');
  const { animations: talk } = useFBX('/animations/Talking.fbx');
  const morphTargetSmoothing = 0.5; 
  const smoothMorphTarget= true;
   const lipsyncText="thiss is my country boy who are your i dont not know "
  const group = useRef();
  run[0].name = 'run';
  walk[0].name = 'walk';
  idle[0].name = 'idle';
  talk[0].name = 'talk';
  const { actions } = useAnimations([run[0], walk[0], idle[0],talk[0]], group);

  useEffect(() => {
    if (animation === 'idle') {
      actions.idle.play();
      actions.run.stop();
      actions.walk.stop();
      actions.talk.stop();
    } else if (animation === 'run') {
      actions.idle.stop();
      actions.run.play();
      actions.walk.stop();
      actions.talk.stop();
    } else if (animation === 'walk') {
      actions.idle.stop();
      actions.run.stop();
      actions.walk.play();
      actions.talk.stop();
    } 
    else if (animation === 'talk') {
      actions.talk.play();
      actions.idle.stop();
      actions.run.stop();
      actions.walk.stop();
    } 
    
    else {
      actions.idle.stop();
      actions.run.stop();
      actions.walk.stop();
      actions.talk.stop();
    }
  }, [animation, actions]);
const phonemeMapping = {
    'A': 'viseme_AA',
    'B': 'viseme_PP',
    'C': 'viseme_I',
    'D': 'viseme_AA',
    'E': 'viseme_O',
    'F': 'viseme_FF',
    'G': 'viseme_FF',
    'H': 'viseme_TH',
    'I': 'viseme_I',
    'J': 'viseme_J',
    'K': 'viseme_K',
    'L': 'viseme_L',
    'M': 'viseme_M',
    'N': 'viseme_N',
    'O': 'viseme_O',
    'P': 'viseme_PP',
    'Q': 'viseme_Q',
    'R': 'viseme_R',
    'S': 'viseme_S',
    'T': 'viseme_T',
    'U': 'viseme_U',
    'V': 'viseme_FF',
    'W': 'viseme_W',
    'X': 'viseme_X',
    'Y': 'viseme_Y',
    'Z': 'viseme_Z'
  };
  const [blink, setBlink] = useState(false);

   useFrame(() => {
    if (!nodes.Wolf3D_Head) return;
    nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["eyeBlinkLeft"]] = blink ? 1 : 0;
    nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["eyeBlinkRight"]] = blink ? 1 : 0;

  });
  
  

  useEffect(() => {
    console.log(nodes.Wolf3D_Head.morphTargetDictionary)
    let blinkTimeout;
    const nextBlink = () => {
      blinkTimeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => {
          setBlink(false);
          nextBlink();
        }, 200);
      }, THREE.MathUtils.randInt(1000, 5000));
    };
    nextBlink();
    return () => clearTimeout(blinkTimeout);
    
  }, []);
//   useEffect(() => {
//     nodes.Wolf3D_Head.morphTargetInfluences[
//       nodes.Wolf3D_Head.morphTargetDictionary["viseme_I"]
//     ] = 1;
//     nodes.Wolf3D_Teeth.morphTargetInfluences[
//       nodes.Wolf3D_Teeth.morphTargetDictionary["viseme_I"]
//     ] = 1;
//   })
//  function textToPhonemes(text) {
//     return text.split('').map(char => phonemeMapping[char.toUpperCase()] || 'default');
//   }
// useFrame(() => {
//     if (!nodes.Wolf3D_Head || !nodes.Wolf3D_Teeth) return;

//     const phonemes = textToPhonemes(lipsyncText);

//     // Reset all morph targets
//     Object.values(phonemeMapping).forEach((value) => {
//       if (nodes.Wolf3D_Head.morphTargetDictionary[value] !== undefined) {
//         nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary[value]] = smoothMorphTarget
//           ? THREE.MathUtils.lerp(
//               nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary[value]],
//               0,
//               morphTargetSmoothing
//             )
//           : 0;
//         nodes.Wolf3D_Teeth.morphTargetInfluences[nodes.Wolf3D_Teeth.morphTargetDictionary[value]] = smoothMorphTarget
//           ? THREE.MathUtils.lerp(
//               nodes.Wolf3D_Teeth.morphTargetInfluences[nodes.Wolf3D_Teeth.morphTargetDictionary[value]],
//               0,
//               morphTargetSmoothing
//             )
//           : 0;
//       }
//     });

//     // Apply current phonemes
//     phonemes.forEach((phoneme) => {
//       if (nodes.Wolf3D_Head.morphTargetDictionary[phoneme] !== undefined) {
//         nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary[phoneme]] = smoothMorphTarget
//           ? THREE.MathUtils.lerp(
//               nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary[phoneme]],
//               1,
//               morphTargetSmoothing
//             )
//           : 1;
//         nodes.Wolf3D_Teeth.morphTargetInfluences[nodes.Wolf3D_Teeth.morphTargetDictionary[phoneme]] = smoothMorphTarget
//           ? THREE.MathUtils.lerp(
//               nodes.Wolf3D_Teeth.morphTargetInfluences[nodes.Wolf3D_Teeth.morphTargetDictionary[phoneme]],
//               1,
//               morphTargetSmoothing
//             )
//           : 1;
//       }
//     });
//   });



  return (
    <group {...props} dispose={null} ref={group} scale={0.3}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )

}

useGLTF.preload('models/Avatar.glb')