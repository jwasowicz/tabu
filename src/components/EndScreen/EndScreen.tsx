import EndScreenCardContainer from "./EndScreenCardContainer";

import "./styles.css";
import EndScreenSpinners from "./EndScreenSpinners";
import EndScreenButton from "./EndScreenButton";
import { checkWonTeam } from "../../utils/checkWonTeam";
import { useHelper } from "../../hooks/useHelper";
import { useTranslation } from "react-i18next";
import useSound from "use-sound";
import { useEffect } from "react";

const endScreenSound = require("../../assets/sounds/endScreen.mp3");

const EndScreen = () => {
  const {
    counter: { redCounter, blueCounter },
    stats: { redTimer, blueTimer },
    options: { soundsOptionChecked },
  } = useHelper();

  const { t } = useTranslation();

  const result = checkWonTeam({
    redCounter,
    blueCounter,
    redTimer,
    blueTimer,
    t,
  });

  const [playEndScreenSounds] = useSound(endScreenSound, {volume: 0.3});

  useEffect(() => {
    soundsOptionChecked && playEndScreenSounds();
  }, [playEndScreenSounds, soundsOptionChecked]);

  return (
    <div
      style={{
        background:
          result === t("Red")
            ? "#E85155"
            : result === t("Draw")
            ? "#50A8FD"
            : "#50A8FD",
      }}
      className="end-screen__container"
    >
      {result === t("Draw") && <div className="trapezoid-red"></div>}

      <EndScreenCardContainer />

      <EndScreenSpinners />

      <div className="end-screen__button-container">
        <EndScreenButton text={t("Game over")} />
        <EndScreenButton text={t("Rematch")} />
      </div>
    </div>
  );
};

export default EndScreen;
