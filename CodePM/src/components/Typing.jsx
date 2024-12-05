import React, { useState } from 'react';
import Header from './typing-components/Header';
import LanguageSelector from './typing-components/LanguageSelector';
import StartButton from './typing-components/StartButton';
import Timer from './typing-components/Timer';
import TypingArea from './typing-components/TypingArea';

export default function Typing() {
  const [language, setLanguage] = useState('python');
  const [time, setTime] = useState('00:00');
  const [snippet, setSnippet] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleStartClick = () => {

    console.log('Test started for language:', language);
  };
  
  const handleInputChange = (e) => setUserInput(e.target.value);

  return (
    <div>
      <Header />
      <LanguageSelector onChange={handleLanguageChange} />
      <StartButton onClick={handleStartClick} />
      <Timer time={time} />
      <TypingArea snippet={snippet} userInput={userInput} onChange={handleInputChange} />
    </div>
  );
}