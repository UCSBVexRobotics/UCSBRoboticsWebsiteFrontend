import React from "react";
import styled, { css } from "styled-components";
import Logo from "../../../static/logo.png";
import Button from "../Button";
import Preview from "./Preview";

const TitleArea = styled.span`
  display: flex;
  padding: 0 200px;
`
const Img = styled.img`
  height: 100px;
  background: #E8E8E8; 
  align-self: center;
` // keeps aspect ratio

const Title = styled.h1`
  width: 500px;
  margin: 0 0 0 10px;
  align-self: center;
  font-size: 3vw;
`
const Text = styled.p`
  font-size: 1.5vw;
  padding: 0 200px;
`

export default function Intro_Preview() {
    return <Preview col="stripe1">
        <TitleArea>
            <Img src={Logo} />
            <Title>Welcome To UCSB Robotics Club</Title>
        </TitleArea>
        <Text>
            Developing technical skills through project based learning. 
        </Text>
        <center><Button link="about-us">Join Us!</Button></center>
    </Preview>
}