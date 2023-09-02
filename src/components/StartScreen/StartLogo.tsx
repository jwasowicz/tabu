import { FC } from "react";
const logo: string = require("../../assets/images/logo.svg").default;

const StartLogo: FC = () => {
  return <img className="game-container__logo" src={logo} alt="logo" />;
};

export default StartLogo;
