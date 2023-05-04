import "./HeroImgStyles.css"
import React from 'react'

import IntroImg from "../assets/back1.jpg"
import { Link } from "react-router-dom"
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src= {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi I'm Sreyas S,  </p>
            <h1> </h1>  
            <div>
                <Link to="/project" className="btn">Projects</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
