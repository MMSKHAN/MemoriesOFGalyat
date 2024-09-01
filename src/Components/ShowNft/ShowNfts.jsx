// import React, { useState, useEffect } from 'react';
// import { Html } from '@react-three/drei';
// import img1 from "./mypics/IMG_20240729_232155.jpg";
// import img2 from "./mypics/img11.png";
// import img3 from './mypics/img12.png';
// import img4 from './mypics/sit.jpg';
// import img5 from './mypics/WhatsApp Image 2024-07-23 at 10.47.17 AM.jpeg';
// import img6 from './mypics/WhatsApp Image 2024-07-23 at 10.47.44 AM.jpeg';

// function ShowNfts() {
//     const [currentIndex, setCurrentIndex] = useState(0);
    
//     // Array of image sources
//     const images = [img1, img2, img3, img4, img5, img6];

//     // Determine the images to display (3 at a time)
//     const visibleImages = [
//         images[currentIndex % images.length],
//         images[(currentIndex + 1) % images.length],
//         images[(currentIndex + 2) % images.length]
//     ];

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 3 + images.length) % images.length);
//     };

//     useEffect(() => {
//         // Set up an interval to change images automatically every 5 seconds
//         const intervalId = setInterval(handleNext, 5000);

//         // Clear the interval when the component unmounts
//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <Html position={[0.2, 0.3, 0.06]} scale={0.09} transform occlude>
//             <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//                 <button 
//                     onClick={handlePrev} 
//                     style={{ 
//                         position: 'absolute', 
//                         top: '50%', 
//                         left: '10%', 
//                         transform: 'translateY(-50%)',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         border: 'none',
//                         borderRadius: '5px',
//                         padding: '5px 10px'
//                     }}>
//                     Previous
//                 </button>
//                 <div style={{ display: 'flex', overflow: 'hidden', width: '900px' }}>
//                     {visibleImages.map((src, index) => (
//                         <img 
//                             key={index} 
//                             src={src} 
//                             alt={`NFT ${index}`} 
//                             style={{ 
//                                 width: '300px', 
//                                 objectFit: 'cover',
//                                 height: '200px'
//                             }} 
//                         />
//                     ))}
//                 </div>
//                 <button 
//                     onClick={handleNext} 
//                     style={{ 
//                         position: 'absolute', 
//                         top: '50%', 
//                         right: '10%', 
//                         transform: 'translateY(-50%)',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         border: 'none',
//                         borderRadius: '5px',
//                         padding: '5px 10px'
//                     }}>
//                     Next
//                 </button>
//             </div>
//             <div><img src="selected image" alt="" /></div>
//         </Html>
//     );
// }

// export default ShowNfts;
import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import img1 from "./mypics/IMG_20240729_232155.jpg";
import img2 from "./mypics/img11.png";
import img3 from './mypics/img12.png';
import img4 from './mypics/sit.jpg';
import img5 from './mypics/WhatsApp Image 2024-07-23 at 10.47.17 AM.jpeg';
import img6 from './mypics/WhatsApp Image 2024-07-23 at 10.47.44 AM.jpeg';

function ShowNfts() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    // Array of image sources
    const images = [img1, img2, img3, img4, img5, img6];

    // Determine the images to display (3 at a time)
    const visibleImages = [
        images[currentIndex % images.length],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length]
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + images.length) % images.length);
    };

    useEffect(() => {
        // Set up an interval to change images automatically every 5 seconds
        const intervalId = setInterval(handleNext, 5000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Html position={[-0.1, 0.3, 0.06]} scale={0.09} rotation={[0, Math.PI * 2.5, 0]} transform occlude>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection:"column" }}>
              
                <div style={{ display: 'flex', overflow: 'hidden', width: '900px' }}>
                    {visibleImages.map((src, index) => (
                        <img 
                            key={index} 
                            src={src} 
                            alt={`NFT ${index}`} 
                            style={{ 
                                width: '300px', 
                                objectFit: 'cover',
                                height: '200px',
                                cursor: 'pointer',
                                margin: '0 5px'
                            }} 
                            onClick={() => setSelectedImage(src)}
                        />
                    ))}
                </div>
               <div> <button 
                    onClick={handlePrev} 
                   >
                    Previous
                </button>
                 <button 
                    onClick={handleNext} 
                   >
                    Next
                </button></div>
            </div>
            <div style={{ marginTop: '20px',width:"500px" }}>
                {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />}
            </div>
        </Html>
    );
}

export default ShowNfts;
