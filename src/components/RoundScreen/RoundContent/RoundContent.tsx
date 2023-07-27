import RoundNumber from "./RoundNumber"
import RoundStartButton from "./RoundStartButton"
import RoundTeamGuessText from "./RoundTeamGuessText"


const RoundContent = () => {
  return (
    <div className="round-content">
        <RoundNumber number={1}/>
        <RoundTeamGuessText teamGuess="red" />
        <RoundStartButton />
    </div>
  )
}

export default RoundContent