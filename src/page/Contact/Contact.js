import React from "react";
import { withNamespaces } from "react-i18next";
import "./Contact.scss";
import { FaWhatsapp, FaTelegram, FaPhone } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Contact = ({ t }) => {
  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  const telegramLink = (e) => {
    e.preventDefault();
    window.location.href = window.telegram;
  };
  const phoneLink = (e) => {
    window.open(`tel:${window.phone}`);
  };
  return (
    <>
      <Helmet>
        <title>{window.compName} - Contact Us</title>
      </Helmet>
      <section className="contact-page">
        <h2 className="page-title">{t("contact")}</h2>
        <div className="contact-bg">
          <div className="contact-content">
            <div className="contact-col" onClick={whatsappLink}>
              <div className="contact-title">
                <FaWhatsapp className="contact-icon" />
                <span>Whatsapp</span>
              </div>
              <div className="contact-details">{window.phone}</div>
            </div>
            <div className="contact-col" onClick={telegramLink}>
              <div className="contact-title">
                <FaTelegram className="contact-icon" />
                <span>Telegram</span>
              </div>
              <div className="contact-details">{window.phone}</div>
            </div>
            <div className="contact-col" onClick={phoneLink}>
              <div className="contact-title">
                <FaPhone className="contact-icon" /> <span>Phone</span>
              </div>
              <div className="contact-details">{window.phone}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withNamespaces()(Contact);
