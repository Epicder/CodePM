import React from 'react';
import Titletxt from '../../assets/Titletxt.png';
import { motion } from 'framer-motion';


const Animation = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 10 },
  transition: { duration: 0.5 }
}

export default function Header() {
  
  return (
    <header>
      <motion.div
      initial="initial"
      animate="animate"
      transition={Animation.transition}
      variants={Animation}
    >
      <div className="header-container">
        <img src={Titletxt} alt="Typing Test" />
      </div>
    </motion.div>
      
    </header>
  );
}