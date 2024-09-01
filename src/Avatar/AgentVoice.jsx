import { RoundedBox, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { Avatar } from './Avatar';
import {dictionary} from 'cmu-pronouncing-dictionary'; // Import as a constant object

// Utility function to clean and format the text
const cleanText = (text) => {
  return text
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .toUpperCase(); // Convert to uppercase
};

const AgentVoice = () => {
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [data, setData] = useState([]); // Changed to array to store phonemes

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
      textToPhonemes("Hello Boss");
    } else if (message.includes('how are you'||'who are you')) {
      response = "I am fine boss, tell me how can I help you";
      textToPhonemes("I am fine boss, tell me how can I help you");
    } else if (message.includes('name')) {
      response = "My name is OPtimus Khan the Personal Assistant of Saud Khan";
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
      response = "Goodbye and Shutdown";
    } else {
      window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
      response = `I found some information for ${message} on Google`;
    }

    speak(response);
  };

  const textToPhonemes = (text) => {
    const words = text.split(/\s+/);
    console.log('dictionary:', dictionary); // Add this line to check the dictionary
    const phonemes = words.flatMap(word => {
      const wordLower = word.toLowerCase(); // Convert to lowercase
      for (const dictWord in dictionary) {
        if (dictWord === wordLower) {
          return dictionary[dictWord].replace(/\d/g, ''); // Remove digits from phonemes
        }
      }
      console.warn(`No phonemes found for word: ${wordLower}`);
      return '';
    });
    setData(phonemes);
    console.log("phonemes", phonemes); // Check the extracted phonemes
  };

  const startRecognition = () => recognition && recognition.start();

  return (
    <>
        <group position-z={[3]} position-y={[-0.4]} rotation={[5, 0, 0]}>
          <Avatar data={data} />
        </group>
        <RoundedBox args={[3, 3, 3]} onClick={startRecognition}>
          <meshStandardMaterial attach="material" color="lightblue" />
        </RoundedBox>
        <Text position={[0, -4, 0]} fontSize={0.5} color="black">
          {transcript}
        </Text>
    </>
  );
};

export default AgentVoice;
