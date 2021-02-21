import React from "react"
import styled from "styled-components"

import Colors from "../../styles/colors"
import Shake from "../global/Shapes/Shake"

import RoboChipDisplay from "./RoboChipDisplay"
import UserSocials from "./UserSocials"

const NameLabel = styled.p`
  margin: 0;
  width: 250px;
`

const NameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const ContentUser = styled.div<{ open: boolean }>`
  width: ${({ open }) => (open ? "100%" : "auto")};
`

const Name = styled.h1`
  margin: 0;
`

const ContentHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`
const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const VerifyEmail = styled.h4`
  color: ${Colors.RED};
  margin: 0;
  margin-left: 15px;
`
const Roles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Role = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 3px;
  display: flex;
  item-align: center;
  justify-content: center;
  background-color: ${Colors.ORANGE};
`

const Names = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  @media (max-width: 580px) {
    flex-wrap: wrap;
  }
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

type Props = {
  editOpen: boolean
  formValues: {
    firstName: string
    lastName: string
    email: string
    emailVerified: boolean
    linkedIn: string
    github: string
    eRoboChip: number
    mRoboChip: number
    sRoboChip: number
    role: string
  }
  changeFormValue: (s: any) => void
}

const NameDisplay = ({
  title,
  val,
  propName,
  changeFormValue,
}: {
  title: string
  val: string
  propName: string
  changeFormValue: (s: any) => void
}) => {
  return (
    <NameGroup>
      <NameLabel>{title}</NameLabel>
      <Edit
        defaultValue={val}
        onChange={newVal =>
          changeFormValue({
            [propName]: newVal.currentTarget.value,
          })
        }
      />
    </NameGroup>
  )
}

export default function UserHeader({
  editOpen,
  formValues,
  changeFormValue,
}: Props) {
  return (
    <>
      <ContentHeading>
        <ContentUser open={editOpen}>
          <NameContainer>
            {editOpen ? (
              <Names>
                <NameDisplay
                  title="First Name:"
                  val={formValues.firstName}
                  propName="firstName"
                  changeFormValue={changeFormValue}
                />
                <NameDisplay
                  title="Last Name:"
                  val={formValues.lastName}
                  propName="lastName"
                  changeFormValue={changeFormValue}
                />
              </Names>
            ) : (
              <Name>{formValues.firstName + " " + formValues.lastName}</Name>
            )}
            {formValues.emailVerified === false && editOpen === false ? (
              <Shake time="2500">
                <VerifyEmail>Verify Email</VerifyEmail>
              </Shake>
            ) : null}
          </NameContainer>
          {!editOpen ? (
            <Roles>
              {formValues.role === "admin" ? <Role>Admin</Role> : null}
              {
                /* We could do role stuff like this, idk */
                formValues.sRoboChip >= 35 ? (
                  <Role>Software Team Developer</Role>
                ) : null
              }
            </Roles>
          ) : null}
        </ContentUser>
        <RoboChipDisplay account={formValues} editOpen={editOpen} />
      </ContentHeading>
      <UserSocials
        editOpen={editOpen}
        formValues={formValues}
        changeFormValue={changeFormValue}
      />
    </>
  )
}
