import { Text } from '@react-three/drei';
import React from 'react';

// Ensure component names start with an uppercase letter
function Gettext({ color,text, rotation, position }) {
  return (
    <mesh rotation={rotation} position={position}>
      <Text
        color={color} 
        fontSize={0.1} 
        fontStyle='italic'
        anchorX="center" 
        anchorY="middle" 
        textAlign='center'
      >
        {text}
      </Text>
    </mesh>
  );
}

function Texts() {
  return (
    <>
      <Gettext
        text={"Life is about the adventures you take and the memories you make"}
        rotation={[0, 0, Math.PI / 2]}
        position={[0, 1.9, 2]}
        color="red"
      />
      <Gettext
        text={"Of all the books in the world. The best stories are found between \n the pages of a passport."}
        rotation={[0, 0, Math.PI / 2]}
        position={[0, 1.9, -3.7]}
        color="black"
        
      />
      <Gettext
        text={"I always wonder why birds stay in the same place when they can fly \n anywhere on Earth. Then I ask myself the same question."}
        rotation={[0, 3, Math.PI / 2]}
        position={[0, 1.9, 3.7]}
        color="black"
        
      />
      <Gettext
        text={"make vacations, go as many places as you can. You can always make \n money, but  you can’t always  make memories."}
        rotation={[0, 3, Math.PI / 2]}
        position={[0, 1.9, -2.03]}
        color="red"
        
      />
      {/* ///left walli */}
      <Gettext
        text={"Nathia Gali"}
        rotation={[0, Math.PI /2, 0]}
        position={[-4.99,0.8,9.8]}
        color="red"
        
      />
      <Gettext
        text={"Nathia Gali"}
        rotation={[0, Math.PI /2, 0]}
        position={[-4.99,0.8,7.5]}
        color="green"
        
      />
      <Gettext
        text={"Ayubia National Park"}
        rotation={[0, Math.PI /2, 0]}
        position={[-4.99,0.8,5.2]}
        color="blue"
        
      />
      <Gettext
        text={" Pipeline Track Ayubia"}
        rotation={[0, Math.PI /2, 0]}
        position={[-4.99,0.8,2.9]}
        color="red"
        
      />
      <Gettext
        text={" Murree"}
        rotation={[0, Math.PI /2, 0]}
        position={[-4.99,0.8,0.6]}
        color="black"
        
      />
      <Gettext
        text={" Ayubia National Park"}
        rotation={[0, Math.PI /2, 0]}
        position={[-4.99,0.8,-1.7]}
        color="purple"
        
      />
     <Gettext
        text={"Nathia Gali"}
        rotation={[0, Math.PI /2, 0]}
        position={[-4.99,0.8,-4]}
        color="red"
        
      />
     <Gettext
        text={"Nathia Gali Bazaar"}
        rotation={[0, Math.PI /2, 0]}
        position={[-4.99,0.8,-6.3]}
        color="green"
        
      />
     <Gettext
        text={" Mushkpuri Track"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,9.8]}
        color="red"
        
      />
     <Gettext
        text={" Ayubia Waterfall"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,7.5]}
        color="green"
        
      />
     <Gettext
        text={" Dunga Gali"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,5.2]}
        color="blue"
        
      />
        <Gettext
        text={"Nathia Gali Bazaar"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,2.9]}
        color="black"
        
      />
        <Gettext
        text={"Nathia Gali"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,0.6]}
        color="green"
        
      />
        <Gettext
        text={" Mushkpuri Top"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,-1.7]}
        color="blue"
        
      />
        <Gettext
        text={" Church Ayubia"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,-4]}
        color="red"
        
      />
        <Gettext
        text={" Nathia Gali"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,-6.3]}
        color="black"
        
      />
        <Gettext
        text={" Ayubia Motto Tunnel"}
        rotation={[0, -Math.PI /2, 0]}
        position={[4.8,0.8,-8.6]}
        color="blue"
        
      />
       <Gettext
        text={"© Copyright. All Rights Reserved. Developed by Muhammad Saud Khan \n +923218304691"}
        rotation={[0, 0, Math.PI / 2]}
        position={[0, 1.8, 7.75]}
        color="white"
      />
    </>
  );
}

export default Texts;
