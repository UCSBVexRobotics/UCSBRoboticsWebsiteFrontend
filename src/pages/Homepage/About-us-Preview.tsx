import React from "react"
import styled, { css } from "styled-components"
import Preview from "./Preview"
import Img from "../../../static/about-us.jpg"
import Button from "../Button"

const Info = styled.div`
  // background: green;
  // flex-basis: 50%;
  // order: 1;
`

const Title = styled.h1`
  font-size: 3vw;
`

const Text = styled.p`
  font-size: 1.5vw;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  min-width: 300px;
`
const ImageWrapper = styled.div`
  background: red;
  height: 100%;
  order: 2;

  display: flex;
  flex-basis: 50%;
  align-content: stretch;
  justify-content: stretch;
`

export default function About_us_Preview() {
  return (
    <Preview>
      <Info>
        <Title>About Us</Title>
        <Text>
          We participate in several competitions, educational outreach programs
          and member-initied projects.{" "}
        </Text>
        <Button link="about-us">Learn More</Button>
      </Info>
      <ImageWrapper>
        <Image src={Img} />
      </ImageWrapper>
    </Preview>
  )
}
