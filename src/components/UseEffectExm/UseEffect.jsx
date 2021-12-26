import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const UseEffect = () => {
  const [value, setValue] = useState(0);
  const [interval, setIntervalValue] = useState(50);
  console.log('interval>>', interval);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(value => value + 1);
    }, interval);

    // скасування підписки
    return () => {
      clearInterval(intervalId);
      console.log('clearInterval');
    };
  }, [interval]);

  const handleIntervalClick = ms => {
    setIntervalValue(ms);
  };

  return (
    <div className="main">
      <div>
        <h1>Timer</h1>
        <h2>{value}</h2>
      </div>

      <div className="row">
        <Button variant="primary" onClick={() => handleIntervalClick(100)}>
          100ms
        </Button>
        <Button variant="primary" onClick={() => handleIntervalClick(500)}>
          500ms
        </Button>
        <Button variant="primary" onClick={() => handleIntervalClick(1000)}>
          1000ms
        </Button>
      </div>
    </div>
  );
};

export default UseEffect;
