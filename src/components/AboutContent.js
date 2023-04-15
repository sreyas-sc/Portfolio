import "./AboutContentStyles.css";
import React from 'react';
//import { Link } from "react-router-dom";

import IntroImg from "../assets/SREYAS.pdf"

const AboutContent = () => {
  return (
    <div className="content">
        <div className="left">
        <h1>ABOUT</h1>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>Hi! I'm a Freelance Developer currenlty persuing my Masters in Computer Applications</p><p>&nbsp;&nbsp;&nbsp;</p>
            <p>2022 - Present: Pursuing MCA at <a href="https://www.cet.ac.in/"><u>College of Engineering Thiruvanandhapuram</u></a></p><p>&nbsp;&nbsp;&nbsp;</p>
            <p>2021 - 2022: Software Analyst(L3) at <a href="https://www.claysys.com/"><u>Claysys Technologies</u></a></p><p>&nbsp;&nbsp;&nbsp;</p>
            <a className="btn" href={IntroImg} target="_blank">My Resume</a>
         

        </div>
    </div>
  )
}

export default AboutContent
