import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { Formik } from "formik"
import Form from "./FormComponents/Form"
import FormField from "./FormComponents/FormField"
import FormPassword from "./FormComponents/FormPassword"
import SubmitButton from "./FormComponents/SubmitButton"
import { UserValuesContext } from "./UserValuesContext";
import Modal from "./Modal"

import * as Yup from "yup";

const CreateAccountLink = styled.p`
  width: 100%;
  margin: 0;
  font-size: 15px;
  margin-left: 15px;

  & > a {
    color: blue;
  }
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
    .matches(/[0-9]/, "Must include a number")
    .matches(/[a-z]/i, "Must include a character")
    .matches(/[A-Z]/, "Must include a capital letter")
    .test("Includes", "Required", val => val)
    // need to check val exists, but if it doesn't then you get this error which is why we have previous test:
    .test("Includes", "Cannot include special characters", val => val && !val.match(/[!@#$%^&*()-+_=<>,.]/))
    .required("Required"),
  
    // This is the only thing I could get to work:
  verifyPassword: Yup.string()
    .when(["password"], (password, schema, { originalValue }) => {
      return originalValue && password && originalValue === password
          ? Yup.string().required("Required")
          : Yup.string().test("", "Passwords do not match", () => false);
    })
    .required("Required")
});

export default function SignupModal({ isOpen, openLoginModal, closeModal }) {
  const [userValues, updateUserValues] = useContext(UserValuesContext);
  
  return (
    <Modal title="Signup" isOpen={isOpen} closeModal={closeModal}>
      <Formik
        initialValues={userValues}
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
        }) => {
          useEffect(() => {
            updateUserValues(values);
          }, [values])

          return (
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
        }
      </Formik>
    </Modal>
  )
}
