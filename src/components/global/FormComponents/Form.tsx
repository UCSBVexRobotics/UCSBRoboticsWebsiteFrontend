import React from "react"
import styled from "styled-components"
import { Form as FormikForm } from "formik"

const CustomForm = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  flex-orientation: column;
  align-items: flex-start;
  margin-top: 5%;
`

export default function Form(props) {
  return <CustomForm onSubmit={props.handleSubmit}>{props.children}</CustomForm>
}
