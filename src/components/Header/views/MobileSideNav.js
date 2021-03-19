import React from "react";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { AiFillHome, AiFillPhone, AiFillBank } from "react-icons/ai";
import { IoGameController, IoGift } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import "./MobileSideNav.scss";
import logo from "../../../assests/navigationbar/logo.png";

const MobileSideNav = ({ t, handleOpen, isOpen }) => {
  return (
    <div className={`mobile-nav-bg  ${isOpen ? "active" : "closed"}`}>
      <div className="mobile-nav">
        <img src={logo} alt={window.compName}  className='sidenav-logo'/>
        <hr />
        <Link onClick={handleOpen} to={`${process.env.PUBLIC_URL}/`}>
          <AiFillHome />
          {t("home")}
        </Link>
        <Link onClick={handleOpen} to={`${process.env.PUBLIC_URL}/games`}>
          <IoGameController />
          {t("game")}
        </Link>
        <Link onClick={handleOpen} to={`${process.env.PUBLIC_URL}/promotion`}>
          <IoGift />
          {t("promotion")}
        </Link>
        <Link onClick={handleOpen} to={`${process.env.PUBLIC_URL}/bank`}>
          <AiFillBank />
          {t("bank")}
        </Link>
        <Link onClick={handleOpen} to={`${process.env.PUBLIC_URL}/about`}>
          <FaUserFriends />
          {t("about")}
        </Link>
        <Link onClick={handleOpen} to={`${process.env.PUBLIC_URL}/contact`}>
          <AiFillPhone />
          {t("contact")}
        </Link>
      </div>
      <div className="mobile-mask" onClick={handleOpen} />
    </div>
  );
};

export default withNamespaces()(MobileSideNav);
