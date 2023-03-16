import React from 'react'
import "./home.css"
import Avatar from "../../assets/avatar.png"
import HeadersNetworks from './HeadersNetworks'
import Scroll from './Scroll'


const Home = () => {
  return (
    <section className='home container' id="home">
      <div className='Intro'>
        <img src={Avatar} alt="" className="home_img" />
        <h1 className="home_name">Lovro Popovic</h1>
        <span className="home_ed"> I'm a Front-End developer. </span>
        <HeadersNetworks/>
        <a href="#contact" className="btn">Hire Me</a>
        <Scroll/>
      </div>
    </section>
  )
}

export default Home