import React from "react"
import styled from "styled-components"
import { Formik, Field } from "formik"
import SubmitButton from "./FormComponents/SubmitButton"
import Modal from "./Modal"

const FormFieldWrapper = styled.div`
  margin: 3%;
  display: flex;
  flex-orientation: column;
  flex-wrap: wrap;
  width: 100%;
`

const StyledLabel = styled.label``

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

const SignUpText = styled.p`
  margin: 0;
  font-size: 15px;
  margin-left: 15px;
`

const SignUpLink = styled.a`
  :hover {
    text-decoration: underline;
  }
`

export default function LoginModal(props) {
  return (
    <Modal
      title="Sign up"
      isOpen={props.isOpen}
      closeModal={() => props.closeModal()}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          verifyPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormFieldWrapper>
              <StyledLabel htmlFor="firstName">First Name</StyledLabel>
              <Field
                id="firstName"
                type="text"
                component={StyledField}
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
              <Field
                id="lastName"
                type="text"
                component={StyledField}
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <Field
                id="email"
                type="email"
                component={StyledField}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <StyledLabel htmlFor="password">Password</StyledLabel>
              <Field
                id="password"
                type="password"
                component={StyledField}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <StyledLabel htmlFor="verifyPassword">
                Verify Password
              </StyledLabel>
              <Field
                id="verifyPassword"
                type="password"
                component={StyledField}
                name="verifyPassword"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormFieldWrapper>
            <SubmitButton name="Create account" disabled={isSubmitting} />
            <SignUpText>
              Already have an account? Click{" "}
              <SignUpLink onClick={() => props.changeToLoginModal()}>
                here
              </SignUpLink>{" "}
              to login!
            </SignUpText>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
