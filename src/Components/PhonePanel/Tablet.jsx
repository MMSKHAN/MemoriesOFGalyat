// import { Environment, Html, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from '@react-three/drei'
// import React from 'react'
// import * as THREE from "three"
// import Form from './Form'
// import MusicPlayer from './MusicPlayer'
// import TimeandDate from './TimeandDate'
// function Tablet() {
//     const texture=useTexture("/textures/pexels-maxandrey-1366630.jpg")

//   return (
//     <>
//     <RoundedBox args={[0.9,0.7,0.1]} position={[0,0.5,-0.1]}  >
//         {/* <OrbitControls/> */}
//         <MeshPortalMaterial side={THREE.DoubleSide} blend={0} >
// <ambientLight intensity={1} />
// {/* <Environment preset='sunset' /> */}
// <mesh>
//     <sphereGeometry args={[5,5,5]}  />
//     <meshStandardMaterial map={texture} side={THREE.BackSide} />
// </mesh>


//         </MeshPortalMaterial>
      
//                     <Form/>
//                     <MusicPlayer/>
//               <TimeandDate/>
    
//     </RoundedBox>


//     </>

//   )
// }

// export default Tablet
// import React, { useState } from 'react';
// import * as THREE from 'three';
// import { Html, useTexture } from '@react-three/drei';
// import { RoundedBox, MeshPortalMaterial } from '@react-three/drei';
// import Form from './Form';
// import MusicPlayer from './MusicPlayer';
// import TimeandDate from './TimeandDate';

// function Tablet() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const texture = useTexture("/textures/pexels-maxandrey-1366630.jpg");

//     // Array of components to display
//     const components = [
//         <Form key="form" />,
//         <MusicPlayer key="music-player" />,
//         <TimeandDate key="time-and-date" />
//     ];

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
//     };

//     return (
//         <>
//             <RoundedBox args={[0.9, 0.7, 0.1]} position={[0, 0.5, -0.1]}>
//                 <MeshPortalMaterial side={THREE.DoubleSide} blend={0}>
//                     <ambientLight intensity={1} />
//                     <mesh>
//                         <sphereGeometry args={[5, 5, 5]} />
//                         <meshStandardMaterial map={texture} side={THREE.BackSide} />
//                     </mesh>
//                 </MeshPortalMaterial>
//                 {components[currentIndex]}
//             </RoundedBox>

//             {/* Navigation Buttons */}
//             <Html position={[0.2, 0.3, 0.06]} scale={0.09} transform occlude >
    
//             <button onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '10%' }}>
//                 Previous
//             </button>
//             <button onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '10%' }}>
//                 Next
//             </button>
//         </Html>
//         </>
//     );
// }

// export default Tablet;
import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { RoundedBox, MeshPortalMaterial } from '@react-three/drei';
import Form from './Form';
import MusicPlayer from './MusicPlayer';
import TimeandDate from './TimeandDate';

function Tablet() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texture = useTexture("/textures/pexels-maxandrey-1366630.jpg");

    // Array of components to display
    const components = [
        <Form key="form" />,
        <MusicPlayer key="music-player" />,
        <TimeandDate key="time-and-date" />
    ];

    const handleScroll = (event) => {
        // Scroll direction: event.deltaY > 0 means scrolling down (next), event.deltaY < 0 means scrolling up (previous)
        if (event.deltaY > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
        }
    };

    useEffect(() => {
        // Attach scroll event listener
        window.addEventListener('wheel', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <>
            <RoundedBox args={[0.9, 0.7, 0.1]} position={[0, 0.5, -0.1]}>
                <MeshPortalMaterial side={THREE.DoubleSide} blend={0}>
                    <ambientLight intensity={1} />
                    <mesh>
                        <sphereGeometry args={[5, 5, 5]} />
                        <meshStandardMaterial map={texture} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
                {components[currentIndex]}
            </RoundedBox>
        </>
    );
}

export default Tablet;
