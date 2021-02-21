import React, { useState, useEffect } from "react"
import Page from "../components/global/Page"
import styled from "styled-components"

import Button from "../components/global/Button"

import Colors from "../styles/colors"

import UserHeader from "../components/Profile/UserHeader"
import ProjectDisplay from "../components/Profile/ProjectDisplay"

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  // background-color: red;
  width: 100%;
  height: 100%;
  color: white;
`

const Content = styled.div`
  width: 600px;
  background-color: #2e428f;
  padding: 30px;
  border-radius: 25px;
`

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 580px) {
    flex-wrap: wrap;
  }
`
const addProjectId = (account: any) => {
  const newProjs = account.projects.map((proj, i) => {
    return { ...proj, id: i }
  })
  return { ...account, projects: newProjs }
}

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

  const [editOpen, setEditOpen] = useState(false)

  const [formValues, setFormValues] = useState(addProjectId(account))

  const changeFormValue = newVal => setFormValues({ ...formValues, ...newVal })

  const delProject = (i: number) => {
    formValues.projects.splice(i, 1)
    changeFormValue({
      projects: formValues.projects,
    })
  }

  return (
    <Page>
      <PageContainer>
        <Content>
          <UserHeader
            editOpen={editOpen}
            formValues={formValues}
            changeFormValue={changeFormValue}
          />
          <ProjectDisplay
            editOpen={editOpen}
            formValues={formValues}
            changeFormValue={changeFormValue}
            delProject={delProject}
          />
          {editOpen ? (
            <ButtonArea>
              <Button
                width="100%"
                onClick={() => {
                  const lastProj =
                    formValues.projects[formValues.projects.length - 1]
                  if (lastProj.title !== "") {
                    changeFormValue({
                      projects: [
                        ...formValues.projects,
                        { title: "", desc: "", id: lastProj.id + 1 },
                      ],
                    })
                  }
                }}
                text="Add New Project"
                primaryColor={Colors.ORANGE}
                secondaryColor="white"
              />
            </ButtonArea>
          ) : null}
          <ButtonArea>
            {editOpen ? (
              <Button
                width="100%"
                onClick={() => {
                  formValues.projects = formValues.projects.filter(val => {
                    // Needs Title and desc - may change
                    return val.title !== ""
                  })
                  if (editOpen) {
                    /* 
                  
                  PUSH formValues to API
                    > UPDATE ACCOUNT
                  */
                  }
                  setEditOpen(!editOpen)
                }}
                text="Save"
                primaryColor={Colors.ORANGE}
                secondaryColor="white"
              />
            ) : null}
            <Button
              width="100%"
              onClick={() => {
                if (editOpen) {
                  setFormValues(addProjectId(account))
                }
                setEditOpen(!editOpen)
              }}
              text={editOpen ? "Reset" : "Edit"}
              primaryColor={Colors.ORANGE}
              secondaryColor="white"
            />
          </ButtonArea>
        </Content>
      </PageContainer>
    </Page>
  )
}
