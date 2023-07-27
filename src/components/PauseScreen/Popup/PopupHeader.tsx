import CloseIcon from '@mui/icons-material/Close';
import Icon from '../../../Icon';
import { setPauseSettings } from '../../../store/actions';
import { useHelper } from '../../../hooks/useHelper';

const PopupHeader = () => {


    const {pauseSettings, dispatch} = useHelper();

    const handleClick = () => {
        dispatch(setPauseSettings({...pauseSettings, openedPopup: false}))
    }

  return (
    <header className="popup-container__header">
        <div className="popup-container__text-element">Exit Game</div>
        <div onClick={handleClick} className="popup-container__close-element">
            <Icon icon={CloseIcon} />
        </div>
    </header>
  )
}

export default PopupHeader