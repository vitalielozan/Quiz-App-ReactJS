import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

function DigitalClock() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
