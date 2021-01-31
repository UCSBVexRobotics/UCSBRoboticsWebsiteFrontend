import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { Formik, Field } from "formik"
import SubmitButton from "./FormComponents/SubmitButton"
import Modal from "./Modal"
import Profile from "../../pages/Profile"
import { handleLogin } from "../../services/auth"

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

const CreateAccountText = styled.p`
  margin: 0;
  font-size: 15px;
  margin-left: 15px;
`

const CreateAccountLink = styled.a`
  :hover {
    text-decoration: underline;
  }
`

export default function LoginModal(props) {
  return (
    <Modal
      title="Login"
      isOpen={props.isOpen}
      closeModal={() => props.closeModal()}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          // navigate("/Profile")
          fetch(
            "https://roboticswebsite.azurewebsites.net/api/Login/authenticate",
            {
              method: "POST",
              body: JSON.stringify({ id: "user99", password: "string" }),
              headers: {
                accept: "*/*",
                "accept-encoding": "gzip, deflate, br",
                "content-type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
            .then(response => {
              console.log(response)
            })
            .catch(error => alert(error))
          setSubmitting(false)
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
            <SubmitButton name="Login" disabled={isSubmitting} />
            <CreateAccountText>
              Don't have an account yet? Click{" "}
              <CreateAccountLink onClick={() => props.changeToSignUpModal()}>
                here
              </CreateAccountLink>{" "}
              to create one!
            </CreateAccountText>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
