import React from "react";
import { withNamespaces } from "react-i18next";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { IoGameController, IoGift } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./MobileFooterNav.scss";
const MobileFooterNav = ({ t, whatsappLink, handleClose }) => {
  const backtToTop = () => {
    window.scrollTo(0, 0);
    handleClose();
  };
  return (
    <div className="mobile-footer">
      <div className="mobile-footer-left">
        <Link to={`${process.env.PUBLIC_URL}/`} onClick={backtToTop}>
          <AiFillHome className='icon-gradient'/>
          {t("home")}
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/games`} onClick={backtToTop}>
          <IoGameController className='icon-gradient'/>
          {t("game")}
        </Link>
      </div>

      <button onClick={whatsappLink}> {t("join")}</button>

      <div className="mobile-footer-right">
        <Link to={`${process.env.PUBLIC_URL}/promotion`} onClick={backtToTop}>
          <IoGift className='icon-gradient'/>
          {t("promotion")}
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={backtToTop}>
          <AiFillPhone className='icon-gradient'/>
          {t("contact")}
        </Link>
      </div>
    </div>
  );
};

export default withNamespaces()(MobileFooterNav);
