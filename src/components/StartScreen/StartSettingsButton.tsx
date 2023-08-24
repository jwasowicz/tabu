import { Link } from "react-router-dom";
import { FC } from "react";

const StartSettingsButton: FC = () => {
  return (
    <Link to="/settings">
      <button className="game-container__button">Play with friends</button>
    </Link>
  );
};

export default StartSettingsButton;
