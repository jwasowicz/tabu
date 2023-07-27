import { FC } from "react"

interface Props {
    team: string
}

const RoundPoint: FC<Props> = ({team}) => {
  return (
    <h1 style={{color: team}} className="round_section-top__h1">
        0
    </h1>
  )
}

export default RoundPoint