import { motion } from "framer-motion"
import Sun from './Sun'
import title from '../assets/title.png'
import './css-components/Title.css'

const Animation = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: -20 },
  transition: { duration: 0.8 }
}

export default function Title() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={Animation.transition}
      variants={Animation}
    >
        <div className='title-container'>
          <img src={title} alt="Title" className="title-image"/>
          <Sun timer={400}/>
        </div>
    </motion.div>
  )
}
