import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { Formik, ErrorMessage } from "formik"
import Form from "./FormComponents/Form"
import FormField from "./FormComponents/FormField"
import FormPassword from "./FormComponents/FormPassword"
import SubmitButton from "./FormComponents/SubmitButton"
import Modal from "./Modal"
import { UserValuesContext } from "./UserValuesContext"

import * as Yup from "yup"

const CreateAccountLink = styled.p`
  width: 100%;
  margin: 0;
  font-size: 15px;
  margin-left: 15px;

  & > a {
    color: blue;
  }
`

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
})

export default function ForgotPasswordModal({
  isOpen,
  openLoginModal,
  openSignupModal,
  closeModal,
}) {
  const [userValues, updateUserValues] = useContext(UserValuesContext)

  return (
    <Modal title="Forgot Password" isOpen={isOpen} closeModal={closeModal}>
      <Formik
        initialValues={userValues}
        onSubmit={() => console.log("Signed up!")}
        validationSchema={ForgotPasswordSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          useEffect(() => {
            updateUserValues(values)
          }, [values])

          return (
            <Form onSubmit={handleSubmit}>
              <FormField
                name="email"
                onChange={e => handleChange(e)}
                onBlur={e => handleBlur(e)}
                value={values.email}
                touched={touched.email}
                error={errors.email}
              />
              <SubmitButton name="Send Verification" disabled={isSubmitting} />
              <CreateAccountLink>
                Remember Password? Click{" "}
                <a onClick={() => openLoginModal()}>here</a> to sign in!
              </CreateAccountLink>
              <CreateAccountLink>
                Don't have an account? Click{" "}
                <a onClick={() => openSignupModal()}>here</a> to sign up!
              </CreateAccountLink>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}
