import React from 'react'
import "./Hero.css"
import {earthImg} from "../../const"

const Hero = () => {

    console.log(earthImg)
  return (
    <div id="welcome" className="hero-container">
<img className="hero-bg" src={earthImg} alt="img" />
<div className="hero-content">
    <div className="hero-card">
    <h1 style={{"--i":".5s"}} className="hero-h1 hero-one">Hello</h1>
    <h1 style={{"--i":"1s"}} className="hero-h1 hero-two">World</h1>
    <div className="welcome-h1-div">
    <h1 className="welcome-h1">
        <span style={{"--i":"3.6s"}} className="hero-fadein hero-fadein1">W</span>
        <span style={{"--i":"3.7s"}} className="hero-fadein hero-fadein2">e</span>
        <span style={{"--i":"3.8s"}} className="hero-fadein hero-fadein3">l</span>
        <span style={{"--i":"3.9s"}} className="hero-fadein hero-fadein4">c</span>
        <span style={{"--i":"4s"}} className="hero-fadein hero-fadein5">o</span>
        <span style={{"--i":"4.1s"}} className="hero-fadein hero-fadein6">m</span>
        <span style={{"--i":"4.2s"}} className="hero-fadein hero-fadein7">e</span>
    </h1>
    </div>
    </div>
    {/* <small></small> */}
</div>
    </div>
  )
}

export default Hero