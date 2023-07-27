import RoundPoint from "./RoundPoint"
import RoundTimeCounter from "./RoundTimeCounter"


const RoundSectionTop = () => {
  return (
    <div className="round_container__section--top">
        <RoundPoint team="red"/>
        <RoundTimeCounter />
        <RoundPoint team="blue"/>
    </div>
  )
}

export default RoundSectionTop