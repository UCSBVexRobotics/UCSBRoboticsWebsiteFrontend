import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { Formik } from "formik"
import Form from "../FormComponents/Form"
import FormField from "../FormComponents/FormField"
import FormPassword from "../FormComponents/FormPassword"
import SubmitButton from "../FormComponents/SubmitButton"
import Modal from "./Modal"
import { UserValuesContext } from "./UserValuesContext"
import * as Yup from "yup"

const CreateAccountLink = styled.p`
  margin: 0;
  font-size: 15px;
  margin-left: 15px;

  & > a {
    color: blue;
  }
`

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
})

type Props = {
  isOpen: boolean
  openForgotPasswordModal: () => void
  openSignupModal: () => void
  closeModal: () => void
}

export default function LoginModal({
  isOpen,
  openSignupModal,
  openForgotPasswordModal,
  closeModal,
}: Props) {
  const [userValues, updateUserValues] = useContext(UserValuesContext)

  return (
    <Modal title="Login" isOpen={isOpen} closeModal={closeModal}>
      <Formik
        initialValues={userValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values)
            setSubmitting(false)
            alert("HERE")
          })
        }}
        validationSchema={LoginSchema}
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
            <Form handleSubmit={handleSubmit}>
              <FormField
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                touched={touched.email}
                error={errors.email}
              />
              <FormPassword
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                touched={touched.password}
                error={errors.password}
              />
              <SubmitButton name="Login" disabled={isSubmitting} />
              <CreateAccountLink>
                Don't have an account yet? Click{" "}
                <a onClick={() => openSignupModal()}>here</a> to create one!
              </CreateAccountLink>
              <CreateAccountLink>
                Forgot password? Click{" "}
                <a onClick={() => openForgotPasswordModal()}>here</a>!
              </CreateAccountLink>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}
