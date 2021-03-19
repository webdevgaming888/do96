import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import CIMB from "../../assests/footer/CIMB-Bank.png";
import BSN from "../../assests/footer/BSN.png";
import HLB from "../../assests/footer/HongLeong.png";
import Maybank from "../../assests/footer/Maybank.png";
import PBE from "../../assests/footer/Public.png";
import TNG from "../../assests/footer/TNG.png";
import Digi from "../../assests/footer/Digi.png";
import Maxis from "../../assests/footer/Maxis.png";
import Boost from "../../assests/footer/Boost.png";
import Hotlink from "../../assests/footer/Hotlink.png"
import "./Bank.scss";
import { Helmet } from "react-helmet";

const Bank = ({ t }) => {
  const [bankList] = useState([
    {
      name: "CIMB Bank",
      src: CIMB,
    },
    {
      name: "BSN Bank",
      src: BSN,
    },
    {
      name: "Hong Leong Bank",
      src: HLB,
    },
    {
      name: "Maybank",
      src: Maybank,
    },
    {
      name: "Public Bank",
      src: PBE,
    },
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} - Bank</title>
      </Helmet>
      <section className="bank-page">
        <h2 className="page-title">{t("bank")}</h2>
        <div className="bank-content">
          <div className="bank-group">
            <div className="bank-group-inner">
              <h6 className="bank-desc">{t("bankDesc")}</h6>
              <div className="bank-list">
                {bankList.map((bank, i) => {
                  return <img key={i} src={bank.src} alt={bank.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <h2 className="page-title">{t("ewallet")}</h2>
        <div className="ewallet-content">
          <div className="bank-group">
            <div className="bank-group-inner">
              <h6 className="bank-desc">{t("ewalletDesc")}</h6>
              <div className="ewallet-list">
                {eWalletList.map((bank, i) => {
                  return <img key={i} src={bank.src} alt={bank.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withNamespaces()(Bank);
