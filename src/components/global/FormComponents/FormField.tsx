// import React, { Fragment } from "react"
// import styled from "styled-components"
// import { Field } from "formik"

// const FormFieldWrapper = styled.div`
//   margin: 3%;
//   display: flex;
//   flex-orientation: column;
//   flex-wrap: wrap;
//   width: 100%;
// `

// const StyledLabel = styled.label``

// const StyledField = styled.input`
//   border: none;
//   border-bottom: 2px solid #003384;
//   font-size: 18px;
//   width: 100%;
//   margin-top: 7px;

//   &:focus {
//     outline: none;
//     border-bottom: 2px solid #3dd6ff;
//   }
// `

// export default function FormField(props) {
//   return (
//     <FormFieldWrapper>
//       <StyledLabel htmlFor={props.name}>{props.name}</StyledLabel>
//       <Field
//         id={props.id}
//         type={props.type}
//         component={StyledField}
//         name={props.name}
//         onChange={props.handleChange}
//         onBlur={props.handleBlur}
//       />
//     </FormFieldWrapper>
//   )
// }
