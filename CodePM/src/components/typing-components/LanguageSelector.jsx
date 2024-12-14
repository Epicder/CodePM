import React from 'react';

export default function LanguageSelector({ onChange, testStarted }) {

  if (testStarted) return (
    <div className="language-ch-container">
      <h3>Language:</h3>
      <select id="languages" onChange={onChange} disabled>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="c">C</option>
        <option value="css">CSS</option>
        <option value="dart">Dart</option>
      </select>
    </div>
  )

  return (
    <div className="language-ch-container">
      <h3>Language:</h3>
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