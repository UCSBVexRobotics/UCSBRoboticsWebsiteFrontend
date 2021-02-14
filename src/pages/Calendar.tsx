import React, { useEffect } from "react"
import styled from "styled-components"
import Page from "../components/global/Page"

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`

export default function Calendar() {
  useEffect(() => {
    fetch("roboticswebsite.azurewebsites.net/api/Account/GetAccounts", {
      method: "GET",
      headers: {
        "content-encoding": "gzip",
        "content-type": "application/json; charset=utf-8",
        server: "Microsoft-IIS/10.0",
        "transfer-encoding": "chunked",
        vary: "Accept-Encoding",
        "x-powered-by": "ASP.NET",
      },
    })
      .then(response => console.log(response))
      .catch(err => console.log(err))
  })

  return (
    <Page>
      <PageContainer>
        <h1>Test</h1>
      </PageContainer>
    </Page>
  )
}
