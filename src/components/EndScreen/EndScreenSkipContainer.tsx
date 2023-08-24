import Icon from "../../Icon";
import { useHelper } from "../../hooks/useHelper";
import RoundSkipPoint from "../RoundScreen/RoundHeader/RoundSkipPoint";
import RedoIcon from "@mui/icons-material/Redo";

const EndScreenSkipContainer = () => {
  const {
    counter: { redSkipCounter, blueSkipCounter },
  } = useHelper();

  return (
    <div className="end-screen__skip-container">
      <Icon icon={RedoIcon} />
      <RoundSkipPoint skipNumber={redSkipCounter} />
      <span className="space"></span>
      <RoundSkipPoint skipNumber={blueSkipCounter} />
      <Icon icon={RedoIcon} />
    </div>
  );
};

export default EndScreenSkipContainer;
