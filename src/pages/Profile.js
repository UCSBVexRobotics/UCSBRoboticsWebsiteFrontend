import React, { useState, useEffect } from "react"
import Page from "../components/Page"
import styled from "styled-components"

import { Email } from "@styled-icons/material/Email"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Delete } from "@styled-icons/feather/Delete"

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  // background-color: red;
  width: 100%;
  height: 100%;
  color: white;

  // just to prevent nav bar overlap
  padding-top: 80px;
`

const Content = styled.div`
  width: 600px;
  background-color: #2e428f;
  padding: 30px;
  border-radius: 25px;
`

const ContentHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const VerifyEmail = styled.h4`
  color: red;
  margin: 0;
  margin-left: 15px;

  animation: ${({ shake }) => (shake ? "shake" : "")} 1.5s
    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
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

const Name = styled.h1`
  margin: 0;
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
  background-color: #ed765a;
`

const LinkBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const ToolTipText = styled.span`
  visibility: hidden;
  background-color: ${({ color }) => color};
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  margin: 5px 0;
  position: absolute;
  z-index: 1;
`

const Tooltip = styled.div`
  visibility: show;

  &:hover {
    ${ToolTipText} {
      visibility: visible;
    }
  }
`

const Circle = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  padding: 2px;
  margin: 0 5px;
  background-color: ${({ color }) => color};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
`

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 580px) {
    flex-wrap: wrap;
  }
`

const EditButton = styled.div`
  padding: 10px 30px;
  margin: 5px ${({ open }) => (open ? "10px" : "0")};
  width: 100%;
  color: white;
  font-size: 20px;
  border: 1px solid #ed765a;
  background-color: #ed765a;
  border-radius: 7px;
  outline: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: transparent;
    color: #ed765a;
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
  ${({ editing }) => (editing ? "width: 100%" : null)};
`

const ContentUser = styled.div`
  width: ${({ open }) => (open ? "100%" : "auto")};
`
const Project = styled.div`
  border-radius: 10px;
  background-color: #5478bf;
  padding: 10px 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
`
const ProjectTitle = styled.h4`
  margin: 0;
  font-style: italic;
`
const ProjectContent = styled.p`
  margin: 0;
  overflow: auto;
`
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

const ProjectDelete = styled(Delete)`
  height: 30px;
  cursor: pointer;
`

const ProjectTitleEditArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`

export default function Profile() {
  const account = {
    id: "test_id",
    email: "test@gmail.com",
    emailVerified: false,
    password: "why?",
    role: "admin",
    firstName: "Test",
    lastName: "User",
    github: "testUsergithub",
    linkedIn: "testLink",
    mRoboChip: 3,
    eRoboChip: 20,
    sRoboChip: 56,
    projects: [
      { title: "Project 1", desc: "Lead" },
      { title: "Project 2", desc: "Did stuff" },
      { title: "Project 3", desc: "Not sure" },
    ],
  }

  const [shake, setShake] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShake(!shake)
    }, 2500)

    return () => {
      clearInterval(timer)
    }
  }, [shake])

  const [editOpen, setEditOpen] = useState(false)

  const [formValues, setFormValues] = useState(account)

  const changeFormValue = newVal => setFormValues({ ...formValues, ...newVal })

  return (
    <Page>
      <PageContainer>
        <Content>
          <ContentHeading>
            <ContentUser open={editOpen}>
              <NameContainer>
                {editOpen ? (
                  <Names>
                    <NameGroup>
                      <NameLabel>First Name:</NameLabel>
                      <Edit
                        name="firstName"
                        defaultValue={formValues.firstName}
                        onChange={newVal =>
                          changeFormValue({
                            firstName: newVal.currentTarget.value,
                          })
                        }
                      />
                    </NameGroup>
                    <NameGroup>
                      <NameLabel>Last Name:</NameLabel>
                      <Edit
                        name="lastName"
                        defaultValue={formValues.lastName}
                        onChange={newVal =>
                          changeFormValue({
                            lastName: newVal.currentTarget.value,
                          })
                        }
                      />
                    </NameGroup>
                  </Names>
                ) : (
                  <Name>
                    {formValues.firstName + " " + formValues.lastName}
                  </Name>
                )}
                {formValues.emailVerified === false && editOpen === false ? (
                  <VerifyEmail shake={shake}>Verify Email</VerifyEmail>
                ) : null}
              </NameContainer>
              {!editOpen ? (
                <Roles>
                  {account.role === "admin" ? <Role>Admin</Role> : null}
                  {
                    /* We could do role stuff like this, idk */
                    account.sRoboChip >= 35 ? (
                      <Role>Software Team Developer</Role>
                    ) : null
                  }
                </Roles>
              ) : null}
            </ContentUser>
            {!editOpen ? (
              <Options>
                {account.mRoboChip ? (
                  <Tooltip>
                    <Circle size="40" color="#24e07c">
                      {account.mRoboChip}
                    </Circle>
                    <ToolTipText color="#24e07c">
                      Mechanical Team RoboChips
                    </ToolTipText>
                  </Tooltip>
                ) : null}
                {account.eRoboChip ? (
                  <Tooltip>
                    <Circle size="40" color="#fac739">
                      {account.eRoboChip}
                    </Circle>
                    <ToolTipText color="#fac739">
                      Electrical Team RoboChips
                    </ToolTipText>
                  </Tooltip>
                ) : null}
                {account.sRoboChip ? (
                  <Tooltip>
                    <Circle size="40" color="#2d6ae3">
                      {account.sRoboChip}
                    </Circle>
                    <ToolTipText color="#2d6ae3">
                      Software Team RoboChips
                    </ToolTipText>
                  </Tooltip>
                ) : null}
              </Options>
            ) : null}
          </ContentHeading>
          <LinkBar>
            <EditableArea editing={editOpen}>
              {formValues.github || editOpen ? (
                <a href={`https://www.github.com/${formValues.github}`}>
                  <Github size="40px" />
                </a>
              ) : null}
              {editOpen ? (
                <Edit
                  name="github"
                  defaultValue={formValues.github}
                  onChange={newVal =>
                    changeFormValue({
                      github: newVal.currentTarget.value,
                    })
                  }
                />
              ) : null}
            </EditableArea>
            <EditableArea editing={editOpen}>
              {formValues.linkedIn || editOpen ? (
                <a href={`https://www.linkedin.com/in/${formValues.linkedIn}`}>
                  <LinkedinSquare size="40px" />
                </a>
              ) : null}
              {editOpen ? (
                <Edit
                  defaultValue={formValues.linkedIn}
                  onChange={newVal =>
                    changeFormValue({
                      linkedIn: newVal.currentTarget.value,
                    })
                  }
                />
              ) : null}
            </EditableArea>
            <EditableArea editing={editOpen}>
              {
                // AND WITH emailDisabled? OPTION
                formValues.email || editOpen ? (
                  <a href={`mailto:${formValues.email}`}>
                    <Email size="40px" />
                  </a>
                ) : null
              }
              {editOpen ? (
                <Edit
                  defaultValue={formValues.email}
                  onChange={newVal =>
                    changeFormValue({
                      email: newVal.currentTarget.value,
                    })
                  }
                />
              ) : null}
            </EditableArea>
          </LinkBar>
          {formValues.projects.length > 0 || editOpen
            ? formValues.projects.map((proj, i) => {
                return (
                  <Project>
                    {editOpen ? (
                      <ProjectTitleEditArea>
                        <Edit
                          defaultValue={formValues.projects[i].title}
                          onChange={newVal => {
                            formValues.projects[i].title =
                              newVal.currentTarget.value
                            changeFormValue({
                              projects: formValues.projects,
                            })
                          }}
                        />
                        <ProjectDelete
                          onClick={() => {
                            let copy = formValues.projects
                            copy.splice(i, 1)
                            changeFormValue({
                              projects: copy,
                            })
                          }}
                        />
                      </ProjectTitleEditArea>
                    ) : (
                      <ProjectTitle>{proj.title}</ProjectTitle>
                    )}
                    {editOpen ? (
                      <Edit
                        defaultValue={formValues.projects[i].desc}
                        onChange={newVal => {
                          formValues.projects[i].desc =
                            newVal.currentTarget.value
                          changeFormValue({
                            projects: formValues.projects,
                          })
                        }}
                      />
                    ) : (
                      <ProjectContent>&nbsp;-&nbsp;{proj.desc}</ProjectContent>
                    )}
                  </Project>
                )
              })
            : null}
          <ButtonArea>
            {editOpen ? (
              <EditButton
                open={editOpen}
                size="45"
                color="orange"
                onClick={() => {
                  if (editOpen) {
                    /* 
                    
                    PUSH formValues to API
                      > UPDATE ACCOUNT
                    */
                  }
                  setEditOpen(!editOpen)
                }}
                style={{ cursor: "pointer" }}
              >
                Save
              </EditButton>
            ) : null}
            <EditButton
              open={editOpen}
              size="45"
              color="orange"
              onClick={() => {
                if (editOpen) {
                  setFormValues(account)
                }
                setEditOpen(!editOpen)
              }}
              style={{ cursor: "pointer" }}
            >
              {editOpen ? "Reset" : "Edit"}
            </EditButton>
          </ButtonArea>
        </Content>
      </PageContainer>
    </Page>
  )
}
