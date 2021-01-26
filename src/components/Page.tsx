import React from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import GlobalStyle from "../styles/globalStyles"

const BackgroundContainer = styled.div`
  background-image: linear-gradient(#3dd6ff, #003384);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Content = styled.div`
  padding-top: 5%;
`

export default function Page({ children }) {
  return (
    <BackgroundContainer>
      <GlobalStyle />
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </BackgroundContainer>
  )
}
