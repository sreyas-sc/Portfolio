import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const Project = () => {
  return  <div>
    <Navbar/>
    <HeroImg2 heading="PROJECTS" text="Some of my works"/>
      <img src="https://cdn-icons-png.flaticon.com/128/5110/5110224.png">
    <Footer/>

  </div>;
};

export default Project;
