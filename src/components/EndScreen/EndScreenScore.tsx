import React from "react";
import RoundPoint from "../RoundScreen/RoundHeader/RoundPoint";

const EndScreenScore = () => {
  return (
    <div className="end-screen__score">
      <RoundPoint team="red" />
      <div className="colon">:</div>
      <RoundPoint team="blue" />
    </div>
  );
};

export default EndScreenScore;
