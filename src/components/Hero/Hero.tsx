import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <header>
        <aside id='left-header'>
            <h1>Creators platform to provide live and recorded courses</h1>
            <h6>Find top-rated trainers who share their knowledge with people around the world for your next level.</h6>
            <div>
                <span>What do you want to learn?</span>
                <Link to='/'>Find Here</Link>
            </div>
        </aside>
        <aside id='right-header'>
            <div></div>
        </aside>
    </header>
  )
}

export default Hero