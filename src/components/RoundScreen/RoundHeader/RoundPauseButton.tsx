import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Icon from '../../../Icon';
import { useHelper } from '../../../hooks/useHelper';
import { setPauseSettings } from '../../../store/actions';
import { useState } from 'react';


const RoundPauseButton = () => {


  const {pauseSettings, dispatch} = useHelper();

  const gamePause = pauseSettings.gamePause;

  const handleClick = () => {
    dispatch(setPauseSettings({...pauseSettings, gamePause: !gamePause}));
  }

  return (
    <div onClick={handleClick} className="round_container__button">
        <Icon icon={gamePause ? PlayArrowIcon : PauseIcon} />
    </div>
  )
}

export default RoundPauseButton