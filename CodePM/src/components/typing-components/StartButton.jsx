import React from 'react';

export default function StartButton({ onClick }) {
  return (
    <div className="start-button-container">
      <button className="start-button" onClick={onClick}>
        Start
      </button>
    </div>
  );
}