import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10% 20%;

  background-color: ${props => props.background === 'dark' ? "#12232E" : "white"}
`;

const ProjectTitle = styled.h1`
    margin-right: auto;

    color: ${props => props.color === 'dark' ? "white" : "#12232E" }
`;

const Line = styled.div`
    border-bottom: solid 3px white;
    border-top-width: 0px;

    animation-name: ${props => props.startLineAnimation ? "lineGrow" : ""}

    @keyframes lineGrow {
      from {
        width: 0%;
      } to {
        width: 50%;
      }
    }
`;

export default function Container(props) {
  const [lineAnimation, setLineAnimation] = useState(false);

  return (
    <Box
      children={props.children}
      background={props.background}
    >
      <ProjectTitle 
        onClick={() => setLineAnimation(true)} 
        color={props.background}
      >
        {props.title}
      </ProjectTitle>
      <Line
        startLineAnimation={lineAnimation}
      />
      {props.children}
    </Box>);
}
