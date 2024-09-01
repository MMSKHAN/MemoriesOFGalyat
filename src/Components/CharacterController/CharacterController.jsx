import React, { useRef } from 'react';
import { CapsuleCollider, RigidBody } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { MovePerson } from '../3d/MovePerson'; // Check the path for MovePerson
import { Physics } from '@react-three/rapier';
function CharacterController() {
//   const charRef = useRef();
//   const Mov_Spe = 0.5;

//   // Define keyboard controls
//   const { forward, back, left, right } = useKeyboardControls();

//   useFrame(() => {
//     const impulse = new Vector3(0, 0, 0);

//     if (forward) impulse.z -= Mov_Spe;
//     if (back) impulse.z += Mov_Spe;
//     if (left) impulse.x -= Mov_Spe;
//     if (right) impulse.x += Mov_Spe;

//     // Apply impulse to the rigid body
//     if (charRef.current) {
//       charRef.current.applyImpulse(impulse);
//     }
//   });

  return (
    <>
      <group>
        <Physics>

        <RigidBody  colliders={false} type='fixed' position={[0, -5, 0]}>
          <CapsuleCollider />
          {/* Include MovePerson component inside the RigidBody */}
          <MovePerson />
        </RigidBody>
        </Physics>
      </group>
    </>
  );
}

export default CharacterController;
