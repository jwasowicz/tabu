import { FC } from "react"

interface Props {
  color: string
}

const PauseScreenText: FC<Props> = ({color}) => {
  return (
    <p style={{color: color}} className="pause-screen__info">
        Click the button to finish game with the current score
    </p>
  )
}

export default PauseScreenText