import React, { useState, useEffect } from "react"
import HomeContainer from "./HomeContainer"
import styled from "styled-components"
import FlipBox from "../Home/FlipBox"

import LogoCircle from "../../../static/logoCircle.png"
import carImage from "../../../static/car.svg"

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 1100px) {
    flex-orientation: column;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Img = styled.img`
  width: 160px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-orientation: column;
  flex-wrap: wrap;
  margin-left: 20px;
`

const Title = styled.h1`
  font-weight: lighter;
  color: #eefbfb;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 70px;

  @media (max-width: 1550px) {
    font-size: 50px;
  }

  @media (max-width: 1100px) {
    text-align: center;
  }

  @media (max-width: 880px) {
    font-size: 40px;
  }
`

const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 895px) {
    flex-orientation: column;
    flex-wrap: wrap;
  }
`

const Description = styled.h2`
  color: white;
  display: flex;
  align-items: center;
  margin: 0;

  @media (max-width: 570px) {
    text-align: center;
  }
`

export default function IntroSection() {
  //Array for the Flipbox
  const flipBoxValues = ["robotics", "coding", "mechanics"]

  return (
    <HomeContainer introSection={true}>
      <HeaderWrapper>
        <Img src={LogoCircle} />
        <TextWrapper>
          <Title>Welcome to UCSB Robotics Club</Title>
          <DescriptionWrapper>
            <Description>Here you can learn</Description>
            <FlipBox flipBoxValues={flipBoxValues} />
          </DescriptionWrapper>
        </TextWrapper>
      </HeaderWrapper>
    </HomeContainer>
  )
}
