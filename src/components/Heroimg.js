import "./HeroimgStyles.css";
import React from 'react';
import IntroImg from "../Assets/img6.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
           
            <img src="https://thumbs.gfycat.com/CreamyFelineCurlew-max-1mb.gif" width=100% height=100%/></div>
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
