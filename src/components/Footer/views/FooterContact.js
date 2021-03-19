import React from "react";
import { withNamespaces } from "react-i18next";
import FooterNav from "./FooterNav";
const FooterContact = ({ contact, footerLink, t, navData }) => {
  return (
    <div className="footer-col contact-quick">
      <div className="contact-us">
        <div className="footer-title">{t("contactus")}</div>
        <div className="footer-content">
          {contact.map((contact) => {
            return (
              <div
                key={contact.id}
                className="footer-contact"
                onClick={() => footerLink(contact.method)}
              >
                <span>{contact.icon}</span> {contact.phoneNo}
              </div>
            );
          })}
        </div>
      </div>
      <FooterNav  navData={navData}/>
    </div>
  );
};

export default withNamespaces()(FooterContact);
