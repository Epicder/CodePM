import React from 'react'
import palm from '../assets/palm.png'
import './css-components/Palm.css'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Palm() {

  const [showPalm, setShowPalm] = useState(false);

  const Animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 10 },
    transition: { duration: 2 }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPalm(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, [2400]);

  return (
    showPalm ?

    <motion.div className='palm-container' initial="initial" animate="animate" transition={Animation.transition} variants={Animation}>
      <img src={palm} alt="Palm" className="palm-image"/>
    </motion.div> : null
  )
}
