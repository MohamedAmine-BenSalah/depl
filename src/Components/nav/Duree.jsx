import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Duree = () => {
  const isFiveVisible = useSelector((state) => state.pageReducer.fiveTimer);
  const isTwoVisible = useSelector((state) => state.pageReducer.twoTimer);
  const [fiveSecondTimer, setFiveSecondTimer] = useState("");
  const [twoSecondTimer, setTwoSecondTimer] = useState("");
  const [isFive, setisFive] = useState(false);
  const isONVidoe = true;
  useEffect(() => {
    const setFive = () => {
      const startMinutes = 5;
      let timeF = startMinutes * 60;
      const t = setInterval(() => {
        const minutesf = Math.floor(timeF / 60);
        const secondsf = timeF % 60;
        const resultf = `${parseInt(minutesf)}:${parseInt(secondsf)}`;
        timeF--;
        if (minutesf === 0 && secondsf === 0) {
          clearInterval(t);
        }
        setFiveSecondTimer(resultf);
      }, 1000);
    };

    const setTwo = () => {
      const StartMinutes = 2;
      let Time = StartMinutes * 60;
      const t2 = setInterval(() => {
        const minutes = Math.floor(Time / 60);
        const seconds = Time % 60;
        const result = `${parseInt(minutes)}:${parseInt(seconds)}`;
        Time--;
        if (minutes === 0 && seconds === 0) {
          clearInterval(t2);
        }
        setTwoSecondTimer(result);
      }, 1000);
    };
    {
      isTwoVisible ? setTwo() : setFive();
    }
  }, [twoSecondTimer, isFiveVisible]);

  return (
    <div className="duree-content">
      <div className="duree-title">
        <p>Combien de temps souhaitez-vous que votre séance dure ?</p>
        <div className="duree-items">
          <div onClick={() => setisFive(false)} className="item">
            2 <span>minutes</span>
          </div>
          <div onClick={() => setisFive(true)} className="item">
            5<span>minutes</span>
          </div>
          <div className="timer">
            {isONVidoe
              ? isFive
                ? "5:00"
                : "2:00"
              : isFiveVisible
              ? fiveSecondTimer
              : twoSecondTimer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Duree;
