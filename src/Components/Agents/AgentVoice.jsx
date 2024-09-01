import { RoundedBox, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { Avatar2 } from './Avatar2';

const AgentVoice = () => {
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [data, setData] = useState(false);

  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    setRecognition(recognitionInstance);

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript;
      setTranscript(transcript);
      handleSpeech(transcript.toLowerCase());
    };

    return () => recognitionInstance.stop();
  }, []);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeech = (message) => {
    let response = "I did not understand what you said, please try again";

    if (message.includes('hello')) {
      response = "Hello Boss";
      setData("Hello Boss")
    } else if (message.includes('how are you')) {
      response = "I am fine boss, tell me how can I help you";
      setData("I am fine boss, tell me how can I help you")
    } else if (message.includes('name')) {
      response = "My name is OPtimus Khan the Personal Assistant of Saud khan";
    } else if (message.includes('open google')) {
      window.open("https://google.com", "_blank");
      response = "Opening Google";
    } else if (message.includes('open instagram')) {
      window.open("https://instagram.com", "_blank");
      response = "Opening Instagram";
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
      window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
      response = `This is what I found on the internet regarding ${message}`;
    } else if (message.includes('wikipedia')) {
      window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
      response = `This is what I found on Wikipedia regarding ${message}`;
    } else if (message.includes('time')) {
      response = new Date().toLocaleTimeString();
    } else if (message.includes('date')) {
      response = new Date().toLocaleDateString();
    } else if (message.includes('calculator')) {
      window.open('Calculator:///');
      response = "Opening Calculator";
    } else if (message.includes('shutdown')) {
      window.open('shutdown /s /f /t 0:///');
      response = "Good bye and Shutdown ";
    }
    
    else {
      window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
      response = `I found some information for ${message} on Google`;
    }

    speak(response);
  };

  const startRecognition = () => recognition && recognition.start();

  return (
    // <>
    //   <button onClick={startRecognition}>Talk</button>
    //   <div>{transcript}</div>
    // </>
    <>
      {/* <div>{transcript}</div> */}
      {/* <Canvas> */}
      <group position-z={[3]} position-y={[-0.4]}  rotation={[5,0,0]} >
    <Avatar2 data={data}   />
    </group>
        <RoundedBox args={[3, 3, 3]} onClick={startRecognition} >
          <meshStandardMaterial attach="material" color="lightblue" />
        </RoundedBox>
        <Text position={[0, -4, 0]} fontSize={0.5} color="black">
          {transcript}
        </Text>
      {/* </Canvas> */}
    </>
  );
};

export default AgentVoice;
