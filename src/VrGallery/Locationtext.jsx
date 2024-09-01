import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ExtrudeGeometry, Shape } from 'three';
import { MeshBasicMaterial } from 'three';
import { Vector2 } from 'three';
function Locationtext() {
    const shape = new Shape();
    shape.moveTo(0, 0);
    shape.lineTo(1, 0);
    shape.lineTo(1, 1);
    shape.lineTo(0, 1);
    shape.closePath();
  
    // Define extrude settings
    const extrudeSettings = {
      depth: 0.5, // Depth of extrusion
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 3,
    };
  
    // Create extruded geometry
    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  return (
    <>
   <mesh geometry={geometry}>
      <meshBasicMaterial color="orange" />
    </mesh>
    </>
  )
}

export default Locationtext
