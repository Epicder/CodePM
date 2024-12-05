import React from 'react';

export default function TypingArea({ snippet, userInput, onChange }) {
  return (
    <div className="typing-container">
      <pre>{snippet}</pre>
      <textarea 
        value={userInput} 
        onChange={onChange} 
        placeholder="Start typing here..."
      />
    </div>
  );
}