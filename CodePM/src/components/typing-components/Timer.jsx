import React from 'react';

export default function Timer({ time }) {
  return (
    <div className="timer-container">
        <p>{time}</p>
    </div>
  );
}