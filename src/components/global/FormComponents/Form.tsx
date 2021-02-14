import React, { FormEvent } from "react"
import styled from "styled-components"
import { Form as FormikForm } from "formik"

const CustomForm = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  flex-orientation: column;
  align-items: flex-start;
  margin-top: 5%;
`

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  children: JSX.Element | JSX.Element[]
}

export default function Form({ handleSubmit, children }: Props) {
  return <CustomForm onSubmit={handleSubmit}>{children}</CustomForm>
}
