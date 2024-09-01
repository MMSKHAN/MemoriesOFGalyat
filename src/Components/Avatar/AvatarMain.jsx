import { KeyboardControls, OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import NavCards from "../Nav/NavCards";
import Envelop from "./Envelop";
import { XR, createXRStore } from '@react-three/xr';

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];

const store = createXRStore();

function AvatarMain() {
  return (
    <>
   

      <Canvas style={{ height: "100vh",position:"relative",top:"10px" }} camera={{ fov: 30, position: [0, 0.5, -3] }}>
        <XR store={store}>
          {/* <Stats /> */}
          <ambientLight intensity={1} /> {/* Adjusted intensity */}
          <OrbitControls />

          <Physics>
            <RigidBody type="fixed">
              <NavCards background={"/textures/bright-blue-sky-lush-green-meadow-perfect-summer-day-generated-by-artificial-intelligence.jpg"} />
            </RigidBody>

            {/* Uncomment or adjust based on actual implementation */}
            {/* <RigidBody type="fixed">
              <mesh position={[0, 0.1, -2]} rotation={[5, 0, 0]}>
                <Avatar2 />
              </mesh>
            </RigidBody> */}

            <RigidBody type="static">
              <mesh rotation={[0, 9.4, 0]} position={[2, 0, -2]}>
                {/* <Shop /> */}
              </mesh>
            </RigidBody>

            <mesh position={[0, 3, -2]}>
              {/* <CharacterController /> */}
            </mesh>

            <RigidBody type="fixed">
              <Envelop />
            </RigidBody>
          </Physics>
        </XR>
      </Canvas>
      <button onClick={() => store.enterVR()} style={{ position: 'absolute', top: 20, left: 20 }}>
        Enter AR
      </button>
    </>
  );
}

export default AvatarMain;
