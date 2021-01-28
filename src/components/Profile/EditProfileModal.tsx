import React, { useContext, useEffect } from "react"
import { Formik } from "formik"
import Form from "../global/FormComponents/Form"
import FormField from "../global/FormComponents/FormField"
import SubmitButton from "../global/FormComponents/SubmitButton"
import Modal from "../global/Modal"

import * as Yup from "yup"

/*

NEED TO INCLUDE:

OPTION TO SHOW EMAIL

*/

const NameSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
})

interface Props {
  isOpen: boolean
  closeModal: () => void
}

export default function SignupModal({ isOpen, closeModal }: Props) {
  const values = { firstName: "", lastName: "", github: "", linkedIn: "" }

  return (
    <Modal title="Edit Profile" isOpen={isOpen} closeModal={closeModal}>
      <Formik
        initialValues={values}
        onSubmit={() => console.log("Signed up!")}
        validationSchema={NameSchema}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <Form handleSubmit={handleSubmit}>
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
                name="LinkedIn Profile"
                id="linkedIn"
                onChange={e => handleChange(e)}
                onBlur={e => handleBlur(e)}
                value={values.linkedIn}
              />
              <FormField
                name="Github Username"
                id="github"
                onChange={e => handleChange(e)}
                onBlur={e => handleBlur(e)}
                value={values.github}
              />
              <SubmitButton name="Cancel" />
              <SubmitButton name="Update" disabled={isSubmitting} />
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}
