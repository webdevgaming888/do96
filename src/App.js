import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Game from "./page/Game/Game";
import Bank from "./page/Bank/Bank";
import Contact from "./page/Contact/Contact";
import Header from "./components/Header/Header";
import Promotion from "./page/Promotion/Promotion";
import Footer from "./components/Footer/Footer";
import { withNamespaces } from "react-i18next";
import MobileSideNav from "./components/Header/views/MobileSideNav";
import MobileFooterNav from "./components/Footer/views/MobileFooterNav";
import BgVideo from "./assests/common/bgvideo.mp4";
import Landing from "./page/Landing/Landing";
import i18n from "./i18n";

const App = () => {
  const [isOpen, setIsOpen] = useState(Boolean);
  const [currentLang, setCurrentLang] = useState("bm");
  const [landingPage, setLandingPage] = useState(true);
  const handleOpen = () => {
    setIsOpen((current) => !current);
  };
  const handleClose = () => {
    setIsOpen(false)
  }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng)
    setLandingPage(false)
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (
 <> {landingPage ? <Landing changeLanguage={changeLanguage} /> :
    <Router>
      <video loop autoPlay muted>
        <source src={BgVideo}></source>
      </video>
      <svg width="0" height="0" className='set-gradient-icon'>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#ce9c52" offset="10%" />
          <stop stopColor="#faf395" offset="50%" />
          <stop stopColor="#c59f2f" offset="80%" />
          <stop stopColor="#ce9c52" offset="100%" />
        </linearGradient>
      </svg>
      {/* <div className='text-box'></div> */}
      <Header isOpen={isOpen} handleOpen={handleOpen} currentLang={currentLang} />
      <MobileSideNav isOpen={isOpen} handleOpen={handleOpen} />
      <Container fluid className="page-container">
        <Container>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/games`}>
              <Game />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/promotion`}>
              <Promotion />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/bank`}>
              <Bank />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/contact`}>
              <Contact />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/about`}>
              <About />
            </Route>
          </Switch>
        </Container>
      </Container>
      <Footer />
      <MobileFooterNav handleClose={handleClose} whatsappLink={whatsappLink} />
      </Router> }</>
  );
};

export default withNamespaces()(App);
