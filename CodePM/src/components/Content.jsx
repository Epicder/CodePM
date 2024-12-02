import React from 'react'
import './css-components/Content.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Assets //
import Python from '../assets/python.png'
import Javascript from '../assets/JavaScript.png'
import Clang from '../assets/cplusplus.svg'
import Css from '../assets/Css.svg'
import Dart from '../assets/Dart.png'
// Assets //

function Content() {
  const [showContent, setShowContent] = useState(false);
  const [showWord, setShowWord] = useState('');

  const Animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 30 },
    transition: { duration: 0.6 }
  }

  const Animation2 = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 30 },
    transition: { duration: 1.2 }
  }

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4350);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      const wordsArray = ['skills', 'speed', 'accuracy', 'efficiency', 'productivity'];
      const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
      setShowWord(randomWord);
    }, 2500);

    return () => clearInterval(wordTimer);
  }, []);



  return (
    showContent ?
    <>
    <motion.div className='content-wrapper' initial="initial" animate="animate" transition={Animation.transition} variants={Animation}>
    <h2>
          Improve your code{' '}
          <AnimatePresence mode="wait">
            {}
            <motion.span key={showWord} variants={wordVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }} style={{ display: 'inline-block' }}
            >
              {showWord}
            </motion.span>
          </AnimatePresence>{' '} with CodePM! </h2>
      <button className='start-button'>Start Improving</button>

      <motion.div initial="initial" animate="animate" transition={Animation2.transition} variants={Animation2} className='text-wrapper'>
      <div className='text-content'>
        <p>
          CodePm is a tool designed for developers to improve their coding speed and accuracy.
          You can use it to practice your coding speed in various programming languages.
          It's a great tool for beginners and experts alike, and can help you improve your coding skills in no time.
          Just start coding and see how fast you can get!
        </p>
        <br />
        <br />
        <br />
        <p>
          Available languages:
          <div className='coding-languages-wrapper'>
            <img src={Python} alt="Python" />
            <img src={Javascript} alt="Javascript" />
            <img src={Clang} alt="C lang" />
            <img src={Css} alt="Css" />
            <img src={Dart} alt="Dart" />
          </div>
          
        </p>
        <br />
        <br />
        <p>
          CPM: Code Per Minute, is the metric that we use to measure how many lines of code you can write in a minute.
          The higher your CPM, the faster you are at coding.
        </p>
        <br />
        <br />
        <br />
        <p>
          So what are you waiting for? Start improving your coding speed today with CodePM!
        </p>
      </div>
      </motion.div>
      </motion.div>
      
      
      
      </>: null
  )
}

export default Content;
