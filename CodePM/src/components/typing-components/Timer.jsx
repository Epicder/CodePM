import React from 'react';

export default function Timer({ time }) {
  return (
    <div className="timer-container">
      <h3>Time</h3>
      <div className="timer">
        <p>{time}</p>
      </div>
    </div>
  );
}