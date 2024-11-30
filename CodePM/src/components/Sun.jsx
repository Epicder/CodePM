import React, { useState, useEffect } from 'react';
import sun from '../assets/sun.png';
import { motion } from "framer-motion";

const Sun = (props) => {
  const [showImage, setShowImage] = useState(false);

  const Animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1 }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, props.timer);

    return () => clearTimeout(timer);
  }, [props.timer]);

  return (
    showImage ? 
    <motion.div initial="initial" animate="animate" transition={Animation.transition} variants={Animation}>
      <img src={sun} alt="Sun img" className='sun-image'/>
    </motion.div> : null
  );
}

export default Sun;