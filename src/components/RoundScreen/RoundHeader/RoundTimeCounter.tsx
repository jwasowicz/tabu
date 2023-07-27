import { useHelper } from "../../../hooks/useHelper";


const RoundTimeCounter = () => {
  const {roundTime} = useHelper();

  return (
    <div className="round_section__timer">
        {roundTime['Round Time']}
    </div>
  )
}

export default RoundTimeCounter