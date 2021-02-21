import React from "react"
import styled from "styled-components"
import Page from "../components/global/Page"

import Button from "../components/global/Button"

import { Email } from "@styled-icons/material/Email"
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare"

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`

const Content = styled.div`
  width: 600px;
  background-color: #2e428f;
  padding: 30px;
  border-radius: 25px;

  & > * {
    margin: 10px;
  }
`

const Title = styled.h2`
  text-align: center;
`

const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LinkText = styled.p`
  margin: 0;
`

const Address = styled.div`
  margin-top: 40px;
`

const AddressLine = styled.p`
  margin: 0;
  user-select: text;
`

const Edit = styled.input.attrs(props => ({
  type: "text",
  contenteditable: "true", // this doesn't work
}))`
  width: 100%;

  border-radius: 7px;
  border: 0;
  margin: 3px;

  font-size: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`

export default function Contact() {
  return (
    <Page>
      <PageContainer>
        <Content>
          <Title>Contact Us</Title>
          <LinkContainer href="mailto:roboticsclubucsb@gmail.com">
            <Email size="40px" />
            <LinkText>roboticsclubucsb@gmail.com</LinkText>
          </LinkContainer>
          <LinkContainer href="mailto:Stephen.Lantin@gmail.com">
            <Email size="40px" />
            <LinkText>Corporate Outreach Chair</LinkText>
          </LinkContainer>
          <LinkContainer href="https://www.facebook.com/ucsbroboticsclub">
            <FacebookSquare size="40px" />
            <LinkText>Follow us on Facebook</LinkText>
          </LinkContainer>
          <Title>Suggestions</Title>
          <Edit />
          <Edit />
          <Button text="Send" primaryColor="red" secondaryColor="white" />
          <Address>
            <AddressLine>UCSB Robotics Club</AddressLine>
            <AddressLine>UC Santa Barbara</AddressLine>
            <AddressLine>Santa Barbara, CA 93106</AddressLine>
          </Address>
        </Content>
      </PageContainer>
    </Page>
  )
}
