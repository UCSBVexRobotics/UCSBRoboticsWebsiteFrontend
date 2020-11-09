import React from "react"
import Container from "../global/Container"
import styled from "styled-components"
import LogoCircle from "../../../static/logoCircle.png"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Img = styled.img`
  width: 160px;
`

const Title = styled.h1`
  color: white;
  margin-left: 20px;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 70px;
`

const Description = styled.h2`
  color: white;
  padding-left: 15px;
`

export default function IntroSection() {
  return (
    <Container introSection={true}>
      <HeaderWrapper>
        <Img src={LogoCircle} />
        <Title>Welcome to UCSB Robotics Club</Title>
      </HeaderWrapper>
      <Description>
        Robotics team at UCSB is a project-oriented club for students to develop
        a variety of technical skills in an applied environment. Students of all
        majors are welcome to join!
      </Description>
    </Container>
  )
}
