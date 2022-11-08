import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Know more about me</h1>
            <p>Hi! I'm a student, Developer currenlty persuing my Masters in Computer Applications at CET</p>
            <p>2021 - 2022 Software Analyst(L3) at Claysys Technologies</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent
