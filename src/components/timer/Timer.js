import React from "react";
import "./timer.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Timer() {
  //Countdown
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const targetDate = new Date("2022-07-23").getTime(); //Final date

  //Update the count down every 1 second
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime(); //today date and time
      const distance = targetDate - now; //calculate time remaining

      //Distance in days hours minutes and  second
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    //Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="timer">
      <img className="timerLogo" src="/assets/logo.png" alt="" />
      <span className="stayTune">
        Stay tunned, New movies & series launching very soon
      </span>
      <span className="weAreWorking">
        <span className="premierMovieName"> Avenger Endgame</span> premier will
        start in following time schedule stay tune !
      </span>
      <div className="fourTimerDiv">
        <div className="singleTimerDiv">
          <span className="timeRemaining">{days}</span>
          <span className="timeRemainingTxt">Days</span>
        </div>

        <div className="singleTimerDiv">
          <span className="timeRemaining">{hours}</span>
          <span className="timeRemainingTxt">Hours</span>
        </div>

        <div className="singleTimerDiv">
          <span className="timeRemaining">{minutes}</span>
          <span className="timeRemainingTxt">Minutes</span>
        </div>

        <div className="singleTimerDiv">
          <span className="timeRemaining">{seconds}</span>
          <span className="timeRemainingTxt">Seconds</span>
        </div>
      </div>

      <div className="registerPageInputCon">
        <input
          className="registerPageEmailInput"
          type="email"
          placeholder="Email address"
        />
        <button className="registerPageGetStartedBut">
          Get Started
          <ArrowForwardIosIcon className="arrowForward" />
        </button>
      </div>
    </div>
  );
}

//export
export default Timer;
