import React, { Fragment } from "react"
import styled from "styled-components"
import { Field } from "formik"

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

export default function FormField(props) {
  return (
    <FormFieldWrapper>
      <StyledLabel htmlFor={props.name}>{props.name}</StyledLabel>
      <Field
        type="text"
        component={StyledField}
        name={props.name}
        onChange={props.onChange(props.id ? props.id : props.name)}
        onBlur={props.onBlur(props.id ? props.id : props.name)}
      />
      <ErrorMsg>{props.error && props.touched ? props.error : null}</ErrorMsg>
    </FormFieldWrapper>
  )
}
