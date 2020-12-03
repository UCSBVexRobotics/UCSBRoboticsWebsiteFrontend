import React, { Fragment, useState } from "react"
import styled from "styled-components"
import { Field } from "formik"
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";

const FormFieldWrapper = styled.div`
  width: 100%;
  margin: 3%;
  display: flex;
  flex-orientation: column;
  flex-wrap: wrap;
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

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`

const ErrorMsg = styled.p`
  color: red;
  margin: 0;
  padding: 0;
`

export default function FormPassword(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormFieldWrapper>
      <StyledLabel htmlFor={props.name}>{props.name}</StyledLabel>
      <InputWrapper>
        <Field
          type={showPassword ? "text" : "password"}
          component={StyledField}
          name={props.name}
          value={props.value}
          onChange={props.onChange(props.id ? props.id : props.name)}
          onBlur={props.onBlur(props.id ? props.id : props.name)}
        />
        <EyeFill height="20px" onClick={() => setShowPassword(!showPassword)}/>
      </InputWrapper>
      <ErrorMsg>{props.error && props.touched ? props.error : null}</ErrorMsg>
    </FormFieldWrapper>
  )
}
