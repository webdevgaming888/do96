import React, { useState, useEffect } from "react";
import "./Home.scss";
import Banner from "./views/Banner";
import banner1 from "../../assests/banner/01.jpg";
import banner2 from "../../assests/banner/02.jpg";
import banner3 from "../../assests/banner/03.jpg";
import banner4 from "../../assests/banner/04.jpg";
import banner5 from "../../assests/banner/05.jpg";
import GuideStep from "./views/GuideStep";
import step1 from "../../assests/common/register.png"
import step2 from "../../assests/common/deposit.png"
import step3 from "../../assests/common/play.png"
import step4 from "../../assests/common/win.png"
import WinnerList from "./views/WinnerList";
import SmallSlider from "./views/SmallSlider";
import ModalComponent from "../../components/Modal/Modal";
import ModalImg from "../../assests/common/modal.jpeg";
import { withNamespaces } from "react-i18next";
import { Helmet } from "react-helmet";
import logo from "../../assests/navigationbar/logo.png";
import Jackpot from "./views/Jackpot";
import banking from "../../assests/banner/banking.jpeg";
import digi from "../../assests/banner/digi.jpeg";
import hotlink from "../../assests/banner/hotlink.jpeg";


const Home = ({ t }) => {
  const [banner] = useState([
    {id: 1, src: banner1, title: "bonusWelcome", content: "bonusWelcomeDesc"},
    {id: 2, src: banner2, title: "bonusUnlimited", content: "bonusUnlimitedDesc"},
    {id: 3, src: banner3, title: "bonusRecommend", content: "bonusRecommendDesc"},
    {id: 3, src: banner4, title: "bonusRecommend", content: "bonusRecommendDesc"},
    {id: 3, src: banner5, title: "bonusRecommend", content: "bonusRecommendDesc"},
  ]);
  const [guide] = useState([
    { id: 1, title: "register", content: "registerdesc", src:step1 },
    { id: 2, title: "deposit", content: "depositdesc", src:step2 },
    { id: 3, title: "playwin", content: "playwindesc", src:step3 },
    { id: 4, title: "withdraw", content: "withdrawdesc", src:step4 },
  ]);
  const [winnerList, setWinnerList] = useState([]);
  const [depositList, setDepositList] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const [smallBanner] = useState([
    {name:"banking", src:banking},
    {name:"digi", src:digi},
    {name:"hotlink", src:hotlink}
  ]);

  useEffect(() => {
    let arr = [];
    let depositArr = [];
    for (let index = 0; index < 100; index++) {
      let obj = {};
      let m = Math.floor(Math.random() * 10) + 1;
      let d = Math.floor(Math.random() * 28) + 1;
      let h = Math.floor(Math.random() * 23) + 1;
      let s = Math.floor(Math.random() * 59) + 1;

      obj["id"] = index;
      obj["year"] = "2020";
      obj["month"] = m < 10 ? "0" + m : m;
      obj["date"] = d < 10 ? "0" + d : d;
      obj["hour"] = h < 10 ? "0" + h : h;
      obj["seconds"] = s < 10 ? "0" + s : s;
      obj["phone"] = "******" + Math.floor(1000 + Math.random() * 9000);
      obj["amount"] = Math.floor(100 + Math.random() * 5000).toFixed(2);
      arr.push(obj);
    }

    for (let index = 0; index < 100; index++) {
      let newObj = {};
      let m = Math.floor(Math.random() * 10) + 1;
      let d = Math.floor(Math.random() * 28) + 1;
      let h = Math.floor(Math.random() * 23) + 1;
      let s = Math.floor(Math.random() * 59) + 1;

      newObj["id"] = index;
      newObj["year"] = "2020";
      newObj["month"] = m < 10 ? "0" + m : m;
      newObj["date"] = d < 10 ? "0" + d : d;
      newObj["hour"] = h < 10 ? "0" + h : h;
      newObj["seconds"] = s < 10 ? "0" + s : s;
      newObj["phone"] = "******" + Math.floor(1000 + Math.random() * 9000);
      newObj["amount"] = Math.floor(100 + Math.random() * 500).toFixed(2);
      depositArr.push(newObj);
    }
    setWinnerList({ arr });
    setDepositList({ depositArr });
    setModalShow(true)
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} | Best Online Casino Malaysia | 918KISS</title>
        <meta
          name="description"
          content="DigiOng96 is one of the leading online betting sites in Malaysia"
        />
        <link rel="canonical" href="https://digiong96.com/" />
        <meta property="og:title" content={window.compName} />
        <meta
          property="og:description"
          content="DigiOng96 is one of the leading online betting sites in Malaysia"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://digiong96.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="DigiOng96" />
      </Helmet>
      {modalShow && <ModalComponent onHide={() => setModalShow(false)} imgSrc={ModalImg}/>} 
      <section className="homepage">
        <Banner banner={banner} />
        <Jackpot />

        <GuideStep guide={guide} />

        <div className="home-list">
        <SmallSlider smallBanner={smallBanner}/>

          {winnerList !== undefined && depositList !== undefined && (
            <WinnerList list={winnerList} depositList={depositList} />
          )}
        </div>

      </section>
    </>
  );
};

export default withNamespaces()(Home);
