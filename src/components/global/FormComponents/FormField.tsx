import React from "react"
import styled from "styled-components"
import { Field, FormikTouched, FormikErrors } from "formik"

const FormFieldWrapper = styled.div`
  margin: 3%;
  display: flex;
  flex-orientation: column;
  flex-wrap: wrap;
  width: 100%;
`

const StyledLabel = styled.label`
  text-transform: capitalize;
`

const StyledField = styled.input`
  border: none;
  border-bottom: 2px solid #003384;
  font-size: 18px;
  width: 100%;
  margin-top: 7px;

  &:focus {
    outline: none;
    border-bottom: 2px solid #3dd6ff;
  }
`

const ErrorMsg = styled.p`
  color: red;
  margin: 0;
  padding: 0;
`

type Props = {
  name: string
  value: string
  id?: string
  touched: boolean | FormikTouched<any> | FormikTouched<any>[]
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[]
  onChange: (s: string) => void
  onBlur: (s: string) => void
}

export default function FormField({
  name,
  value,
  id = name,
  touched,
  error,
  onChange,
  onBlur,
}: Props) {
  return (
    <FormFieldWrapper>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <Field
        type="text"
        component={StyledField}
        name={name}
        value={value}
        onChange={onChange(id)}
        onBlur={onBlur(id)}
      />
      <ErrorMsg>{error && touched ? error : null}</ErrorMsg>
    </FormFieldWrapper>
  )
}
