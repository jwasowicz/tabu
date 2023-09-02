import { useHelper } from '../../hooks/useHelper';
import OptionsButtonContainer from './OptionsButtonContainer';
import OptionsScreenHeader from './OptionsScreenHeader';
import './styles.css';


const OptionsScreen = () => {

  const {options: {animationOptionStart} } = useHelper()

  return (
    <div className={`options-screen__container ${animationOptionStart ? 'option-close' : ''}`}>
        <OptionsScreenHeader />
        <OptionsButtonContainer />
    </div>
  )
}

export default OptionsScreen