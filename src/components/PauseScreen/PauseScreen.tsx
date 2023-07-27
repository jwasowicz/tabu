import PauseScreenButton from "./PauseScreenButton";
import PauseScreenText from "./PauseScreenText";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Popup from "./Popup/Popup";
import './styles.css';
import { useHelper } from "../../hooks/useHelper";

const PauseScreen = () => {

  const { pauseSettings: {openedPopup}} = useHelper();


  return (
    <div className="pause-screen">
        <PauseScreenButton open={true} text="Finish Game" />
        <PauseScreenText color="white"/>
        <PauseScreenButton margin={true} text="Rules" />
        <PauseScreenButton text="Report this word" icon={ReportProblemIcon}/>
        <PauseScreenButton open={true} text="Exit to menu"/>

        {openedPopup && <Popup />}        
    </div>
    
  )
}

export default PauseScreen