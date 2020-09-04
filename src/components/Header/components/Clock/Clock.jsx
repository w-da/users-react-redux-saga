import React, { useState, useEffect } from 'react';

import styles from './Clock.module.scss';

const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

export const Clock = () => {
  const [time, setTime] = useState(
    new Date().toLocaleString('en-US', timeOptions)
  );

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function updateTime() {
    const currentTime = new Date().toLocaleString('en-US', timeOptions);
    setTime(currentTime);
  }

  return (
    <div className={styles.clockWrapper}>
      <p className={styles.clock}>{time}</p>
    </div>
  );
};
