import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a Software Developer who is proficient in front-end, back-end and database technologies.I am looking for opportunities to kick start my career. 
            </p>
                <p>Front-end :- React JS, React Native, HTML, CSS, JavaScript <br></br><br></br>


                Back-end  :- Java,Node.js<br></br><br></br>
                 Database  :- MySQL</p> 
            
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>


        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
};

export default AboutContent;