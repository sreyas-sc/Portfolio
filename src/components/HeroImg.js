import React, { useEffect } from 'react';
import "./HeroImgStyles.css";
import MyImg from "../assets/crop2.png";
import reactimg from "../assets/react.png";
import cssimg from "../assets/css-3.png";
import cimg from "../assets/c-.png";
import htmlimg from "../assets/html.png";
import javaimg from "../assets/java.png";
import jsimg from "../assets/js.png";
import nodeimg from "../assets/node-js.png";
import phpimg from "../assets/php.png";
import pythonimg from "../assets/python.png";
import vsimg from "../assets/vscode.png";
import gitimg from "../assets/git.png";
import codepenimg from "../assets/codepen.png";
import flutterimg from "../assets/flutter-icon.png";
import dartimg from "../assets/dart.png";
import mysqlimg from "../assets/myimage.png";
import githubimg from "../assets/github-icon.png";

const Heroimg = () => {
  useEffect(() => {
    // Ensure viewport meta is correct (fixing the invalid head tag usage)
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.name = 'viewport';
      document.head.appendChild(metaViewport);
    }
    metaViewport.content = 'width=device-width, initial-scale=1.0';

    // Simple vanilla JS 3D tilt effect for fun
    const cards = document.querySelectorAll('.projectcard, .aboutcard');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    });
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

  return (
    <div className="hero">
      {/* Introduction */}
      <div className="initial-container">
        <div className="name-container fade-in-up">
          <p className="hero-name">Hey, I'm Sreyas S</p>
        </div>
        <div className="profile-image fade-in-up delay-100">
          {/* Added floating animation class */}
          <img src={MyImg} alt="Profile Image" className="profile-img floating" />
        </div>
      </div>

      {/* About */}
      <div className="aboutcard tilt-card fade-in-up delay-200">
        <div className="cardcontent">
          <p className="cardheading">ABOUT ME</p>
          <p className="cardpara">
            I'm Sreyas, a passionate Software Engineer at Williams Lea with 2.5+ years of IT experience. MCA graduate specializing in full-stack development using ReactJS, NodeJS, Python, JavaScript, and AWS.
          </p>
          <button className="btn" onClick={() => window.location.href = 'https://drive.google.com/file/d/1lARc3xCKV6UGEHzfWhtJXXXToUEp8-Fq/view?usp=sharing'}>
            Resume
          </button>
        </div>
      </div>

      {/* Education */}
      <h1 className='education-heading fade-in-up delay-200'>Education</h1>

      <div className="timeline fade-in-up delay-300">
        <div className="tl-content tl-content-active">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">MCA</p>
            <time className="tl-time" dateTime="2023-06-20">October 2022 - June 2024</time>
          </div>
          <div className="tl-body">
            <p>Graduated with a Master of Computer Applications (MCA) from the <b>College of Engineering, Trivandrum.</b></p>
          </div>
        </div>
        <div className="tl-content">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">BCA</p>
            <time className="tl-time" dateTime="2023-06-18">June 2018 - April 2021</time>
          </div>
          <div className="tl-body">
            <p>Had done my undergraduate degree in BCA (Bachelors) from <b>Naipunnya school of management Cherthala</b></p>
          </div>
        </div>
        <div className="tl-content">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">DHSE</p>
            <time className="tl-time" dateTime="2023-06-14">June 14, 2023</time>
          </div>
          <div className="tl-body">
            <p>Studied Biology-Science (Plus two) in <b>H.S.S Kandamangalam</b> </p>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <h1 className='education-heading fade-in-up delay-300'>Projects</h1>

      {/* Github Cube Button - kept as is but fixed class -> className */}
      <div className="button-icon fade-in-up delay-300">
        <div className="icon">
          <svg viewBox="0 0 24 24">
            <path
              d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
              fill="#222229"
            ></path>
          </svg>
        </div>
        <div className="cube">
          <span className="side front">Visit my git</span>
          <a href="https://github.com/sreyas-sc" className="side top">check it on github</a>
        </div>
      </div>

      <div className='projectcontainer fade-in-up delay-400'>
        {/* Project 1 */}
        <div className="projectcard tilt-card">
          <div className="projectcard__img"></div>
          <div className="projectcard__descr-wrapper">
            <p className="projectcard__title">Complete Summarizer</p>
            <p className="projectcard__descr">
              A machine learning application developed using Python and Flask, designed to summarize the contents of YouTube videos, text, PDFs, and websites.
            </p>
            <div className="projectcard__links">
              <div>
                <a className="link" href="https://github.com/sreyas-sc">Preview</a>
              </div>
              <div>
                <a className="link" href="https://github.com/sreyas-sc">Code</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="projectcard tilt-card">
          <div className="projectcard__img"></div>
          <div className="projectcard__descr-wrapper">
            <p className="projectcard__title">PharmaLocator & Health Manager</p>
            <p className="projectcard__descr">
              Flutter application to find the nearest pharmacies within a range of 10 Kilometers, order medicine online and for medicine management
            </p>
            <div className="projectcard__links">
              <div>
                <a className="link" href="https://github.com/sreyas-sc/PharMap">Preview</a>
              </div>
              <div>
                <a className="link" href="#">Code</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="projectcard tilt-card">
          <div className="projectcard__img"></div>
          <div className="projectcard__descr-wrapper">
            <p className="projectcard__title">Automated Portfolio website developer</p>
            <p className="projectcard__descr">
              A React application that helps make personalized websites with a bunch of templates with customization.
            </p>
            <div className="projectcard__links">
              <div>
                <a className="link" href="https://portfo-meister-three.vercel.app/">Preview</a>
              </div>
              <div>
                <a className="link" href="https://github.com/sreyas-sc/PortfoMeister">Code</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="projectcard tilt-card">
          <div className="projectcard__img"></div>
          <div className="projectcard__descr-wrapper">
            <p className="projectcard__title">CET CampusCare</p>
            <p className="projectcard__descr">
              A social media like platform for registering and sharing complaints with an Upvote feature built using React.
            </p>
            <div className="projectcard__links">
              <div>
                <a className="link" href="https://github.com/sreyas-sc">Preview</a>
              </div>
              <div>
                <a className="link" href="https://github.com/sreyas-sc">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className='formore'>For more connect with me via.</p>
        <button className="btngt">
          <a href="https://github.com/sreyas-sc">
            <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
            </svg>
          </a>
        </button>
      </div>

      {/* Work Experience */}
      <div className='workexp fade-in-up delay-400'>
        <table className='tableexp'>
          <tbody>
            <tr>
              <td>
                <h1 className='education-heading'>Work Experience</h1>
              </td>
              <td>
                {/* Macbook Illustration */}
                <div className="macbook">
                  <div className="inner">
                    <div className="screen">
                      <div className="face-one">
                        <div className="camera"></div>
                        <div className="display">
                          <div className="shade"></div>
                        </div>
                      </div>
                    </div>
                    <div className="macbody">
                      {/* Keyboard detail omitted for brevity but keeping structure */}
                      <div className="face-one">
                        <div className="touchpad"></div>
                        <div className="keyboard">
                          {/* Keys would go here */}
                          <div className="key"></div><div className="key"></div><div className="key"></div>
                        </div>
                      </div>
                      <div className="pad one"></div>
                      <div className="pad two"></div>
                      <div className="pad three"></div>
                      <div className="pad four"></div>
                    </div>
                  </div>
                  <div className="shadow"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <ul className="timelineexp">
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">Williams Lea</span>
                <span className="time-wrapper"><span className="time">Dec 02 - Present</span></span>
              </div>
              <div className="desc">Software Engineer, Trainee ({calculateDuration('2024-12-02')})</div>
            </div>
          </li>
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Techfriar</span>
                <span className="time-wrapper"><span className="time">Aug 06 - Nov 08</span></span>
              </div>
              <div className="desc">MERN Stack Trainee</div>
            </div>
          </li>
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">Levantar Solutions</span>
                <span className="time-wrapper"><span className="time">2024</span></span>
              </div>
              <div className="desc">Worked as web developer (Part time)</div>
            </div>
          </li>
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Clsysy Technologies </span>
                <span className="time-wrapper"><span className="time">2021 - 2022</span></span>
              </div>
              <div className="desc">Software Analyst (L3). Worked during the tenure of 20 May 2021 to 1 October 2022 (1 year, 4 months)</div>
            </div>
          </li>
        </ul>
      </div>

      <h1 className='education-heading fade-in-up delay-500'>Tech Stack</h1>
      <div className='techstack fade-in-up delay-500'>
        <div className="carousel-wrapper">
          <div className="carousel">
            <div className="item"></div>
            <div className="item"><img src={reactimg} alt="react"></img></div>
            <div className="item"><img src={cimg} alt="c"></img></div>
            <div className="item"><img src={cssimg} alt="css"></img></div>
            <div className="item"><img src={htmlimg} alt="html"></img></div>
            <div className="item"><img src={javaimg} alt="java"></img></div>
            <div className="item"><img src={nodeimg} alt="nodejs"></img></div>
            <div className="item"><img src={jsimg} alt="js"></img></div>
            <div className="item"><img src={phpimg} alt="php"></img></div>
            <div className="item"><img src={pythonimg} alt="python"></img></div>
            <div className="item"><img src={vsimg} alt="vscode"></img></div>
            <div className="item"><img src={gitimg} alt="git"></img></div>
            <div className="item"><img src={codepenimg} alt="codepen"></img></div>
            <div className="item"><img src={flutterimg} alt="flutter"></img></div>
            <div className="item"><img src={dartimg} alt="dart"></img></div>
            <div className="item"><img src={mysqlimg} alt="mysql"></img></div>
            <div className="item"><img src={githubimg} alt="github"></img></div>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      <div className='percentage fade-in-up delay-500'>
        <div className="skillcontainer">
          {['HTML', 'SCSS', 'Flutter', 'Dart', 'JS', 'Python', 'Java', 'C++', 'React'].map((skill) => (
            <div className="skill-box" key={skill}>
              <span className="title">{skill}</span>
              <div className="skill-bar">
                <span className={`skill-per ${skill.toLowerCase().replace('++', 'pp')}`}></span>
              </div>
            </div>
          ))}
=======
        <div class="desc">Software Engineer ({calculateDuration('2024-12-02')})</div>
    </div>
</li>
<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Techfriar</span>
            <span class="time-wrapper"><span class="time">Aug 06 - Nov 08</span></span>
>>>>>>> 206c691b4ae3815ae4246416ff372f4bc5b270e2
        </div>

        {/* Github stats */}
        <h1 className='education-heading'>Github</h1>
        <div className='commits'>
          <p align="center">
            <img src="https://ghchart.rshah.org/sreyas-sc" alt="sreyas-sc's Github chart" />
          </p>
        </div>
        <div className='streak'>
          <p align="center">
            <a href="https://github.com/sreyas-sc/github-readme-streak-stats">
              <img title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="Sreyas's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=sreyas-sc&theme=dark&hide_border=truee&stroke=0000&background=e8e8e8&date_format=j%20M%5B%20Y%5D&fire=0f9c08&ring=0f9c08&currStreakNum=0f9c08&&currStreakLabel=0f9c08&sideNums=0f9c08&sideLabels=0f9c08" />
            </a>
          </p>
        </div>
      </div>

      <p className='followme'>Connect with me on</p>
      <p className='followme'>sreyas.sc@gmail.com</p>

      <div>
        <ul className="wrapper">
          <li className="icon facebook">
            <a href="https://www.facebook.com/sree.sreyass">
              <span className="tooltip">Facebook</span>
              <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
          </li>
          <li className="icon instagram">
            <a href="https://www.instagram.com/sreyas.s_/">
              <span className="tooltip">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
              </svg>
            </a>
          </li>
          <li className="icon github">
            <a href="https://github.com/sreyas-sc">
              <span className="tooltip">Github</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li className="icon linkedin">
            <a href="https://www.linkedin.com/in/sreyas-s-27857a205/">
              <span className="tooltip">Linkedin</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li className="icon whatsapp">
            <a href="https://wa.me/918111904512?Hey!">
              <span className="tooltip">Whatsapp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            </a>
          </li>
          <li className="icon phone">
            <a href="tel:8111904512">
              <span className="tooltip">Phone</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" /></svg>
            </a>
          </li>
          <li className="icon gmail">
            <a href="mailto:sreyas.sc@gmail.com">
              <span className="tooltip">Gmail</span>
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
    </div>
  );
}

export default Heroimg;
