import React from 'react'
import './css-components/Content.css'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


function Content() {
  const [showContent, setShowContent] = useState(false);

  const Animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 30 },
    transition: { duration: 1.1 }
  }

  const Animation2 = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 30 },
    transition: { duration: 1.8 }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2900);

    return () => clearTimeout(timer);
  }, [2900]);

  return (
    showContent ?
    <>
    <motion.div className='content-wrapper' initial="initial" animate="animate" transition={Animation.transition} variants={Animation}>
      <h2>Improve your Code <span className='highlight'>speed</span> with CodePM </h2>
      <button className='start-button'>Start Improving</button>

      <motion.div initial="initial" animate="animate" transition={Animation2.transition} variants={Animation2} className='text-wrapper'>
      <div className='text-content'>
        <p>
          CodePm is a tool designed for developers to improve their coding speed and accuracy.
          You can use it to practice your coding speed in various programming languages.
          It's a great tool for beginners and experts alike, and can help you improve your coding skills in no time.
          Just start coding and see how fast you can get!
        </p>
      </div>
      </motion.div>

      </motion.div>
      
      
      
      </>: null
  )
}

export default Content;
