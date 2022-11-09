import "./HeroimgStyles.css";
import React from 'react';
import IntroImg from "../Assets/img4.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/></div>
            <div className="content">
                <p><b>Hi! I'm sreyas</b></p>
                    <h1>Developer</h1>
                    <div>
                        <Link to="/Project" className="btn">Projects</Link>
                        <Link to="/Contact" className="btn btn-light">Contact</Link>
                                          
                    </div>                                                       
            </div>
        </div>
    
  )
};

export default Heroimg;
