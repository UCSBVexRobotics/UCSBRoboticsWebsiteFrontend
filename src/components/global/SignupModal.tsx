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

/*

- There's too many fields that it cuts off the X in the top right

*/

export default function SignupModal({ isOpen, openLoginModal, closeModal }) {
  return (
    <Modal title="Signup" isOpen={isOpen} closeModal={closeModal}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "", verifyPassword: "" }}
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
              name="First Name"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.firstName}
            />
            <FormField
              name="Last Name"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.lastName}
            />
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
            <FormPassword
              name="Verify Password"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.verifyPassword}
            />
            <SubmitButton name="Signup" disabled={isSubmitting} />
            <CreateAccountLink>
              Have an account? Click <a onClick={() => openLoginModal()}>here</a> to sign in!
            </CreateAccountLink>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
