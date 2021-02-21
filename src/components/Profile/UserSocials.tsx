import React from "react"
import styled from "styled-components"

import { Email } from "@styled-icons/material/Email"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"

const LinkBar = styled.div<{ editOpen: boolean }>`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  border-radius: 10px;
  ${({ editOpen }) => (editOpen ? "background-color: #5478bf;" : "")}
`

const Edit = styled.input.attrs(props => ({
  type: "text",
  contenteditable: "true", // this doesn't work
}))`
  min-height: 30px;
  width: 100%;

  border-radius: 7px;
  border: 0;
  margin: 3px;

  font-size: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`
/*
  `
  overflow: auto;
    background-color: white;
    color: black;
  `
  */

const EditableArea = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 5px;
  }
  width: 100%;
`

const GitHubDisplay = ({ github }: { github: string }) => (
  <a href={`https://www.github.com/${github}`}>
    <Github size="40px" />
  </a>
)

const LinkedInDisplay = ({ linkedin }: { linkedin: string }) => (
  <a href={`https://www.linkedin.com/in/${linkedin}`}>
    <LinkedinSquare size="40px" />
  </a>
)

const EmailDisplay = ({ email }: { email: string }) => (
  <a href={`mailto:${email}`}>
    <Email size="40px" />
  </a>
)

type Props = {
  editOpen: boolean
  formValues: {
    github: string
    linkedIn: string
    email: string
  }
  changeFormValue: (obj: any) => void
}

const UserSocialsEdit = ({ editOpen, formValues, changeFormValue }: Props) => {
  return (
    <LinkBar editOpen={editOpen}>
      <EditableArea>
        <GitHubDisplay github={formValues.github} />
        <Edit
          defaultValue={formValues.github}
          onChange={newVal =>
            changeFormValue({
              github: newVal.currentTarget.value,
            })
          }
        />
      </EditableArea>
      <EditableArea>
        <LinkedInDisplay linkedin={formValues.linkedIn} />
        <Edit
          defaultValue={formValues.linkedIn}
          onChange={newVal =>
            changeFormValue({
              linkedIn: newVal.currentTarget.value,
            })
          }
        />
      </EditableArea>
      <EditableArea>
        <EmailDisplay email={formValues.email} />
        <Edit
          defaultValue={formValues.email}
          onChange={newVal =>
            changeFormValue({
              email: newVal.currentTarget.value,
            })
          }
        />
      </EditableArea>
    </LinkBar>
  )
}

const UserSocialsDisplay = ({ editOpen, formValues }: Props) => {
  return (
    <LinkBar editOpen={editOpen}>
      {formValues.github ? <GitHubDisplay github={formValues.github} /> : null}
      {formValues.linkedIn ? (
        <LinkedInDisplay linkedin={formValues.linkedIn} />
      ) : null}
      {
        // AND WITH emailDisabled? OPTION
        formValues.email ? <EmailDisplay email={formValues.email} /> : null
      }
    </LinkBar>
  )
}

export default function UserSocials({
  editOpen,
  formValues,
  changeFormValue,
}: Props) {
  return editOpen
    ? UserSocialsEdit({ editOpen, formValues, changeFormValue })
    : UserSocialsDisplay({ editOpen, formValues, changeFormValue })
}
