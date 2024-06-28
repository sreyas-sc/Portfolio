// import "./NavbarStyles.css";
// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import {FaBars, FaTimes} from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';



// const Navbar = () => {

// const [click, setClick] = useState(false);
// const handleClick=()=>setClick(!click);
// const [color, setColor]=useState(false);
// const changeColor=  ()=>{
//     if(window.scrollY >=1){
//         setColor(true);
//     }else{
//         setColor(false);
//     }
// };

//     window.addEventListener("scroll", changeColor);


//   return (
//     <div className={color?"header header-bg": "header"}>
//         <Link to={"/"}>
//             <h1>SREYAS</h1>
//         </Link>
//         <ul className={click?"nav-menu active":"nav-menu"}>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/project">Projects</Link>
//             </li>
//             <li>
//                 <Link to="/about">About</Link>
//             </li>
//             {/* <li>
//                 <Link to="/about">Contact</Link>
//             </li> */}
//         </ul>
//         <div className="hamburger" onClick={handleClick}>
//             {click ?(<FaTimes size={20} style={{color:"#ffff"}}/>):<FaBars size={20} style={{color:"#ffff"}}/>}  
//         </div>
//     </div>
//   )
// }

// export default Navbar

import "./NavbarStyles.css";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleNavigation = (path) => {
    navigate(path);
    setClick(false); // Close the menu on navigation
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link onClick={() => handleNavigation("/")} className="logo-button">
        {/* <h1>SREYAS</h1> */}
      </Link>
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
        {/* <li>
          <button onClick={() => handleNavigation("/contact")}>Contact</button>
        </li> */}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={60} style={{ color: "#181818" }} />) : (<FaBars size={60} style={{ color: "#181818" }} />)}
      </div>
    </div>
  );
}

export default Navbar;
