import React from "react"
import styled from "styled-components"

const CustomForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-orientation: column;
  align-items: flex-start;
  margin-top: 5%;
`

export default function Form(props) {
  return <CustomForm onSubmit={props.handleSubmit}>{props.children}</CustomForm>
}
