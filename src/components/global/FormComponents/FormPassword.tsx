import React, { useState } from "react"
import styled from "styled-components"
import { Field, FormikTouched, FormikErrors } from "formik"
import { EyeFill } from "@styled-icons/bootstrap/EyeFill"

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

type Props = {
  name: string
  value: string
  id?: string
  touched: boolean | FormikTouched<any> | FormikTouched<any>[]
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[]
  onChange: (s: string) => void
  onBlur: (s: string) => void
}

export default function FormPassword({
  name,
  value,
  id = name,
  touched,
  error,
  onChange,
  onBlur,
}: Props) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormFieldWrapper>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <InputWrapper>
        <Field
          type={showPassword ? "text" : "password"}
          component={StyledField}
          name={name}
          value={value}
          onChange={onChange(id)}
          onBlur={onBlur(id)}
        />
        <EyeFill height="20px" onClick={() => setShowPassword(!showPassword)} />
      </InputWrapper>
      <ErrorMsg>{error && touched ? error : null}</ErrorMsg>
    </FormFieldWrapper>
  )
}
