import {FC} from "react";

interface Props {
    result: string;
}

const GameScreenBackground: FC<Props> = ({result}) => {

  const switchColor = () => {
    switch (result) {
      case "red":
        return "radial-gradient(circle, rgba(218,218,218,0.7231267507002801) 0%, rgba(240,240,240,1) 50%, rgba(232,81,85,1) 100%)";
      case "blue":
        return "radial-gradient(circle, rgba(218,218,218,0.7231267507002801) 0%, rgba(240,240,240,1) 50%, rgba(80,168,253,1) 100%)";
      case "draw":
        return "linear-gradient(270deg, rgba(80,168,253,0.5046393557422969) 0%, rgba(240,240,240,1) 50%, rgba(232,81,85,0.5046393557422969) 100%)";
    }
  };

  return (
    <div
      style={{ background: switchColor() }}
      className="game-screen__overlay"
    ></div>
  );
};

export default GameScreenBackground;
