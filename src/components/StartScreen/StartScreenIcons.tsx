import StartIcon from "./StartIcon";
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RedeemIcon from '@mui/icons-material/Redeem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { FC } from "react"


const StartScreenIcons: FC = () => {
  return (
    <div className="icons-container">
        <StartIcon icon={PersonIcon}/>
        <StartIcon icon={EmojiEventsIcon}/>
        <StartIcon icon={RedeemIcon}/>
        <StartIcon icon={ShoppingCartIcon}/>
        <StartIcon icon={SettingsIcon}/>


    </div>
  )
}

export default StartScreenIcons