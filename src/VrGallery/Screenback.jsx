import { useTexture } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import { DoubleSide } from 'three';

function Screenback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const img1 = useTexture('textures/c1.jpg');
  const img2 = useTexture('textures/c2.jpg');
  const img3 = useTexture('textures/c3.jpg');
  const img4 = useTexture('textures/c4.jpg');
  const img5 = useTexture('textures/c5.jpg');
  const img6 = useTexture('textures/c6.jpg');

  const images = [img1, img2, img3, img4, img5, img6];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Set up an interval to change images automatically every 5 seconds
    const intervalId = setInterval(handleNext, 8000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
   
      <mesh rotation={[0, 0, 0]} position={[0, 2, 10.96]}>
        <planeGeometry args={[10, 4]} />
        <meshBasicMaterial map={images[currentIndex]} side={DoubleSide} />
      </mesh>
    </>
  );
}

export default Screenback;
