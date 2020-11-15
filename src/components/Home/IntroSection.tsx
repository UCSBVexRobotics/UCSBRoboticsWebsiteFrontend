import React from "react"
import Container from "../global/Container"
import styled from "styled-components"
import LogoCircle from "../../../static/logoCircle.png"
import FlipBox from "../Home/FlipBox"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Img = styled.img`
  width: 160px;
`

const Title = styled.h1`
  font-weight: lighter;
  color: white;
  margin-left: 20px;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 70px;
`

const Description = styled.h2`
  color: white;
  padding-left: 15px;
  display: flex;
  align-items: center;
`

export default function IntroSection() {
  //Array for the Flipbox
  const flipBoxValues = ["robotics", "coding", "mechanics"]

  return (
    <Container introSection={true}>
      <HeaderWrapper>
        <Img src={LogoCircle} />
        <Title>Welcome to UCSB Robotics Club</Title>
      </HeaderWrapper>
      <Description>
        Here you can learn <FlipBox flipBoxValues={flipBoxValues} />
      </Description>
    </Container>
  )
}
