import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: ${props => (props.introSection ? "10% 25%" : "5% 25%")};
  padding-bottom: ${props => (props.introSection ? "5%" : "10%")};
  @media (max-width: 710px) {
    padding: 5% 10%;
  }

  background-size: cover;
`

const HeaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.titleAlignment === "left" ? "flex-start" : "flex-end"};
`

const LightProjectTitle = styled.h1`
  color: #003384;
`

const DarkProjectTitle = styled.h1`
  color: #eefbfb;
`

const Line = styled.div`
  border-bottom: solid 3px;
  border-color: ${props => (props.color === "light" ? "#003384" : "white")};
  border-top-width: 0px;
  transition: width 0.5s;

  width: ${props => (props.lineAnimation ? "200px" : "100px")};
`

export default function HomeContainer(props) {
  const [lineAnimation, setLineAnimation] = useState(false)

  //TODO add in the line animation when user scrolls into the view

  return (
    <Box background={props.background} introSection={props.introSection}>
      <HeaderContainer titleAlignment={props.titleAlignment}>
        {props.background === "light" ? (
          <LightProjectTitle
            onMouseEnter={() => setLineAnimation(true)}
            onMouseLeave={() => setLineAnimation(false)}
          >
            {props.title}
          </LightProjectTitle>
        ) : (
          <DarkProjectTitle
            onMouseEnter={() => setLineAnimation(true)}
            onMouseLeave={() => setLineAnimation(false)}
          >
            {props.title}
          </DarkProjectTitle>
        )}
        {props.title && (
          <Line color={props.background} lineAnimation={lineAnimation} />
        )}
      </HeaderContainer>
      {props.children}
    </Box>
  )
}
