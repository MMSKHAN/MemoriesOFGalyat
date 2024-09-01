import { Canvas, useThree } from '@react-three/fiber';
import { XR, createXRStore } from '@react-three/xr';
import { Suspense, useEffect } from 'react';
import { Physics, RigidBody } from '@react-three/rapier';
import Components from './Components';
import { Environment } from '@react-three/drei';
import Audioplayer from './Avatars/Audioplayer';
// Create an XR store
const store = createXRStore(
  {
  controller: {
    left: true,
    right: true,
  },
}
);

function EnterVROnLoad() {
  const { gl } = useThree();
  
  useEffect(() => {
    if (gl && store) {
      store.enterVR().catch((error) => {
        console.error('Failed to enter VR mode:', error);
      });
    }
  }, [gl]);

  return null;
}

function GalleyMain() {
  return (
    <>
    {/* <Audioplayer/> */}
    <Canvas style={{ height: '100vh' }}>
  <Suspense  fallback={null} >
    <Physics>
    <XR store={store}>
        <EnterVROnLoad />
      <mesh
          pointerEventsType={{ deny: 'grab' }}
        

          position={[2, 0, -6]}
        >
          
<Components/>
        </mesh>

      </XR>



    </Physics>
  </Suspense>
    </Canvas>
    </>);
}

export default GalleyMain;
