// src/AudioPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const songs = [
      "/audio/background2.mp3",
    "/audio/background audio.mp3",
    "/audio/background3.mp3",
  ];
  
  const audioRef = useRef(new Audio(songs[currentSongIndex]));

  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex];
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const playPreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  return (
      <group position={[-4.7,3.7,2]} rotation={[0, Math.PI /2,0]} >
        <mesh position={[-1, 0, 0]} onClick={playPreviousSong}>
          <planeGeometry args={[1, 0.5]} />
          <meshBasicMaterial color={"blue"} />
        </mesh>
        <Text fontSize={0.2} color={"white"} position={[-1, 0, 0.01]}>
          Previous
        </Text>

        <mesh position={[0, 0, 0]} onClick={togglePlayPause}>
          <planeGeometry args={[1, 0.5]} />
          <meshBasicMaterial color={"green"} />
        </mesh>
        <Text fontSize={0.2} color={"white"} position={[0, 0, 0.01]}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>

        <mesh position={[1, 0, 0]} onClick={playNextSong}>
          <planeGeometry args={[1, 0.5]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
        <Text fontSize={0.2} color={"white"} position={[1, 0, 0.01]}>
          Next
        </Text>
      </group>
  
  );
};

export default AudioPlayer;
