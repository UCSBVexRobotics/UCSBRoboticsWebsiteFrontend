import React, { useState } from "react"
import styled from "styled-components"
import CarPic from "../../../static/car.jpg"

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: ${props => (props.introSection ? "10% 25%" : "5% 25%")};

  background-color: ${props =>
    props.background === "dark" ? "#12232E" : "#DEF7F7"};

  background-image: ${props =>
    props.introSection ? `URL(${CarPic})` : "none"};
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
  background: -webkit-linear-gradient(#4da8da, #203647);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DarkProjectTitle = styled.h1`
  background: -webkit-linear-gradient(white, #4da8da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Line = styled.div`
  border-bottom: solid 3px;
  border-color: ${props => (props.color === "light" ? "#12232E" : "white")};
  border-top-width: 0px;
  transition: width 0.5s;

  width: ${props => (props.lineAnimation ? "200px" : "100px")};
`

export default function Container(props) {
  const [lineAnimation, setLineAnimation] = useState(false)

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
