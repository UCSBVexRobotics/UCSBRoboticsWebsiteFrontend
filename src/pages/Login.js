import React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import NavBar from '../components/NavBar';

const BackgroundContainer = styled.div`
  height: 200vh;
  width: 100vw;
  background-image: linear-gradient(#3dd6ff, #003384);
`

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  padding: 10% 25%;
`

export default function Login() {
    return (
        <BackgroundContainer>
            <NavBar />
            <GlobalStyle />
            <PageContainer>
                <h1>Login</h1>
            </PageContainer>
        </BackgroundContainer>
    )
}
