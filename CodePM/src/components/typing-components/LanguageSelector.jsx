import React from 'react';

export default function LanguageSelector({ onChange }) {
  return (
    <div className="language-ch-container">
      <h3>Choose your language:</h3>
      <select id="languages" onChange={onChange}>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="c">C</option>
        <option value="css">CSS</option>
        <option value="dart">Dart</option>
      </select>
    </div>
  );
}