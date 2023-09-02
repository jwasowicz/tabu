import StartIcon from "./StartIcon";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import { FC } from "react";

const StartScreenIcons: FC = () => {
  return (
    <div className="icons-container">
      <StartIcon icon={PersonIcon} type="Profile" />
      <StartIcon icon={EmojiEventsIcon} type="Achievements" />
      <StartIcon icon={RedeemIcon} type="Bonus" />
      <StartIcon icon={ShoppingCartIcon} type="Shop" />
      <StartIcon icon={SettingsIcon} type="Settings" />
    </div>
  );
};

export default StartScreenIcons;
