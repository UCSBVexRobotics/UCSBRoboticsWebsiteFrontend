import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10% 25%;

  background-color: ${props =>
    props.background === "dark" ? "#12232E" : "#DEF7F7"};
`

const HeaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.titleAlignment === "left" ? "flex-start" : "flex-end"};
`

const ProjectTitle = styled.h1`
  color: ${props => (props.color === "light" ? "#12232E" : "white")};
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
    <Box background={props.background}>
      <HeaderContainer titleAlignment={props.titleAlignment}>
        <ProjectTitle
          color={props.background}
          onMouseEnter={() => setLineAnimation(true)}
          onMouseLeave={() => setLineAnimation(false)}
        >
          {props.title}
        </ProjectTitle>
        <Line color={props.background} lineAnimation={lineAnimation} />
      </HeaderContainer>
      {props.children}
    </Box>
  )
}
