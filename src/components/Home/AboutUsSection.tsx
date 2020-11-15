import React from "react"
import HomeContainer from "../global/HomeContainer"
import styled from "styled-components"
import picOne from "../../../static/pic1.jpg"

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  @media (max-width: 1490px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const Text = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  color: #eefbfb;
  @media (max-width: 1490px) {
    order: 2;
    margin-top: 20px;
  }
`

const HighlightedText = styled.span`
  color: #3dd6ff;
`

const ImgWrapper = styled.div`
  @media (max-width: 1490px) {
    order: 1;
  }
  margin-left: 20px;
`

const Img = styled.img`
  width: 300px;
`

export default function AboutUsSection() {
  return (
    <HomeContainer background="light" title="About Us" titleAlignment="left">
      <Section>
        <Text>
          The Robotics Club at UCSB is a project-oriented club composed of
          students interested in the many fields related to robotics, and we
          will be doing the{" "}
          <HighlightedText>VEX Robotics Competition</HighlightedText> this year.
          We participate in several competitions throughout the year, as well as
          volunteer work, educational outreach programs, and working on other
          member-initiated projects. Students of all majors and skill levels
          with an interest in learning more about robotics are strongly
          encouraged to join and participate in the activities held throughout
          the year!
        </Text>
        <ImgWrapper>
          <Img src={picOne} alt="Group picture of the Robotics Team" />
        </ImgWrapper>
      </Section>
    </HomeContainer>
  )
}
