import React from "react"
import styled from "styled-components"

const StyledButton = styled.button<{
  primary: string
  secondary: string
  width?: string
}>`
  padding: 10px 30px;
  margin: 5px 13px;
  font-size: 20px;
  color: ${({ secondary }: { secondary: string }) => secondary};
  background-color: ${({ primary }: { primary: string }) => primary};
  border: 1px solid transparent;
  border-radius: 7px;
  text-align: center;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${({ primary }: { primary: string }) => primary};
    border-color: ${({ primary }: { primary: string }) => primary};
  }

  ${({ width }) => (width ? `width: ${width}` : null)};
`

type Props = {
  primaryColor: string
  secondaryColor: string
  text: string
  width?: string
  onClick?: () => void
}

export default function Button({
  text,
  primaryColor,
  secondaryColor,
  onClick,
  width = "auto",
}: Props) {
  return (
    <StyledButton
      primary={primaryColor}
      secondary={secondaryColor}
      onClick={onClick}
      width={width}
    >
      {text}
    </StyledButton>
  )
}
