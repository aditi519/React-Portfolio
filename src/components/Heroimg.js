import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import React from 'react';
import { Link } from "react-router-dom";
                            
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hello  I  am  Aditi Pawar</p>
            <h1>Full-Stack  Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default Heroimg;