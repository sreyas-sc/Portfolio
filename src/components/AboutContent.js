

import React from 'react';
import MyImg from "../assets/myimage.png"; // Assuming you have imported your image

const AboutContent = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h3>About Me</h3>
          <div className="spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="about-card">
          <div className="profile-section">
            <div className="profile-img-container">
              <img src={MyImg} alt="Profile Image" className="profile-img" />
            </div>
            <h4 className="card-title">About Me</h4>
          </div>
          
          <div className="card-content">
            <p className="bio-text">
              I'm Sreyas from Kerala, currently working as a <strong>Software Engineer at Williams Lea</strong>. 
              I have expertise in Python, C++, C, Dart, Java, and JavaScript. I've worked extensively 
              with modern libraries & frameworks like ReactJS and NodeJS. I have deep knowledge 
              of databases including MySQL, MongoDB, and Firebase.
            </p>
            
            <p className="bio-text">
              I'm passionate about creating innovative solutions and have experience in full-stack 
              development, mobile app development, and database design. I have completed my Post Graduation in
              <strong> Masters in Computer Applications</strong> from <strong>College of Engineer Trivandrum</strong> while gaining valuable industry experience.
            </p>
            
            <p className="bio-text">
              Eager to contribute to cutting-edge projects and continue growing in a dynamic, 
              collaborative environment where I can leverage my technical skills to solve real-world problems.
            </p>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              
              <a href="#" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
            
            <a href="https://drive.google.com/file/d/1xdVbstCrwrfwyofkWtrbIuK62irpAXXb/view" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="resume-button">
              View Resume
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-container {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .about-content {
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .about-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .about-header h3 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 2rem;
          text-shadow: none;
        }

        /* Spinner Animation */
        .spinner {
          position: relative;
          width: 120px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 2rem;
        }

        .spinner span {
          position: absolute;
          width: 12px;
          height: 4px;
          background: #1a1a1a;
          border-radius: 2px;
          animation: dominos 1.5s ease infinite;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .spinner span:nth-child(1) { left: 0px; animation-delay: 0s; }
        .spinner span:nth-child(2) { left: 15px; animation-delay: 0.1s; }
        .spinner span:nth-child(3) { left: 30px; animation-delay: 0.2s; }
        .spinner span:nth-child(4) { left: 45px; animation-delay: 0.3s; }
        .spinner span:nth-child(5) { left: 60px; animation-delay: 0.4s; }
        .spinner span:nth-child(6) { left: 75px; animation-delay: 0.5s; }
        .spinner span:nth-child(7) { left: 90px; animation-delay: 0.6s; }
        .spinner span:nth-child(8) { left: 105px; animation-delay: 0.7s; }

        @keyframes dominos {
          0%, 100% {
            opacity: 0.3;
            transform: rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: rotate(90deg);
          }
        }

        /* Main Card */
        .about-card {
          width: 100%;
          max-width: 450px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
        }

        .profile-section {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .profile-img-container {
          width: 100px;
          height: 100px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
          display: block;
        }

        .profile-img:hover {
          transform: scale(1.05);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .card-content {
          text-align: center;
        }

        .bio-text {
          color: #2d3748;
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          text-align: left;
        }

        .bio-text:last-of-type {
          margin-bottom: 1.5rem;
        }

        .bio-text strong {
          color: #1a202c;
          font-weight: 600;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          color: #1a1a1a;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: #ef4444;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
        }

        .resume-button {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: #ffffff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        .resume-button:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.5);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-container {
            padding: 1rem;
          }

          .about-card {
            padding: 2rem;
            margin: 0 0.5rem;
            max-width: 380px;
          }

          .profile-img-container {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card-title {
            font-size: 1.3rem;
          }

          .bio-text {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .social-link svg {
            width: 16px;
            height: 16px;
          }

          .resume-button {
            padding: 0.6rem 1.5rem;
            font-size: 0.85rem;
          }

          .spinner {
            width: 100px;
            height: 16px;
          }

          .spinner span {
            width: 10px;
            height: 3px;
          }

          .spinner span:nth-child(1) { left: 0px; }
          .spinner span:nth-child(2) { left: 12px; }
          .spinner span:nth-child(3) { left: 24px; }
          .spinner span:nth-child(4) { left: 36px; }
          .spinner span:nth-child(5) { left: 48px; }
          .spinner span:nth-child(6) { left: 60px; }
          .spinner span:nth-child(7) { left: 72px; }
          .spinner span:nth-child(8) { left: 84px; }
        }

        @media (max-width: 480px) {
          .about-header h3 {
            font-size: 1.8rem;
          }

          .about-card {
            padding: 1.25rem;
          }

          .bio-text {
            font-size: 0.8rem;
          }

          .social-links {
            gap: 0.75rem;
          }
        }

        /* Dark mode enhancements */
        @media (prefers-color-scheme: dark) {
          .about-card {
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(148, 163, 184, 0.2);
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .spinner span,
          .about-card,
          .profile-img,
          .social-link,
          .resume-button {
            animation: none;
            transition: none;
          }
        }

        /* Focus states for accessibility */
        .social-link:focus,
        .resume-button:focus {
          outline: 2px solid #ef4444;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default AboutContent;