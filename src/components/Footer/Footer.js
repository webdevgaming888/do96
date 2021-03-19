import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Footer.scss";
import FooterBank from "./views/FooterBank";
import WhyUs from "./views/WhyUs";
import Maybank from "../../assests/footer/Maybank.png";
import BSN from "../../assests/footer/BSN.png";
import PBB from "../../assests/footer/Public.png";
import HLB from "../../assests/footer/HongLeong.png";
import CIMB from "../../assests/footer/CIMB-Bank.png";
import FooterContact from "./views/FooterContact";
import TNG from "../../assests/footer/TNG.png";
import Digi from "../../assests/footer/Digi.png";
import Maxis from "../../assests/footer/Maxis.png";
import Boost from "../../assests/footer/Boost.png";
import Hotlink from "../../assests/footer/Hotlink.png"
import {FaWhatsapp , FaTelegram} from "react-icons/fa";
const Footer = () => {
  const [link] = useState([
    { id: 1, url: "/", name: "home" },
    { id: 2, url: "/games", name: "game" },
    { id: 3, url: "/promotion", name: "promotion" },
    { id: 4, url: "/about", name: "about" },
    { id: 5, url: "/contact", name: "contact" },
  ]);
  const [contact] = useState([
    { id: 1, phoneNo: window.phone, icon: <FaWhatsapp /> },
    { id: 2, phoneNo: window.phone, icon: <FaTelegram /> },
  ]);

  const [bank] = useState([
    { id: 1, src: Maybank },
    { id: 2, src: HLB },
    { id: 3, src: CIMB },
    { id: 4, src: PBB },
    { id: 5, src: BSN },
  ]);

  const [eWalletList] = useState([
    {
      name: "Touch n Go",
      src: TNG,
    },
    {
      name: "Digi",
      src: Digi,
    },
    {
      name: "Maxis",
      src: Maxis,
    },
    {
      name: "Boost",
      src: Boost,
    },
    {
      name:"Hotlink",
      src:Hotlink
    }
  ]);
  const footerLink = (method) => {

    switch (method) {
      case "Whatsapp":
        window.location.href = window.whatsapp;
        break;
      case "Telegram":
        window.location.href = window.telegram;
        break;
      default:
        window.location.href = window.whatsapp;
        break;
    }
  };

  return (
    <footer className="footer">
      <Container className="footer-container">
        <WhyUs  />
        <FooterContact contact={contact} footerLink={footerLink} navData={link}/>
        <FooterBank bank={bank} ewallet={eWalletList}/>
      </Container>
    </footer>
  );
};
export default Footer;
