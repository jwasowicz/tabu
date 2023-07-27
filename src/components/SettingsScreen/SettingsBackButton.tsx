import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SettingsIcon from "../../Icon";
import { Link } from "react-router-dom";

const SettingsBackButton = () => {
  return (
    <Link to="/">
      <button className="settings-container__button--back">
        <SettingsIcon icon={ArrowBackIosNewIcon} />
      </button>
    </Link>
  );
};

export default SettingsBackButton;
