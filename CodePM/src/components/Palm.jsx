import React from 'react'
import palm from '../assets/palm.png'
import './css-components/Palm.css'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Palm( props ) {

  const [showPalm, setShowPalm] = useState(false);

  const Animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 30 },
    transition: { duration: 1.3 }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPalm(true);
    }, props.timer);

    return () => clearTimeout(timer);
  }, [props.timer]);

  return (
    showPalm ?

    <motion.div className='palm-container' initial="initial" animate="animate" transition={Animation.transition} variants={Animation}>
      <img src={palm} alt="Palm" className="palm-image"/>
    </motion.div> : null
  )
}
