import React from 'react'
import './css-components/Content.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const Animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 30 },
    transition: { duration: 0.6 }
  }

  const Animation2 = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 30 },
    transition: { duration: 1 }
  }

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      const wordsArray = ['skills', 'speed', 'accuracy', 'efficiency', 'productivity'];
      const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
      setShowWord(randomWord);
    }, 2000);

    return () => clearInterval(wordTimer);
  }, []);

  const HandleButton = () => {
    return navigate('/typing-test');
  }

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
      <button className='start-button' onClick={HandleButton}>
        <p>Start Improving</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
      </button>

      <motion.div initial="initial" animate="animate" transition={Animation2.transition} variants={Animation2} className='text-wrapper'>
      <div className='text-content'>
        <p>
          CodePm is a <span className='highlight'>typewriting based tool</span> designed for developers to improve their coding speed.
          It's a tool for beginners and experts, and can help you to <span className='highlight'>improve your coding skills</span> quickly.
          Just start coding and see how fast you can get!
        </p>
        <br />
        <br />
        <br />
        <div className='languages-container'>
          <h2> Available languages: </h2>
            <div class="coding-languages-wrapper">
              <div class="language-card"><img src={Python} alt="Python" /></div>
              <div class="language-card"><img src={Javascript} alt="Javascript" /></div>
              <div class="language-card"><img src={Clang} alt="C lang" /></div>
              <div class="language-card"><img src={Css} alt="Css" /></div>
              <div class="language-card"><img src={Dart} alt="Dart" /></div>
            </div>
            <br />
            <br />
            <br />
            <p className='cpm-text'>
          CPM: Code Per Minute, is the metric that we use to measure <strong>how many code (words) you can write in a minute. </strong>
          The higher your CPM, the faster you are at coding.
        </p>
        </div>

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
