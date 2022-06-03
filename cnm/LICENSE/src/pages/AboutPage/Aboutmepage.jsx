import React from 'react'
import AboutMeCard from './components/AboutMeCard'
import NavBar from "../../components/shared/NavBar"
import "./components/AboutMeStyle.css"
function Aboutme() {
  return (
    <div className='aboutme'>
        <NavBar/>
        <AboutMeCard />
    </div>
  )
}

export default Aboutme