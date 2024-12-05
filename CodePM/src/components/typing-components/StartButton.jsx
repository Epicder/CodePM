import React from 'react';

export default function StartButton({ onClick }) {
  return (
    <div className="start-button">
      <button onClick={onClick}>
        <p>Start</p>
      </button>
    </div>
  );
}