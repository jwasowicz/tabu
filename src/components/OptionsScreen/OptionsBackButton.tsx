import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import OptionsIcon from "../../Icon";
import { useHelper } from "../../hooks/useHelper";
import { setOptionsSettings } from "../../store/actions";

const OptionsBackButton = () => {

    const {dispatch, options} = useHelper();

    const handleClick = () => {

        dispatch(setOptionsSettings({...options, animationOptionStart: true}))


        setTimeout(() => {
            dispatch(setOptionsSettings({...options, clickedIcon: false}))
        }, 300)

    }


  return (
      <button onClick={handleClick} className="options-screen__button--back">
        <OptionsIcon icon={ArrowBackIosNewIcon} />
      </button>
  );
};

export default OptionsBackButton;
