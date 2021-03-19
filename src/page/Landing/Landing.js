import React from "react";
import "./Landing.scss";
import bmFlag from "../../assests/common/bmFlag.png";
import cnFlag from "../../assests/common/cnFlag.png";
import enFlag from "../../assests/common/enFlag.png";
import landingVideo from "../../assests/common/landingbg.mp4";
const Landing = ({ changeLanguage }) => {
  return (
    <section className="landing-page">
      <video loop autoPlay playsInline muted className='landing-video'>
        <source src={landingVideo}></source>
      </video>
      <div className='landing-content'>
        <div className="language-wrapper">
          <div
            className="landing-language-select"
            onClick={() => changeLanguage("en")}
          >
            <img src={enFlag} alt="English" />
            <span>English</span>
          </div>
          <div
            className="landing-language-select"
            onClick={() => changeLanguage("bm")}
          >
            <img src={bmFlag} alt="Bahasa Melayu" />
            <span>Bahasa Malaysia</span>
          </div>
          <div
            className="landing-language-select"
            onClick={() => changeLanguage("cn")}
          >
            <img src={cnFlag} alt="中文(简体)" />
            <span>中文(简体)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
