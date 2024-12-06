import React, { useState } from 'react';
import Header from './typing-components/Header';
import LanguageSelector from './typing-components/LanguageSelector';
import StartButton from './typing-components/StartButton';
import Timer from './typing-components/Timer';
import TypingArea from './typing-components/TypingArea';
import snippets from '../data/snippets.json';

export default function Typing() {
  const [language, setLanguage] = useState('python');
  const [currentSnippet, setCurrentSnippet] = useState('');
  const [time, setTime] = useState('00:00');
  const [userInput, setUserInput] = useState('');

 
  const getRandomSnippet = (language) => {
    const snippetsForLanguage = snippets[language];
    const randomIndex = Math.floor(Math.random() * snippetsForLanguage.length);
    return snippetsForLanguage[randomIndex];
  };
  
const handleLanguageChange = (e) => {
  const selectedLanguage = e.target.value;
  setLanguage(selectedLanguage);
};

const handleStartClick = () => {
  console.log('Test started for language:', language);
  const snippet = getRandomSnippet(language);
  setCurrentSnippet(snippet);
};

const handleInputChange = (e) => {
  setUserInput(e.target.value);
};

  return (
    <div>
      <Header />
      <LanguageSelector onChange={handleLanguageChange} />
      <StartButton onClick={handleStartClick} />
      <Timer time={time} />
      <TypingArea snippet={currentSnippet} userInput={userInput} onChange={handleInputChange} />
    </div>
  );
}