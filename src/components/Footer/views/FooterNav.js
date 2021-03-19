import React from "react";
import { Link } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

const FooterNav = ({ navData, t }) => {
  function backtoTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="quick-link">
      <div className="footer-nav">
        <div className="footer-title">{t('quicklink')}</div>
        <div className="footer-content">
          {navData.map((link) => {
            return (
              <div key={link.id} className="footer-link">
               
                <Link to={`${process.env.PUBLIC_URL}${link.url}`} onClick={backtoTop}>{t(link.name)}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default withNamespaces()(FooterNav);
