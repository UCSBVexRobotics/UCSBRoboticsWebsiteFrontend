import React, { useState } from "react"
import styled from "styled-components"

const Circle = styled.span`
  height: 250px;
  width: 250px;
  margin: 10px;
  background-color: #007cc7;
  border-radius: 100px;
  display: flex;
  color: #eefbfb;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #005b93;
  }
`

const CenteredText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function ProjectCircle(props) {
  const [hover, setHover] = useState(false)

  return (
    <Circle
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <CenteredText>
          <h4>{props.description}</h4>
        </CenteredText>
      ) : (
        <CenteredText>
          <h2>{props.title}</h2>
          <h3>{props.lead}</h3>
        </CenteredText>
      )}
    </Circle>
  )
}
