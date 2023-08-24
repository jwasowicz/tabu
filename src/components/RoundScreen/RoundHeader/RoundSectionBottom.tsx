import RedoIcon from "@mui/icons-material/Redo";
import RoundSkipPoint from "./RoundSkipPoint";
import RoundTimeProgressBar from "./RoundTimeProgressBar";
import Icon from "../../../Icon";
import { useHelper } from "../../../hooks/useHelper";

const RoundSectionBottom = () => {
  const {
    counter: { blueSkipCounter, redSkipCounter },
  } = useHelper();

  return (
    <div className="round_container__section--bottom">
      <Icon icon={RedoIcon} />
      <RoundSkipPoint skipNumber={redSkipCounter} />
      <RoundTimeProgressBar />
      <RoundSkipPoint skipNumber={blueSkipCounter} />
      <Icon icon={RedoIcon} />
    </div>
  );
};

export default RoundSectionBottom;
