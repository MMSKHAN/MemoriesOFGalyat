import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Html } from '@react-three/drei';
import logo from "./images/output-onlinegiftools.gif"
import {SkipBackwardBtnFill, SkipForwardBtnFill } from 'react-bootstrap-icons';
const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const songs = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  ];


  const nextSong = () => {
    setCurrentSong((currentSong + 1) % songs.length);
    setPlaying(true);
  };

  const prevSong = () => {
    setCurrentSong((currentSong - 1 + songs.length) % songs.length);
    setPlaying(true);
  };

  return (
    <Html position={[0, 0, 0.06]} scale={0.09} transform occlude>
        <div style={{width:"20rem"}}  >
<img src={logo} alt="player logo" style={{width:"100%"}} />
        </div>
      <div >
        <ReactPlayer
          url={songs[currentSong]}
          playing={playing}
          controls
          height="50px"
          width="300px"
        />
        <div style={{display:"flex", gap:"1rem",background:"black",width:"fit-content",padding:"0.5rem", borderRadius:"10px"  }} >
          {/* <button onClick={togglePlayPause}>
            {playing ? <StopCircleFill/> : <PlayCircleFill/>}

          </button> */}
          {/* <button onClick={stopPlaying}><StopCircleFill/></button> */}
          <div onClick={prevSong}><SkipBackwardBtnFill style={{color:"white"}} /></div>
          <div onClick={nextSong}><SkipForwardBtnFill style={{color:"white"}} /></div>
        </div>
      </div>
    </Html>
  );
};

export default MusicPlayer;
