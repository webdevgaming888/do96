import React, { useState } from "react";
import "./Promotion.scss";
import { withNamespaces } from 'react-i18next';
import { Helmet } from "react-helmet";
import promo1 from "../../assests/common/promo1.jpeg";
import promo2 from "../../assests/common/promo2.jpeg";
import promo3 from "../../assests/common/promo3.jpeg";
import promo4 from "../../assests/common/promo4.jpeg";
import promo5 from "../../assests/common/promo5.jpeg";
const Promotion = ({t}) => {
  const [promo] = useState([
    // {
    //   title: "bonusWelcome",
    //   content: "bonusWelcomeDesc",
    // },
    // {
    //   title: "bonusUnlimited",
    //   content: "bonusUnlimitedDesc",
    // },
    // {
    //   title: "bonusRecommend",
    //   content:"bonusRecommendDesc",
    // },
    // {
    //   title:"bonusWeekly",
    //   content:"bonusWeeklyDesc"
    // }
    {
      id:'1',
      src:promo1
    },
    {
      id:'2',
      src:promo2
    },
    {
      id:'3',
      src:promo3
    },
    {
      id:'4',
      src:promo4
    },
    {
      id:'5',
      src:promo5
    },
  ]);
  const whatsappLink = (e) => {
    e.preventDefault();
    window.location.href = window.whatsapp;
  };
  return (
    <>
     <Helmet>
        <title>{window.compName} - Promotion</title>
      </Helmet>
    <section className="promo-page">
      <h2 className="page-title"> {t("promotion")}</h2>
      <div className="promo-content">
        {promo.map((item, i) => {
          return (
            <div key={i} className="promo-card" onClick={whatsappLink}>
              <img src={item.src} alt="promotion" className='promo-img'/>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
};

export default withNamespaces()(Promotion);
