import React from "react"
import styled from "styled-components"

const CircleShape = styled.div<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  padding: 2px;
  margin: 0 5px;
  background-color: ${({ color }) => color};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
`

type Props = {
  size: string
  color: string
  children?: JSX.Element | JSX.Element[]
  text?: string | number
}

export default function Circle({ size, color, children, text }: Props) {
  return (
    <CircleShape size={size} color={color}>
      {children ? children : text}
    </CircleShape>
  )
}
