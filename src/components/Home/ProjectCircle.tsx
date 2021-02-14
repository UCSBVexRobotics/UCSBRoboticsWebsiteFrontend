import React, { useState } from "react"
import styled from "styled-components"

const Circle = styled.span`
  height: 250px;
  width: 250px;
  padding: 3%;
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

const TitleText = styled.h2`
  text-align: center;
`

const LeadText = styled.h3`
  text-align: center;
`

const DescriptionText = styled.h4`
  text-align: center;
`

type Props = {
  description: string
  title: string
  lead: string
}

export default function ProjectCircle({ description, title, lead }: Props) {
  const [hover, setHover] = useState(false)

  return (
    <Circle
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <CenteredText>
          <DescriptionText>{description}</DescriptionText>
        </CenteredText>
      ) : (
        <CenteredText>
          <TitleText>{title}</TitleText>
          <LeadText>{lead}</LeadText>
        </CenteredText>
      )}
    </Circle>
  )
}
