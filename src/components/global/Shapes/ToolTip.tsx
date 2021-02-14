import React from "react"
import styled from "styled-components"

const ToolTipText = styled.span`
  visibility: hidden;
  background-color: ${({ color }) => color};
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  margin: 5px 0;
  position: absolute;
  z-index: 1;
`

const ToolTipArea = styled.div`
  visibility: show;

  &:hover {
    ${ToolTipText} {
      visibility: visible;
    }
  }
`

type Props = {
  text: string
  color: string
  children: JSX.Element | JSX.Element[]
}

export default function ToolTip({ text, color, children }: Props) {
  return (
    <ToolTipArea>
      {children}
      <ToolTipText color={color}>{text}</ToolTipText>
    </ToolTipArea>
  )
}
