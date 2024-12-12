import './typing-css/TypingArea.css';

export default function TypingArea({ userInput, onChange, getColoredText, onKeyDown, disabled }) {
  
  return (
    <>
      <div className="typing-area">
      <div className="snippet-overlay">
      {getColoredText}
      </div>
      <textarea
        className="user-input"
        value={userInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        spellCheck="false"
        />
    </div>
    <div className='text-wrapper-2'>
    <div className='text-content'>
        <p>
          How we measure the typing speed?
          <br />
          <br />
          Typing speed is measured in <span className='highlight'>characters per minute</span>.
          We use this typing speed to measure your CPM (Code per minute).
          <br />
          <br />
          <br />
          Average CPM:
          <br />
          CPM &lt; 40 - Beginner
          <br />
          CPM &lt; 70 - Intermediate
          <br />
          CPM &lt; 100 - Advanced
          <br />
          CPM &gt; 100 - Coding God
        </p>
    </div>
    </div>
    
    </>
  );
}