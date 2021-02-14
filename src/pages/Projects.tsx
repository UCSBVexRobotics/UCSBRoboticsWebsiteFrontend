import React from "react"
import styled from "styled-components"
import Page from "../components/global/Page"

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`

export default function Projects() {
  return (
    <Page>
      <PageContainer>
        <h1>Projects</h1>
      </PageContainer>
    </Page>
  )
}
