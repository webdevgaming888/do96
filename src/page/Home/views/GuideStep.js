import React from "react";
import "./GuideStep.scss";
import { withNamespaces } from "react-i18next";
const GuideStep = ({ guide, t }) => {
  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (
    <div className="guide-container">
      {guide.map((step) => {
        return (
          <div key={step.id} className="guide-card">
            <div className="guide-wrapper">
              <span className="guide-step">{step.id}</span>
              <span className="guide-title">{t(step.title)}</span>
            </div>
            <img onClick={whatsappLink} src={step.src} alt={step.title} className='guide-img'/>
          </div>
        );
      })}
    </div>
  );
};
export default withNamespaces()(GuideStep);
