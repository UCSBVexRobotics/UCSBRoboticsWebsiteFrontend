import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import Form from "./FormComponents/Form"
import FormField from "./FormComponents/FormField"
import FormPassword from "./FormComponents/FormPassword"
import SubmitButton from "./FormComponents/SubmitButton"
import Modal from "./Modal"

import * as Yup from "yup";

const CreateAccountLink = styled.p`
  width: 100%;
  margin: 0;
  font-size: 15px;
  margin-left: 15px;
`

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required"),
  lastName: Yup.string()
    .required("Required"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or longer")
    .max(15, "Password must be 15 characters or shorter")
    .required("Required"),
  /* 
  
  TODO: Password confirmation
  
  */
  verifyPassword: Yup.string()
    .required("Required")
});

/*
- There's too many fields that it cuts off the X in the top right
*/

export default function SignupModal({ isOpen, openLoginModal, closeModal }) {
  return (
    <Modal title="Signup" isOpen={isOpen} closeModal={closeModal}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "", verifyPassword: "" }}
        onSubmit={() => console.log("Signed up!")}
        validationSchema={SignupSchema}
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
              id="firstName"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.firstName}
              error={errors.firstName}
              touched={touched.firstName}
            />
            <FormField
              name="Last Name"
              id="lastName"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.lastName}
              error={errors.lastName}
              touched={touched.lastName}
            />
            <FormField
              name="email"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />
            <FormPassword
              name="password"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            <FormPassword
              name="Verify Password"
              id="verifyPassword"
              onChange={e => handleChange(e)}
              onBlur={e => handleBlur(e)}
              value={values.verifyPassword}
              error={errors.verifyPassword}
              touched={touched.verifyPassword}
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
