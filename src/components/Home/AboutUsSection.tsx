import React, { useState, useEffect } from "react"
import HomeContainer from "../global/HomeContainer"
import styled from "styled-components"

import background from "../../../static/background_transparent.svg";
import car from "../../../static/car.svg";

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
  perspective: 1000px;
  width: 300px;
  height: 250px;
`

const Img = styled.img`
  width: 300px;
`

const ImgBox = styled.div`
/*  &:hover {
    transform: rotateY(180deg);
  }*/
  transform: rotateY(${props => (props.flip ? 180 : 0)}deg); 

  width: 300px;
  height: 250px;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  position: relative;
`

const BoxFront = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

const BoxBack = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg) translate(0, -200px);
`

export default function AboutUsSection() {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFlip(!flip);
    }, 15000)

    return () => {
      clearInterval(timer)
    }
  }, [flip])

  return (
    <HomeContainer background="light" title="About Us" titleAlignment="left">
      <Section>
        <Text>
          The Robotics Club at UCSB is a project-oriented club composed of
          students interested in the many fields related to robotics, and we
          normally would participate in the{" "}
          <HighlightedText>VEX Robotics Competition</HighlightedText>. Due to
          the uncertainty caused by the pandemic, we will not compete this year
          and have shifted our goal to creating{" "}
          <HighlightedText>three technical skill tracks</HighlightedText> for
          the development of our members' engineering experiences! We also have
          a <HighlightedText>web design project</HighlightedText> for members
          interested in a self-motivated collaboration experience.
        </Text>
        <ImgWrapper>
          <ImgBox flip={flip}>
            <BoxFront>
              <Img src={background} />
            </BoxFront>
            <BoxBack>
              <Img src={car} />
            </BoxBack>
          </ImgBox>
        </ImgWrapper>
      </Section>
    </HomeContainer>
  )
}
