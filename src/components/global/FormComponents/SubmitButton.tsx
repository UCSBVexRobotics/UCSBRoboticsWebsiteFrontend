import React from "react"
import styled from "styled-components"
import Button from "../Button"
import Colors from "../../../styles/colors"

type Props = {
  disabled: boolean
  name: string
}

export default function SubmitButton({ disabled, name }: Props) {
  /* 
    Disabled doesn't do anything ??
  */
  return (
    <Button
      primaryColor={Colors.LIGHT_BLUE}
      secondaryColor="white"
      text={name}
    />
  )
}
