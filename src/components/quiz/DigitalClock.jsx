import React, { useState, useEffect } from 'react';
import '../../styles/DigitalClock.css';
import { formatTime } from '../../functions/formatTime.js';

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

  return (
    <div className='clock-container '>
      <div className='clock'>
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
