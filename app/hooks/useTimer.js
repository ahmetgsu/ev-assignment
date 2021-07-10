import React, {useState, useRef} from 'react';

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setTimer(0);
  };

  return {
    timer,
    isActive,
    handleStart,
    handleStop,
  };
};

export default useTimer;
