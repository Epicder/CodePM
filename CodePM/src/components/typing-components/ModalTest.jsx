import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function ModalTest(props) {
  const [textResult, setTextResult] = useState('');

  useEffect(() => {
    if (props.cpm < 40) {
      setTextResult("Wow, definitely you're my grandma with a computer! 🧓");
    } else if (props.cpm >= 40 && props.cpm < 70) {
      setTextResult('Meh, you type like everybody else. 😐');
    } else if (props.cpm >= 70 && props.cpm < 100) {
      setTextResult('Holy!, you are a typing machine! 🤖');
    } else {
      setTextResult('WOOOOOOOAH! You are a typing god! 🦸‍♂️');
    }
  }, [props.accuracy]);

  const Animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: -30 },
    transition: { duration: 1.3 }
  }

  return (
    <motion.div className='modal-overlay' initial="initial" animate="animate" transition={Animation.transition} variants={Animation}>
        <div className='modal'>
      <p>
        Typing test finished!
        <br />
        <br />
        Your code accuracy is: {props.accuracy}%
        <br />
        Your CPM is: {props.cpm}!
        <br />
        <br />
        {textResult}
        <br />
        <button onClick={props.handleResetClick}>Try again</button>
      </p>
    </div>
    </motion.div>
    
  );
}