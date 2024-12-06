import './typing-css/TypingArea.css';

export default function TypingArea({ snippet, userInput, onChange }) {
  return (
    <div className="typing-area">
      <div className="snippet-overlay">
        {snippet}
      </div>
      <textarea
        className="user-input"
        value={userInput}
        onChange={onChange}
        spellCheck="false"
      />
    </div>
  );
}