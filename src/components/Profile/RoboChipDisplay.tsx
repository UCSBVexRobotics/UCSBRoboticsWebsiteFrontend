import React from "react"
import styled from "styled-components"

import ToolTip from "../global/Shapes/ToolTip"
import Circle from "../global/Shapes/Circle"
import Colors from "../../styles/colors"

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`

const DisplayChip = ({ color, team, amount }) => {
  return amount ? (
    <ToolTip color={color} text={team}>
      <Circle size="40px" color={color} text={amount} />
    </ToolTip>
  ) : null
}

type Props = {
  account: {
    mRoboChip: number
    eRoboChip: number
    sRoboChip: number
  }
  editOpen: boolean
}

export default function RoboChipDisplay({ account, editOpen }: Props) {
  return !editOpen ? (
    <Options>
      <DisplayChip
        color="#24e07c"
        team="Mechanical Team RoboChips"
        amount={account.mRoboChip}
      />
      <DisplayChip
        color="#fac739"
        team="Electrical Team RoboChips"
        amount={account.eRoboChip}
      />
      <DisplayChip
        color="#2d6ae3"
        team="Software Team RoboChips"
        amount={account.sRoboChip}
      />
    </Options>
  ) : null
}
