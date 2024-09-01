import { Text, useVideoTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { TextureLoader } from "three";

function Textures() {
    // Load your image as a texture
    const texture = useLoader(TextureLoader, '/textures/1724419440713.jpg');
    const groupmam = useLoader(TextureLoader, '/textures/IMG-20240822-WA0041.jpg');
    const group1 = useLoader(TextureLoader, '/textures/g1.jpg');
    const group2 = useLoader(TextureLoader, '/textures/g2.jpg');
    const group3 = useLoader(TextureLoader, '/textures/g3.jpg');
    const group4 = useLoader(TextureLoader, '/textures/g4.jpg');
  const ali1 = useLoader(TextureLoader, '/textures/ali1.jpg');
  const ali2 = useLoader(TextureLoader, '/textures/ali2.jpg');
  const ali3 = useLoader(TextureLoader, '/textures/ali3.jpg');
  const rashid1 = useLoader(TextureLoader, '/textures/rashid1.jpg');
  const rashid2 = useLoader(TextureLoader, '/textures/rashid2.jpg');
  const saim1 = useLoader(TextureLoader, '/textures/saim1.jpg');
  const saim2 = useLoader(TextureLoader, '/textures/saim2.jpg');
  const mypic1 = useLoader(TextureLoader, '/textures/mypic1.jpg');
  const mypic2 = useLoader(TextureLoader, '/textures/mypic2.jpg');
  const mypic3 = useLoader(TextureLoader, '/textures/mypic3.jpg');
  const mypic4 = useLoader(TextureLoader, '/textures/mypic4.jpg');
  const mypic5 = useLoader(TextureLoader, '/textures/mypic5.jpg');
  const mypic6 = useLoader(TextureLoader, '/textures/mypic6.jpg');
  const mypic7 = useLoader(TextureLoader, '/textures/mypic7.jpg');
  const mypic8 = useLoader(TextureLoader, '/textures/mypic8.jpg');
  const mypic9 = useLoader(TextureLoader, '/textures/mypic9.jpg');
  const mypic10 = useLoader(TextureLoader, '/textures/mypic10.jpg');
  const mypic11 = useLoader(TextureLoader, '/textures/mypic11.jpg');
  const mypic12 = useLoader(TextureLoader, '/textures/mypic12.jpg');



    const texture2 = useVideoTexture('/animations/video.mp4');
  
    return (
     <>
     
       {/* left right wall  */}
        <mesh rotation={[0, -Math.PI /2,0]} position={[-0.2,2,-5.7]}  >
        <planeGeometry args={[4,4]}  />
        <meshBasicMaterial map={group2} />
      </mesh>
      <mesh rotation={[0, -Math.PI /2,0]} position={[-0.2,1.9,0]}  >
        <planeGeometry args={[4,3.5]}  />
        <meshBasicMaterial map={groupmam} />
      </mesh>
        <mesh rotation={[0, -Math.PI /2,0]} position={[-0.2,2,5.7]}  >
        <planeGeometry args={[4,4]}  />
        <meshBasicMaterial map={group1} />
      </mesh>
      {/* left wall */}
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,9.8]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={ali1} />
      </mesh>
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,7.5]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={rashid1} />
      </mesh>
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,5.2]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={saim1} />
      </mesh>
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,2.9]}  >
        <planeGeometry args={[2,2]}  />
        {/* <meshBasicMaterial map={texture2} /> */}
        <meshBasicMaterial map={mypic1} />
      </mesh>
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,0.6]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic2} />
      </mesh>
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,-1.7]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={ali2} />
      </mesh>
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,-4]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={rashid2} />
      </mesh>
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,-6.3]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={saim2} />
      </mesh>
        <mesh rotation={[0, Math.PI /2,0]} position={[-4.91,2,-8.6]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic3} />
      </mesh>
{/* right wall  */}
<mesh rotation={[0, Math.PI /2,0]} position={[0.2,2,-5.7]}  >
        <planeGeometry args={[4,4]}  />
        <meshBasicMaterial map={mypic12} />
      </mesh>
<mesh rotation={[0, Math.PI /2,0]} position={[0.2,2,0]}  >
        <planeGeometry args={[4,4]}  />
        <meshBasicMaterial map={group4} />
      </mesh>
<mesh rotation={[0, Math.PI /2,0]} position={[0.2,2,5.7]}  >
        <planeGeometry args={[4,4]}  />
        <meshBasicMaterial map={group3} />
      </mesh>
      {/* right Wall  */}
      <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,9.8]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic4} />
      </mesh>
      <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,7.5]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic5} />
      </mesh>
      <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,5.2]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic6} />
      </mesh>
        <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,2.9]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic7} />
      </mesh>
        <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,0.6]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={ali3} />
      </mesh>
        <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,-1.7]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic8} />
      </mesh>
        <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,-4]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic9} />
      </mesh>
        <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,-6.3]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic10} />
      </mesh>
        <mesh rotation={[0, -Math.PI /2,0]} position={[4.8,2,-8.6]}  >
        <planeGeometry args={[2,2]}  />
        <meshBasicMaterial map={mypic11} />
      </mesh>

      </>
    );
  }
export default Textures  