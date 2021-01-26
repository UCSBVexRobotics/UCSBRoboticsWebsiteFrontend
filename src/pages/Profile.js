import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Page from "../components/Page"
import styled from "styled-components"

import { Email } from "@styled-icons/material/Email"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background-red;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 600px;
  background-color: #2e428f;
  padding: 30px;
  border-radius: 25px;
`

const Project = styled.div`
  border-radius: 10px;
  background-color: #5478bf;
  padding: 10px 10px;
  margin: 10px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const ProjectTitle = styled.h4`
  margin: 0;
  font-style: italic;
`

const ProjectContent = styled.p`
  margin: 0;
`

const ContentHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const VerifyEmail = styled.div`
  width: 105px;
  height: 30px;
  background-color: red;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-weight: bold;

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

const Edit = styled.div`
  width: 45px;
  height: 45px;
  background-color: orange;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

const Name = styled.h1`
  margin: 0;
`

const Description = styled.p`
  margin-bottom: 0;
`

const Roles = styled.div`
  display: flex;
  flex-direction: row;
`

const Role = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px;
  display: flex;
  item-align: center;
  justify-content: center;
  background-color: #ed765a;
`

const LinkBar = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin: 5px;
  }
  height: 80px;
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
  height: 40px;
  width: 40px;
  background-color: ${({ color }) => color};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
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
    sRoboChip: 1000,
    description:
      "My name is Eduardo, a third year Electrical Engineering student and the President of UCSB’s Robotics Club. I aim to help improve the club and help members benefit from their experience as much as possible while in the club. My main passions are engineering and powerlifting! ",
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

  /*OPTION TO SHOW EMAIL*/

  return (
    <Page>
      <PageContainer>
        <Content>
          <ContentHeading>
            <Name>{account.firstName + " " + account.lastName}</Name>
            <Options>
              {account.emailVerified === false ? (
                <VerifyEmail shake={shake}>Verify Email</VerifyEmail>
              ) : null}
              <Edit>Edit</Edit>
            </Options>
          </ContentHeading>
          <Roles>
            {account.role === "admin" ? <Role>Admin</Role> : null}
            {account.sRoboChip >= 35 ? (
              <Role>Software Team Developer</Role>
            ) : null}
          </Roles>
          {account.description ? (
            <Description>{account.description}</Description>
          ) : null}
          <LinkBar>
            {account.linkedIn ? (
              <Link to={`https://www.linkedin.com/in/${account.linkedIn}`}>
                <LinkedinSquare size="40px" />
              </Link>
            ) : null}
            {account.email && false ? (
              <Link href={`mailto:${account.email}`}>
                <Email size="40px" />
              </Link>
            ) : null}
            {account.github ? (
              <Link to={`https://www.github.com/${account.github}`}>
                <Github size="40px" />
              </Link>
            ) : null}
            {account.mRoboChip ? (
              <Tooltip>
                <Circle color="#24e07c">{account.mRoboChip}</Circle>
                <ToolTipText color="#24e07c">
                  Mechanical Team RoboChips
                </ToolTipText>
              </Tooltip>
            ) : null}
            {account.eRoboChip ? (
              <Tooltip>
                <Circle color="#fac739">{account.eRoboChip}</Circle>
                <ToolTipText color="#fac739">
                  Electronical Team RoboChips
                </ToolTipText>
              </Tooltip>
            ) : null}
            {account.sRoboChip ? (
              <Tooltip>
                <Circle color="#2d6ae3">{account.sRoboChip}</Circle>
                <ToolTipText color="#2d6ae3">
                  Software Team RoboChips
                </ToolTipText>
              </Tooltip>
            ) : null}
          </LinkBar>
          {account.projects.length > 0
            ? account.projects.map(proj => {
                return (
                  <Project>
                    <ProjectTitle>{proj.title}</ProjectTitle>
                    &nbsp;-&nbsp;
                    <ProjectContent>{proj.desc}</ProjectContent>
                  </Project>
                )
              })
            : null}
        </Content>
      </PageContainer>
    </Page>
  )
}
