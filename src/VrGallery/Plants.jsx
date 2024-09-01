import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'

function Plants() {
    const { scene: scene1 } = useGLTF('/models/plant.glb');
    const { scene: scene2 } = useGLTF('/models/grass_in_a_plant_pot.glb');
    const { scene: scene3 } = useGLTF('/models/plants.glb');

    const { scene: scene4 } = useGLTF('/models/plant_lowpoly2.glb');
    const { scene: scene5 } = useGLTF('/models/plant_lowpoly.glb');
    const { scene: scene6 } = useGLTF('/models/plants_foliage_study.glb');
    const { scene: scene7, animations: animations1 } = useGLTF('/models/rigged_indoor-plant_animation_test2.glb');
    const { scene: scene8, animations: animations2 } = useGLTF('/models/rigged_indoor-plant_animation_test.glb');
    animations1[0].name="plant1"
    animations2[0].name="plant2"
    const { actions: actions1 } = useAnimations(animations1, scene7); 
    const { actions: actions2 } = useAnimations(animations2, scene8); 
    useEffect(()=>{
        if (actions1) {
            // actions1['plant1'].play(); // Replace 'AnimationName' with your animation's name
          }
        if (actions2) {
            // actions2['plant2'].play(); // Replace 'AnimationName' with your animation's name
          }
    }) 
  
    return (
    <>
    <ambientLight intensity={5} />
      <mesh position={[0,0,9]} rotation={[0,Math.PI/1,0]} >
      <primitive object={scene1} scale={[0.05,0.05,0.05]} />
      </mesh>
      <mesh position={[3,0,10]} >
      <primitive object={scene2} scale={[4,4,4]} />
      </mesh>
      {/* front */}
      <mesh position={[-2.5,0.28,11]} >
      <primitive object={scene3} scale={[16,16,16]} />
      </mesh>
      <mesh position={[-2.5,0.5,9.5]} >
      <primitive object={scene6} scale={[0.6,0.6,0.6]} />
      </mesh>
    
    

  {/* left  */}
      <mesh position={[-0.5,0.1,2]} >
      <primitive object={scene8} scale={[3,3,3]} />
      </mesh>
     
      <mesh position={[-0.5,0,-3.7]} >
      <primitive object={scene5} scale={[0.2,0.2,0.2]} />
      </mesh>
      {/* right  */}

      <mesh position={[0.5,0.1,3.6]} >
      <primitive object={scene4} scale={[0.2,0.2,0.2]} />
      </mesh>
      <mesh position={[0.5,0.1,-2.2]} >
      <primitive object={scene7} scale={[3,3,3]} />
      </mesh>
  

    
    </>
  )
}

export default Plants
