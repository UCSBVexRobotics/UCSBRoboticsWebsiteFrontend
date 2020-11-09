import React from "react"
import styled, { css } from "styled-components"

const Section = styled.div`
  margin: 0;
  height: 50vh;
  padding: 5%; //added

  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  //   width: 80vw;
  //   height: 90%;
  //   background: gray;

  display: flex;
  align-items: center;
  justify-content: center;
  //   flex-wrap: wrap;
  //   flex-flow: row wrap;
  //   justify-content: flex-start;
`

export default function Preview({ children }) {
  return (
    <Section>
      <Content>{children}</Content>
    </Section>
  )
}
