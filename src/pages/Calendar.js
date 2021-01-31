import React, { useState, useEffect } from "react"
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

export default function Calendar() {

  // useEffect(() => {
  //   fetch("roboticswebsite.azurewebsites.net/api/Account/GetAccounts", {
  //     "method": "GET",
  //     "headers": {
  //       "content-encoding": "gzip",
  //       "content-type": "application/json; charset=utf-8",
  //       "server": "Microsoft-IIS/10.0",
  //       "transfer-encoding": "chunked",
  //       "vary": "Accept-Encoding",
  //       "x-powered-by": "ASP.NET"
  //     }
  //   })
  //     .then(response => console.log(response))
  //     .catch(err => console.log(err));
  // })

  return (
    <BackgroundContainer>
      <NavBar />
      <GlobalStyle />
      <PageContainer>
        <h1>Test</h1>

      </PageContainer>
    </BackgroundContainer>
  )
}
