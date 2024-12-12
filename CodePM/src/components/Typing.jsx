import React, { useState } from 'react';
import Header from './typing-components/Header';
import LanguageSelector from './typing-components/LanguageSelector';
import StartButton from './typing-components/StartButton';
import Timer from './typing-components/Timer';
import TypingArea from './typing-components/TypingArea';
import snippets from '../data/snippets.json';
import { useEffect } from 'react';
import './typing-components/typing-css/Typing-test.css';
import Palm from '../components/Palm';
import ResetButton from './typing-components/ResetButton';
import ModalTest from './typing-components/ModalTest';


export default function Typing() {
  const [language, setLanguage] = useState('python');
  
  const [time, setTime] = useState('00:00');
  const [timeLeft, setTimeLeft] = useState(60);
  const [userInput, setUserInput] = useState('');
  const [accuracy, setAccuracy] = useState(100)
  const [testStarted, setTestStarted] = useState(false);
  const [correctCharacters, setCorrectCharacters] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const getRandomSnippet = (language) => {
    const snippetsForLanguage = snippets[language];
    const randomIndex = Math.floor(Math.random() * snippetsForLanguage.length);
    return snippetsForLanguage[randomIndex];
  };
  const [currentSnippet, setCurrentSnippet] = useState(getRandomSnippet(language));
  
const handleLanguageChange = (e) => {
  const selectedLanguage = e.target.value;
  setLanguage(selectedLanguage);
  setCurrentSnippet(getRandomSnippet(selectedLanguage));
};

const handleStartClick = () => {
  console.log('Test started for language:', language);
  setUserInput('');
  setTestStarted(true);
  setTimeLeft(60); 
};

const handleResetClick = () => {
  console.log('Reset button clicked');
  setShowModal(false);
  setCurrentSnippet(getRandomSnippet(language));
  setUserInput('');
  setTestStarted(false);
  setTimeLeft(60);
};

const cpm = Math.round((correctCharacters / timeLeft) * 16); // to fix

useEffect(() => {
  if (testStarted) {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          setTestStarted(false);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }
}, [testStarted]);


useEffect(() => {
  if (
    testStarted &&
    userInput.trim().toLowerCase() === currentSnippet.trim().toLowerCase()
  ) {
    setTestStarted(false);
    setShowModal(true);
  }
}, [userInput, currentSnippet, testStarted]);


const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};

const handleInputChange = (e) => {
  const value = e.target.value;
  setUserInput(value);

  let correctChars = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === currentSnippet[i]) {
      correctChars++;
    }
  }
  setAccuracy(((correctChars / currentSnippet.length) * 100).toFixed(2));
  setCorrectCharacters(correctChars);
};

const handleKeyDown = (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();

    console.log('Tab pressed');
    const textarea = e.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const updatedValue =
      userInput.substring(0, start) + '    ' + userInput.substring(end);
    setUserInput(updatedValue);
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + 4;
    }, 0);
  }
};

const getColoredText = () => {
  return (
    <>
      {currentSnippet.split('').map((char, index) => {
        const userChar = userInput[index] || '';
        const color = userChar === char ? 'green' : userChar ? 'red' : 'gray';
        return (
          <span key={index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </>
  );
};

  return (
    <div>
        <Header />
        <Palm timer={1}/>
        <LanguageSelector onChange={handleLanguageChange} />
        <StartButton onClick={handleStartClick} />
        <ResetButton onReset={handleResetClick} />
        <Timer time={formatTime(timeLeft)} />
        <TypingArea snippet={currentSnippet} userInput={userInput} onChange={handleInputChange} getColoredText={getColoredText()} onKeyDown={handleKeyDown} disabled={!testStarted || timeLeft === 0} />
        {showModal && <ModalTest accuracy={accuracy} handleResetClick={handleResetClick} cpm={cpm}/>}
      </div>
  );
}