import React from 'react'
import Carousel from "./components/Carousel"
import VerticalOptions from "./components/VerticalOptions"
import Title from './components/Title'
function Home() {
  return (
    <div>
        <Title title="Candela Errandonea Rivarola " className="titulo" />
        <Carousel />
        <VerticalOptions />   
    </div>
  )
}

export default Home