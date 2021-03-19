import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";

import "./Jackpot.scss";
const Jackpot = () => {
  const [odometerValue, setValue] = useState(196126876);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(odometerValue + 50);
    }, 3000);
    return () => clearInterval(interval);
  }, [odometerValue]);

  return (
    <div className="jackpot">
      <div className='jackpot-title'></div>
      <div className='meter'>
        <span className='dollar'>MYR</span>
        <Odometer format="ddd,ddd,ddd" duration={3000} value={odometerValue} />
      </div>
    </div>
  );
};

export default Jackpot;
