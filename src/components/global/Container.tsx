import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10% 20%;

  background-color: ${props =>
    props.background === "dark" ? "#12232E" : "white"};
`

const ProjectTitle = styled.h1`
  color: white;
  margin-right: auto;
  width: 100%;
`

const Line = styled.div`
  border-bottom: solid 3px white;
  border-top-width: 0px;
  margin-right: auto;

  transition: width 0.5s;

  width: ${props => (props.lineAnimation ? "200px" : "100px")};
`

export default function Container(props) {
  const [lineAnimation, setLineAnimation] = useState(false)

  return (
    <Box background={props.background}>
      <ProjectTitle
        onMouseEnter={() => setLineAnimation(true)}
        onMouseLeave={() => setLineAnimation(false)}
      >
        {props.title}
      </ProjectTitle>
      <Line lineAnimation={lineAnimation} />
      {props.children}
    </Box>
  )
}
