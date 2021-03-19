import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { withNamespaces } from "react-i18next";
import { AiFillHome, AiFillPhone, AiFillBank } from "react-icons/ai";
import { IoGameController, IoGift } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
const Navbar = ({ t }) => {
  return (
    <nav>

      <Link to={`${process.env.PUBLIC_URL}/`}>
        <AiFillHome className='icon-gradient'/>
        {t("home")}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/games`}>
        <IoGameController className='icon-gradient'/>
        {t("game")}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/promotion`}>
        <IoGift className='icon-gradient'/>
        {t("promotion")}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/bank`}>
        <AiFillBank className='icon-gradient'/>
        {t("bank")}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/about`}>
        <FaUserFriends className='icon-gradient'/>
        {t("about")}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/contact`}>
        <AiFillPhone className='icon-gradient'/>
        {t("contact")}
      </Link>
    </nav>
  );
};

export default withNamespaces()(Navbar);
