import RoundPauseButton from "./RoundPauseButton"
import RoundSectionBottom from "./RoundSectionBottom"
import RoundSectionTop from "./RoundSectionTop"



const RoundHeader = () => {
  return (
    <header className="round-container__header">
        <RoundSectionTop />
        <RoundSectionBottom />
        <RoundPauseButton />
    </header>
  )
}

export default RoundHeader