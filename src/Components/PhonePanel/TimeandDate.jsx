import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';

const TimeandDate = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Html position={[0.8, 0, 0.06]} scale={0.09} transform occlude >
      <div style={{ color: 'white', textAlign: 'center' }}>
        <div style={{ fontSize: '35px' }}>{formatTime(time)}</div>
        <div style={{ fontSize: '20px' }}>{time.toDateString()}</div>
      </div>
    </Html>
  );
};

export default TimeandDate;
