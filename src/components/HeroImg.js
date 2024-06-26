import React from 'react';
import "./HeroImgStyles.css";
import IntroImg from "../assets/back1.jpg";
import MyImg from "../assets/myimage.png"; // Assuming you have imported your image

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            {/* <img className="into-img" src={IntroImg} alt="IntroImg"/> */}
        </div>

        <div className="content">
            <p className="hero .content p">Hi I'm Sreyas S</p>
            <h1></h1>
            <div>
                {/* <button Link to="/project">Projects</button> */}
                {/* <Link to="/project" className="btn">Projects</Link> */}
            </div>
            {/* <div class="dropcard"></div> */}
        </div>
        

        <div className="profile-image">
            <img src={MyImg} alt="Profile Image" className="profile-img" />
        </div>

        <div className="aboutcard">
            <div className="cardcontent">
                <p className="cardheading">ABOUT ME</p>
                <p className="cardpara">
                    I am a MCA graduate with a passion towards coding and web development residing in Alappuzha of kerala with 1year + experience in the IT field
                </p>
                <button className="btn">My Resume</button>
            </div>
            
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
