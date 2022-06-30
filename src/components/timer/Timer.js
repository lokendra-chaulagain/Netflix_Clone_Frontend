import React from "react";
import "./timer.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Timer() {
  return (
    <div className="timer">
      <img className="timerLogo" src="/assets/logo.png" alt="" />
      <span className="stayTune">
        Stay tunned, new movies & series launching very soon
      </span>
      <span className="weAreWorking">
        We are working very hard to give you the best experience possible!
      </span>
      <div className="fourTimerDiv">
        <div className="singleTimerDiv">
          <span className="timeRemaining">0</span>
          <span className="timeRemainingTxt">Days</span>
        </div>

        <div className="singleTimerDiv">
          <span className="timeRemaining">0</span>
          <span className="timeRemainingTxt">Hours</span>
        </div>

        <div className="singleTimerDiv">
          <span className="timeRemaining">0</span>
          <span className="timeRemainingTxt">Minutes</span>
        </div>

        <div className="singleTimerDiv">
          <span className="timeRemaining">0</span>
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

export default Timer;
