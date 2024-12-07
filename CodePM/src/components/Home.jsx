import { useState } from 'react'
import './css-components/Home.css'
import Title from './Title'
import Content from './Content'
import Palm from './Palm'
function Home() {
  return (
    <>
      <Title/>
      <Content/>
      <Palm timer={800}/>
    </>
  )
}

export default Home
