import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 10px 30px;
  margin: 20px 13px;
  color: white;
  font-size: 20px;
  background-color: #007cc7;
  border: 1px solid white;
  border-radius: 7px;
  outline: none;

  &:hover {
    background-color: transparent;
    color: #007cc7;
    border: 1px solid #007cc7;
  }
`

export default function SubmitButton(props) {
  return <StyledButton disabled={props.disabled}>{props.name}</StyledButton>
}
