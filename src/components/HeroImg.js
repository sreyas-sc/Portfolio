import React, {useEffect} from 'react';
import "./HeroImgStyles.css";
import MyImg from "../assets/myimage.png"; // Assuming you have imported your image
import reactimg from "../assets/react.png"; // Import Link from react-router-dom
import cssimg from "../assets/css-3.png"; 
import cimg from "../assets/c-.png"; 
import htmlimg from "../assets/html.png";
import javaimg from "../assets/java.png";
import jsimg from "../assets/js.png";
import nodeimg from "../assets/node-js.png";
import phpimg from "../assets/php.png"; 
import pythonimg from "../assets/python.png";
import sqlimg from "../assets/sql-server.png"; 
import vsimg from "../assets/vscode.png"; 
import gitimg from "../assets/git.png";
import codepenimg from "../assets/codepen.png";
import flutterimg from "../assets/flutter-icon.png";
import dartimg from "../assets/dart.png";
import mysqlimg from "../assets/myimage.png";
import githubimg from "../assets/github-icon.png";


import {faFacebook,faTwitter,faInstagram, faGithub, faWhatsapp, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";





const Heroimg = () => {
  /////////////////////////
  useEffect(() => {
    // Ensure proper viewport meta tag
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(meta);
    }

    // Responsive design adjustments
    const handleResize = () => {
      document.body.style.zoom = 1;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateDuration = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = now - start;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    return `${years} years, ${months} months, ${days} days`;
  };
  /////////////////////////////
  return (

    
    <div className="hero">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
        
          

          <div className="initial-container">
              <div className="name-container">
                <p className="hero-name">Hey, I'm Sreyas S</p>
              </div>
              <div className="profile-image">
                <img src={MyImg} alt="Profile Image" className="profile-img" />
              </div>
          </div>
          
        
        {/* About */}
        <div className="aboutcard">
            <div className="cardcontent">
                <p className="cardheading">ABOUT ME</p>
                <p className="cardpara">
                I'm Sreyas, a passionate Software Engineer at Williams Lea with 2.5+ years of IT experience. MCA graduate specializing in full-stack development using ReactJS, NodeJS, Python, JavaScript, and AWS.
                </p>
                {/* <button className="btn">My Resume</button> */}
                <button className="btn" onClick={() => window.location.href = 'https://drive.google.com/file/d/1lARc3xCKV6UGEHzfWhtJXXXToUEp8-Fq/view?usp=sharing'}>
  Resume
</button>

            </div>
            
        </div>

        {/* Education */}

        <h1 className='education-heading'>Education</h1>

        <div class="timeline">  
  <div class="tl-content tl-content-active">
    <div class="tl-header">
      <span class="tl-marker"></span>
      <p class="tl-title">MCA</p>
      <time class="tl-time" datetime="2023-06-20">October 2022 - June 2024</time>
    </div>
    <div class="tl-body">
      <p>Graduated with a Master of Computer Applications (MCA) from the College of Engineering, Trivandrum.</p>
    </div>
  </div>
  <div class="tl-content">
    <div class="tl-header">
      <span class="tl-marker"></span>
      <p class="tl-title">BCA</p>
      <time class="tl-time" datetime="2023-06-18">June 2018 - April 2021</time>
    </div>
    <div class="tl-body">
      <p>Had done my undergraduate degree in BCA(Batchelors) from Naipunnya school of management Cherthala</p>
    </div>
  </div>
  <div class="tl-content">
    <div class="tl-header">
      <span class="tl-marker"></span>
      <p class="tl-title">DHSE</p>
      <time class="tl-time" datetime="2023-06-14">June 14, 2023</time>
    </div>
    <div class="tl-body">
      <p>Studied Biology- Science(Plustwo) in H.S.S Kandamangalam </p>
    </div>
  </div>
</div>

{/* PROJECTS */}

<h1 className='education-heading'>Projects</h1>

{/* icon button github */}
<div class="button-icon">
  <div class="icon">
    <svg viewBox="0 0 24 24">
      <path
        d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
        fill="#222229"
      ></path>
    </svg>
  </div>
  <div class="cube">
    <span class="side front">Visit my git</span>
    {/* <span class="side top">check it on github</span> */}
    <a href="https://github.com/sreyas-sc" class="side top">check it on github</a>
  </div>
</div>
 {/* */} 

<div className='projectcontainer'>
<div class="projectcard">
  <div class="projectcard__img"></div>
  <div class="projectcard__descr-wrapper">
    <p class="projectcard__title">
    Complete Summarizer
  </p>
  <p class="projectcard__descr">
  A machine learning application developed using Python and Flask, designed to summarize the contents of YouTube videos, text, PDFs, and websites.
  </p>
  <div class="projectcard__links">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
      <a class="link" href="https://github.com/sreyas-sc">Preview</a>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
      <a class="link" href="https://github.com/sreyas-sc">Code</a>
    </div>
  </div>
  </div>
</div>

<div class="projectcard">
  <div class="projectcard__img"></div>
  <div class="projectcard__descr-wrapper">
    <p class="projectcard__title">
    PharmaLocator & Health Manager
  </p>
  <p class="projectcard__descr">
    Flutter application to find the nearest pharmacies within a range of 10 Kilometers, order medicine online and for medicine management
  </p>
  <div class="projectcard__links">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
      <a class="link" href="https://github.com/sreyas-sc/PharMap">Preview</a>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
      <a class="link" href="#">Code</a>
    </div>
  </div>
  </div>
</div>

{/* </div> */}


{/* <div className='projectcontainer'> */}
<div class="projectcard">
  <div class="projectcard__img"></div>
  <div class="projectcard__descr-wrapper">
    <p class="projectcard__title">
    Automated Portfolio website developer
  </p>
  <p class="projectcard__descr">
    A React application that helps make personalized websites with a bunch of templates with customization.
  </p>
  <div class="projectcard__links">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
      <a class="link" href="https://portfo-meister-three.vercel.app/">Preview</a>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
      <a class="link" href="https://github.com/sreyas-sc/PortfoMeister">Code</a>
    </div>
  </div>
  </div>
</div>

<div class="projectcard">
  <div class="projectcard__img"></div>
  <div class="projectcard__descr-wrapper">
    <p class="projectcard__title">
    CET CampusCare
  </p>
  <p class="projectcard__descr">
    A social media like platform for registering and sharing complaints with an Upvote feature built using React.
  </p>
  <div class="projectcard__links">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
      <a class="link" href="https://github.com/sreyas-sc">Preview</a>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
      <a class="link" href="https://github.com/sreyas-sc">Code</a>
    </div>
  </div>
  </div>
</div> 
</div>

<div>
<p className='formore'>For more connect with me via.</p>

<button class="btngt">
  <a href="https://github.com/sreyas-sc">
<svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
</svg>
</a>
</button>
</div>

<div className='workexp'>
    <table className='tableexp'>
      <td>
      <h1 className='education-heading'>Work Experience</h1>
      </td>
      <td>
      <div class="macbook">
  <div class="inner">
    <div class="screen">
      <div class="face-one">
        <div class="camera"></div>
        <div class="display">
          <div class="shade"></div>
        </div>
        {/* <span>MacBook Air</span> */}
      </div>
  <title>Layer 1</title>
  </div>
    <div class="macbody">
      <div class="face-one">
        <div class="touchpad">
        </div>
        <div class="keyboard">
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key space"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
          <div class="key f"></div>
        </div>
      </div>
      <div class="pad one"></div>
      <div class="pad two"></div>
      <div class="pad three"></div>
      <div class="pad four"></div>
    </div>
  </div>
  <div class="shadow"></div>
</div>

      </td>
      
    </table>
    


    
<ul class="timelineexp">

{/* <!-- Item 1 --> */}
<li>
    <div class="direction-l">
        <div class="flag-wrapper">
            <span class="flag">Williams Lea</span>
            <span class="time-wrapper"><span class="time">Dec 02 - Present</span></span>
        </div>
        <div class="desc">Software Engineer, Trainee ({calculateDuration('2024-12-02')})</div>
    </div>
</li>
<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Techfriar</span>
            <span class="time-wrapper"><span class="time">Aug 06 - Nov 08</span></span>
        </div>
        <div class="desc">MERN Stack Trainee</div>
    </div>
</li>

{/* <!-- Item 2 --> */}
<li>
    <div class="direction-l">
        <div class="flag-wrapper">
            <span class="flag">Levantar Solutions</span>
            <span class="time-wrapper"><span class="time">2024</span></span>
        </div>
        <div class="desc">worked as web developer (Part time)</div>
    </div>
</li>

{/* <!-- Item 3 --> */}
<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Clsysy Technologies </span>
            <span class="time-wrapper"><span class="time">2021 - 2022</span></span>
        </div>
        <div class="desc">Software Analyst(L3). Worked durng the tenure of 20 May 2021 to 1 October 2022 (1 year, 4 months)</div>
    </div>
</li>

</ul>
</div>
<h1 className='education-heading'>Tech Stack</h1>
<div className='techstack'>
    

<div class="carousel-wrapper">
  <div class="carousel">
    <div class="item"></div>
    <div class="item"><img src={reactimg} alt="react"></img></div>
    <div class="item"><img src={cimg} alt="c"></img></div>
    <div class="item"><img src={cssimg} alt="css"></img></div>
    <div class="item"><img src={htmlimg} alt="html"></img></div>
    <div class="item"><img src={javaimg} alt="java"></img></div>
    <div class="item"><img src={nodeimg} alt="nodejs"></img></div>
    <div class="item"><img src={jsimg} alt="js"></img></div>
    <div class="item"><img src={phpimg} alt="php"></img></div>
    <div class="item"><img src={pythonimg} alt="python"></img></div>
    {/* <div class="item"><img src={sqlimg} alt="apple"></img></div> */}
    <div class="item"><img src={vsimg} alt="vscode"></img></div>
    <div class="item"><img src={gitimg} alt="git"></img></div>
    <div class="item"><img src={codepenimg} alt="codepen"></img></div>
    <div class="item"><img src={flutterimg} alt="flutter"></img></div>
    <div class="item"><img src={dartimg} alt="dart"></img></div>
    <div class="item"><img src={mysqlimg} alt="mysql"></img></div>
    <div class="item"><img src={githubimg} alt="guthub"></img></div>
    {/* <div class="item"><img src="https://logo.clearbit.com/google.com" alt="Google"></img></div>
    <div class="item"><img src="https://logo.clearbit.com/amazon.com" alt="Amazon"></img></div>
    <div class="item"><img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft"></img></div> */}
    
  </div>
</div>
</div>
<div className='percentage'>
<div class="skillcontainer">
  <div class="skill-box">
    <span class="title">HTML</span>
    <div class="skill-bar">
      <span class="skill-per html">
        {/* <span class="tooltip">100%</span> */}
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">SCSS</span>
    <div class="skill-bar">
      <span class="skill-per scss">
        {/* <span class="tooltip">80%</span> */}
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">Flutter</span>
    <div class="skill-bar">
      <span class="skill-per flutter">
        {/* <span class="tooltip">65%</span> */}
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">Dart</span>
    <div class="skill-bar">
      <span class="skill-per dart">
        {/* <span class="tooltip">65%</span> */}
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">JS</span>
    <div class="skill-bar">
      <span class="skill-per js">
        {/* <span class="tooltip">55%</span> */}
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">Python</span>
    <div class="skill-bar">
      <span class="skill-per python">
        {/* <span class="tooltip">85%</span> */}
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">java</span>
    <div class="skill-bar">
      <span class="skill-per java">
        {/* <span class="tooltip">70%</span> */}
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">C++</span>
    <div class="skill-bar">
      <span class="skill-per cpp">
        {/* <span class="tooltip">60%</span> */}
      </span>
    </div>
  </div>
  <div class="skill-box">

    <span class="title">react</span>
    <div class="skill-bar">
      <span class="skill-per Boostrap">
        {/* <span class="tooltip">60%</span> */}
      </span>
    </div>
  </div>
</div>
{/* Github commits and streak */}
<h1 className='education-heading'>Github</h1>

<div className='commits' >
  <p align="center">
  <img src="https://ghchart.rshah.org/sreyas-sc" alt="2016rshah's Github chart" />
  </p>
</div>


<div className='streak' >
  <p align="center">
    <a href="https://github.com/sreyas-sc/github-readme-streak-stats">
        <img title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="Sreyas's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=sreyas-sc&theme=dark&hide_border=truee&stroke=0000&background=e8e8e8&date_format=j%20M%5B%20Y%5D&fire=0f9c08&ring=0f9c08&currStreakNum=0f9c08&&currStreakLabel=0f9c08&sideNums=0f9c08&sideLabels=0f9c08"/>
    </a>
  </p>
</div>


{/* github commits and streak */}

</div>

<p className='followme'>Connect with me on</p>
{/* <br></br> */}
<p className='followme'>sreyas.sc@gmail.com</p>
<div>
  {/* <table>
    <tr>
      
    </tr>
  </table> */}<ul class="wrapper">
  <li class="icon facebook">
    <a href="https://www.facebook.com/sree.sreyass">
    <span class="tooltip">Facebook</span>
    <svg
      viewBox="0 0 320 512"
      height="1.2em"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      ></path>
    </svg>
    </a>
  </li>
 

  <li class="icon instagram">
    <a href="https://www.instagram.com/sreyas.s_/">
    <span class="tooltip">Instagram</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.2em"
      fill="currentColor"
      class="bi bi-instagram"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
      ></path>
    </svg>
    </a>
  </li>

  <li class="icon github">
    <a href="https://github.com/sreyas-sc">
    <span class="tooltip">Github</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-linkedin"
      viewBox="0 0 16 16"
    ><path
    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
    fill="currentColor"
  ></path>
    </svg>
    </a>
  </li>


  <li class="icon linkedin">
    <a href="https://www.linkedin.com/in/sreyas-s-27857a205/">
    <span class="tooltip">Linkedin</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-linkedin"
      viewBox="0 0 16 16"
    > <path
    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
    fill="currentColor"
  ></path>
    </svg>
    </a>
  </li>
</ul>

</div>


<div>
  <ul class="wrapper">
   
  <li class="icon whatsapp">
     <a href="https://wa.me/918111904512?Hey!">
    <span class="tooltip">Whatsapp</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </a>
  </li>

  <li class="icon phone">
  <a href="tel:8111904512">
    <span class="tooltip">Phone</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
    </a>
  </li>
  <li class="icon gmail">
  <a href="mailto:sreyas.sc@gmail.com">
  <span class="tooltip">Gmail</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="gmail"><path d="M14.5 2h-13A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm-1.766 1L8 6.738 3.266 3h9.468zM2 13V4.646l6 4.615 6-4.616V13H2z"></path></svg>
  </a>
  </li>
</ul>
<ul>
  <li className='eml'>
  {/* <p><a href="mailto:sreyas.sc.com">sreyas.sc@gmail.com</a></p> */}
  </li>
  
</ul>
</div>
        {/* <div className='resume'>
        <button>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Explore me
</button>
        </div> */}
    </div>

    
    
  );
}

export default Heroimg;
