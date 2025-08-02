import React from 'react';
import Navbar from "../components/Navbar";
import AboutContent from '../components/AboutContent';

const About = () => {
  return <div>
    <Navbar/>
    <div style={{ paddingTop: '80px' }}> {/* Adjust this value based on your navbar height */}
      <AboutContent>
        <h5>About Me</h5>
      </AboutContent>
    </div>
  </div>;
};

export default About;