import React, { useState } from "react";
import "./Game.scss";
import {
  kiss,
  // kaya,
  // kissplus,
  evo,
  // joker,
  // live22,
  lpe,
  mega888,
  newtown,
  pussy888,
  xe888,
  // rollex,
  greatwall
} from "./GameImageData";
import { withNamespaces } from "react-i18next";
import { Helmet } from "react-helmet";

const Game = ({ t }) => {
  const [gameList] = useState([
    // {
    //   id: 1,
    //   gameName: "918KISSPLUS",
    //   androidURL: "http://app.m-918kiss.online/",
    //   iosURL: "http://app.m-918kiss.online/",
    //   agentURL: "http://hs.681958.com/admin/login.do",
    //   gameLogo: kissplus,
    // },
    // {
    //   id: 2,
    //   gameName: "918KAYA",
    //   androidURL: "http://d.88ifun.com/",
    //   iosURL: "http://d.88ifun.com/",
    //   agentURL: "https://k.889efun.com/login",
    //   gameLogo: kaya,
    // },
    {
      id: 3,
      gameName: "918KISS",
      androidURL: "http://c1.d.918kiss.com/",
      iosURL: "http://c1.d.918kiss.com/",
      agentURL: "https://kk2.918kiss.com/",
      gameLogo: kiss,
    },
    {
      id: 4,
      gameName: "MEGA888",
      androidURL: "http://mega888download.com/",
      iosURL: "http://mega888download.com/",
      agentURL: "https://k3.xigift.com/201222/login.html",
      gameLogo: mega888,
    },
    {
      id: 5,
      gameName: "PUSSY888",
      androidURL: "http://dm21.pussy888.com/",
      iosURL: "http://dm21.pussy888.com/",
      agentURL: "http://pe2.pussy888.com/",
      gameLogo: pussy888,
    },
    {
      id: 6,
      gameName: "EVO888",
      androidURL: "http://d.evo888.io/",
      iosURL: "http://d.evo888.io/",
      agentURL: "http://k.evo388.com/",
      gameLogo: evo,
    },
    {
      id: 7,
      gameName: "XE88",
      androidURL: "https://d1.playalotgames.com/",
      iosURL: "https://d1.playalotgames.com/",
      agentURL: "https://ki.playalotgames.com/",
      gameLogo: xe888,
    },
    {
      id: 8,
      gameName: "LUCKY PALACE",
      androidURL: "http://m.ld176988.com/download.html",
      iosURL: "http://m.ld176988.com/download.html",
      agentURL: "https://kiosk.pt-ka.com/",
      gameLogo: lpe,
    },
    // {
    //   id: 9,
    //   gameName: "LIVE22",
    //   androidURL: "https://yerba22.com/Login",
    //   iosURL: "https://yerba22.com/Login",
    //   agentURL: "https://hongcha22.com/Login",
    //   gameLogo: live22,
    // },
    // {
    //   id: 10,
    //   gameName: "JOKER",
    //   androidURL: "http://www.joker123b.net/",
    //   iosURL: "http://www.joker123b.net/",
    //   agentURL:
    //     "http://www.awe7799.net/Account?url=http%3A%2F%2Fwww.awe7799.net%2F",
    //   gameLogo: joker,
    // },
    {
      id: 11,
      gameName: "NEWTOWN",
      androidURL: "http://cdn.newplay66.com/m.html",
      iosURL: "http://cdn.newplay66.com/m.html",
      agentURL: "https://kiosk.nday11.com/",
      gameLogo: newtown,
    },
    // {
    //   id: 12,
    //   gameName: "Rollex",
    //   androidURL: "http://cdn.rpro11.com/m.html",
    //   iosURL: "http://cdn.rpro11.com/m.html",
    //   agentURL: "https://kiosk.rpro11.com/",
    //   gameLogo: rollex,
    // },
    {
      id: 13,
      gameName: "GreatWall",
      androidURL: "https://gw.goshrimp888.com/APP/GW99/",
      iosURL: "https://gw.goshrimp888.com/APP/GW99/",
      agentURL: "https://mgw.goshrimp888.com/en-US/Member/Login",
      gameLogo: greatwall,
    },
  ]);
  function gameLinkRedirect(link) {
    window.location.href = link;
  }
  return (
    <>
      <Helmet>
        <title>{window.compName} - Games</title>
      </Helmet>
      <section className="game-page">
        <h2 className="page-title"> {t("game")}</h2>
        <div className="game-content">
          {gameList.map((game, i) => {
            return (
              <div key={game.id} className="game-card">
                <div className="game-card-inner">
                  <div className="game-left">
                    <img src={game.gameLogo} alt={game.gameName} />
                  </div>

                  <div className="game-button-group">
                    <button className='btn-agent' onClick={() => gameLinkRedirect(game.agentURL)}>
                      {t("agentLink")}
                    </button>
                    <button onClick={() => gameLinkRedirect(game.androidURL)}>
                      {t("androidDL")}
                    </button>
                    <button onClick={() => gameLinkRedirect(game.iosURL)}>
                      {t("iosDL")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default withNamespaces()(Game);
