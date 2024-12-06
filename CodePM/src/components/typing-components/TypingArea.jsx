import './typing-css/TypingArea.css';

export default function TypingArea({ userInput, onChange, getColoredText, onKeyDown, disabled }) {
  
  

  return (
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
  );
}