import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import Form from "./FormComponents/Form"
import FormField from "./FormComponents/FormField"
import FormPassword from "./FormComponents/FormPassword"
import SubmitButton from "./FormComponents/SubmitButton"
import Modal from "./Modal"

const CreateAccountLink = styled.p`
  width: 100%;
  margin: 0;
  font-size: 15px;
  margin-left: 15px;
`

export default function ForgotPasswordModal({ isOpen, openLoginModal, openSignupModal, closeModal }) {
  return (
    <Modal title="Forgot Password" isOpen={isOpen} closeModal={closeModal}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={() => console.log("Signed up!")}
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
            <SubmitButton name="Send Verification" disabled={isSubmitting} />
            <CreateAccountLink>
              Remember Password? Click <button onClick={() => openLoginModal()}>here</button> to sign in!
            </CreateAccountLink>
            <CreateAccountLink>
              Don't have an account? Click <button onClick={() => openSignupModal()}>here</button> to sign up!
            </CreateAccountLink>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
