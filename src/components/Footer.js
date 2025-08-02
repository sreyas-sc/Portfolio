import "./FooterStyles.css"
import React from 'react'
//import {FaEnvelope, FaFacebook, FaGithub, FaHome, FaInstagramSquare, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import { FaPhone} from "react-icons/fa";
import {FaHome} from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faInstagram, faGithub, faWhatsapp, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";

const Footer  = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#2e2e2f", marginRight:"2rem"}}/>
                    <div>
                        <p>ChalilNikarth</p>
                        <p>Andhakaranazhy P.O, Cherthala</p>
                        <p>Alappuzha</p>
                    </div>
                </div>
                <div className="phone">
                    <div>
                    <FaPhone size={20} style={{color:"#2e2e2f", marginRight:"2rem"}}/>
                    <a href="tel:8111904512">+91-8111904512</a>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>                    
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#2e2e2f;", marginRight:"2rem"}}/>
                    <a href="mailto:sreyas.sc.com">sreyas.sc@gmail.com</a>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </h4>                   
                </div>

            </div>

             <div className="right">
                {/* <h4>About Me</h4>
     
                 
                 </p> */}

                 <div class="social-container">
                    <h3> </h3>
                    {/* <a href="https://www.facebook.com/sree.sreyass"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      {/* <a href='https://www.instagram.com/sreyas.s_/'
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      {/* <a href="https://twitter.com/SREYAS_S_" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      {/* <a href="https://github.com/sreyas-sc"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      
      {/* <a href="https://wa.me/918111904512?Hey"
        className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      {/* <a href="https://www.linkedin.com/in/sreyas-s-27857a205"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      {/* <a href="href='t.me/@sreyas_s"
        className="telegram social">
        <FontAwesomeIcon icon={faTelegram} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
</div>
            </div> 
        </div>
    </div>
  )
}

export default Footer 
