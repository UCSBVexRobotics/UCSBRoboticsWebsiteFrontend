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
          will normally would participate in the{" "}
          <HighlightedText>VEX Robotics Competition</HighlightedText>. Due to
          the uncertainty caused by the pandemic, we will not compete this year
          and have shifted our goal to creating{" "}
          <HighlightedText>three technical skill tracks</HighlightedText> for
          the development of our members' engineering experiences! We also have
          a <HighlightedText>web design project</HighlightedText> for members
          interested in a self-motivated collaboration experience.
        </Text>
        <ImgWrapper>
          <Img src={picOne} alt="Group picture of the Robotics Team" />
        </ImgWrapper>
      </Section>
    </HomeContainer>
  )
}
