import React, { useState } from "react"
import styled from "styled-components"

import Colors from "../../styles/colors"
import DesignImage from "../../../static/HomePage_Connected_Design.svg"

import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle"
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle"
import { MailWithCircle } from "@styled-icons/entypo-social/MailWithCircle"
import { GithubWithCircle } from "@styled-icons/entypo-social/GithubWithCircle"

const Container = styled.div`
  background-color: ${Colors.BACKGROUND_DARK};
  width: 100%;
  margin: 0;
  display: flex;
`

const Design = styled.div`
  width: 15%;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: ${({ num }: { num: number }) =>
    num === 0 ? "flex-start" : "flex-end"};
`

const Center = styled.div`
  width: 70%;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.h1`
  color: white;
  white-space: nowrap;
  margin: 0;
  padding: 0;
`

const Highlighted = styled.h1`
  color: ${({ col }: { col: string }) => col};
  white-space: nowrap;
  margin: 0;
  padding: 0;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const IconContainer = styled.div`
  margin-top: 2%;
  display: flex;
  width: 40%;
  justify-content: space-evenly;
`

export default function Connected() {
  const [fbHover, setFbHover] = useState(false)
  const [instaHover, setInstaHover] = useState(false)
  const [mailHover, setMailHover] = useState(false)
  const [gitHover, setGitHover] = useState(false)

  return (
    <Container>
      <Design num={0}>
        <img src={DesignImage} width="75%" />
      </Design>
      <Center>
        <TextContainer>
          <Text>Let's stay</Text>
          <div>&nbsp;&nbsp;</div>
          <Highlighted col={Colors.HIGHLIGHT_TEXT_DARK}>connected</Highlighted>
          <Text>!</Text>
        </TextContainer>
        <TextContainer>
          <Text>Join our</Text>
          <div>&nbsp;&nbsp;</div>
          <Highlighted col={Colors.HIGHLIGHT_TEXT_LIGHT}>
            community of engineers
          </Highlighted>
          <Text>.</Text>
        </TextContainer>

        <IconContainer>
          <a href="">
            <FacebookWithCircle
              size={fbHover ? "100px" : "74px"}
              style={{ padding: fbHover ? "0" : "13px" }}
              color="white"
              onMouseOver={() => {
                setFbHover(true)
              }}
              onMouseOut={() => {
                setFbHover(false)
              }}
            />
          </a>
          <a href="">
            <InstagramWithCircle
              size={instaHover ? "100px" : "74px"}
              style={{ padding: instaHover ? "0" : "13px" }}
              color="white"
              onMouseOver={() => {
                setInstaHover(true)
              }}
              onMouseOut={() => {
                setInstaHover(false)
              }}
            />
          </a>
          <a href="">
            <MailWithCircle
              size={mailHover ? "100px" : "74px"}
              style={{ padding: mailHover ? "0" : "13px" }}
              color="white"
              onMouseOver={() => {
                setMailHover(true)
              }}
              onMouseOut={() => {
                setMailHover(false)
              }}
            />
          </a>
          <a href="">
            <GithubWithCircle
              size={gitHover ? "100px" : "74px"}
              style={{ padding: gitHover ? "0" : "13px" }}
              color="white"
              onMouseOver={() => {
                setGitHover(true)
              }}
              onMouseOut={() => {
                setGitHover(false)
              }}
            />
          </a>
        </IconContainer>
      </Center>
      <Design num={1}>
        <img
          src={DesignImage}
          width="75%"
          style={{ transform: "rotate(180deg);" }}
        />
      </Design>
    </Container>
  )
}
