import RedoIcon from '@mui/icons-material/Redo';
import RoundSkipPoint from "./RoundSkipPoint";
import RoundTimeProgressBar from "./RoundTimeProgressBar";
import Icon from '../../../Icon';

const RoundSectionBottom = () => {
  return (
    <div className="round_container__section--bottom">
        <Icon icon={RedoIcon}/>
        <RoundSkipPoint />
        <RoundTimeProgressBar />
        <RoundSkipPoint />
        <Icon icon={RedoIcon}/>

    </div>
  )
}

export default RoundSectionBottom