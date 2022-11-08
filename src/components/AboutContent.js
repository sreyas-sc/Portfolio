import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Know more about me</h1>
            <p>Hi! I'm a student, Developer currenlty persuing my Masters</p>
            <p>2022 - Present: Pursuing MCA at <a href="https://www.cet.ac.in/"><u>CET</u></a></p>
            <p>2021 - 2022: Software Analyst(L3) at <a href="https://www.claysys.com/"><u>Claysys Technologies</u></a></p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent
