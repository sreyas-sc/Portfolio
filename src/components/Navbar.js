import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setClick(false); // Close the menu on navigation
  };

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <button onClick={() => handleNavigation("/")} className="logo-button">
          <h1>SREYAS</h1>
        </button>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <button onClick={() => handleNavigation("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/project")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/about")}>About</button>
          </li>
        </ul>
        
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {click && <div className="menu-overlay" onClick={() => setClick(false)}></div>}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          position: fixed;
          width: 100%;
          height: 70px;
          z-index: 1000;
          transition: all 0.3s ease;
          background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
        }

        .header-bg {
          background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
        }

        .logo-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.2s ease;
        }

        .logo-button:hover {
          transform: scale(1.05);
        }

        .logo-button h1 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a1a1a;
          text-shadow: none;
          letter-spacing: 1px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-menu li {
          position: relative;
        }

        .nav-menu li button {
          background: none;
          border: none;
          color: #1a1a1a;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-menu li button:hover {
          background: rgba(0, 0, 0, 0.05);
          color: #ef4444;
          transform: translateY(-2px);
        }

        .nav-menu li button:active {
          transform: translateY(0);
        }

        .hamburger {
          display: none;
          cursor: pointer;
          color: #1a1a1a;
          transition: color 0.3s ease;
          z-index: 1001;
        }

        .hamburger:hover {
          color: #ef4444;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
          backdrop-filter: blur(5px);
        }

        /* Mobile Styles */
        @media screen and (max-width: 1040px) {
          .header {
            padding: 1rem;
          }

          .nav-menu {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 280px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            position: fixed;
            top: 0;
            right: -100%;
            z-index: 999;
            transition: right 0.3s ease-in-out;
            gap: 1rem;
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-menu li {
            width: 100%;
            text-align: center;
          }

          .nav-menu li button {
            font-size: 1.4rem;
            padding: 1rem 2rem;
            width: 80%;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.02);
            border: 1px solid rgba(0, 0, 0, 0.1);
            margin: 0.5rem 0;
            color: #1a1a1a;
          }

          .nav-menu li button:hover {
            background: rgba(239, 68, 68, 0.1);
            border-color: rgba(239, 68, 68, 0.3);
            color: #ef4444;
            transform: translateY(-2px);
          }

          .hamburger {
            display: block;
            padding: 0.5rem;
          }

          .logo-button h1 {
            font-size: 1.5rem;
          }
        }

        @media screen and (max-width: 768px) {
          .header {
            padding: 0.75rem 1rem;
            height: 60px;
          }

          .nav-menu {
            width: 100%;
            right: -100%;
          }

          .nav-menu li button {
            font-size: 1.2rem;
            width: 90%;
          }

          .logo-button h1 {
            font-size: 1.3rem;
          }

          .hamburger svg {
            width: 28px;
            height: 28px;
          }
        }

        @media screen and (max-width: 480px) {
          .header {
            padding: 0.5rem;
          }

          .logo-button h1 {
            font-size: 1.2rem;
          }

          .hamburger svg {
            width: 24px;
            height: 24px;
          }
        }

        /* Focus states for accessibility */
        .logo-button:focus,
        .nav-menu li button:focus,
        .hamburger:focus {
          outline-offset: 2px;
        }

        /* Animation for menu items */
        .nav-menu.active li {
          animation: slideInFromRight 0.3s ease forwards;
        }

        .nav-menu.active li:nth-child(1) { animation-delay: 0.1s; }
        .nav-menu.active li:nth-child(2) { animation-delay: 0.2s; }
        .nav-menu.active li:nth-child(3) { animation-delay: 0.3s; }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;