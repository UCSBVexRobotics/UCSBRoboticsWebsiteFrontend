import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import Form from "./FormComponents/Form"
import FormField from "./FormComponents/FormField"
import FormPassword from "./FormComponents/FormPassword"
import SubmitButton from "./FormComponents/SubmitButton"
import Modal from "./Modal"

const CreateAccountLink = styled.p`
  margin: 0;
  font-size: 15px;
  margin-left: 15px;
`

export default function LoginModal({ isOpen, openSignupModal, openForgotPasswordModal, closeModal }) {
  return (
    <Modal title="Login" isOpen={isOpen} closeModal={closeModal}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => console.log("Logged in!")}
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
          <Form onSubmit={handleSubmit}>
            <FormField
              name="Email"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.email}
            />
            <FormPassword
              name="Password"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.password}
            />
            <SubmitButton name="Login" disabled={isSubmitting} />
            <CreateAccountLink>
              Don't have an account yet? Click <button onClick={() => openSignupModal()}>here</button> to create one!
            </CreateAccountLink>
            <CreateAccountLink>
              Forgot password? Click <button onClick={() => openForgotPasswordModal()}>here</button>!
            </CreateAccountLink>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
