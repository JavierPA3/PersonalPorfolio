import React, { useEffect, useState } from 'react';
import './clock.css';

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getClockHandStyles = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return {
      hour: { transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)` },
      minute: { transform: `rotate(${minutes * 6}deg)` },
      second: { transform: `rotate(${seconds * 6}deg)` },
    };
  };

  const { hour, minute, second } = getClockHandStyles();

  return (
    <div className="clock">
      <div className="analog-clock">
        <div className="clock-face">
          <div className="hand hour" style={hour}></div>
          <div className="hand minute" style={minute}></div>
          <div className="hand second" style={second}></div>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`hour-mark mark-${i + 1}`}></div>
          ))}
        </div>
      </div>
      <div className="digital-clock">
        {time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </div>
      <div className="clock-date">
        {time.toLocaleDateString('es-ES', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </div>
    </div>
  );
};
