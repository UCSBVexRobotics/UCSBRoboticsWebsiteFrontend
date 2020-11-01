import React from "react";
import styled, { css } from "styled-components";
import Preview from "./Preview";
import Img from  "../../../static/about-us.jpg"
import Button from "../Button";

const Content_Area = styled.span`
    display: flex;
    height: inherit;
`
const Info = styled.div`
    width: 50%;
`

const Title = styled.h1`
    font-size: 3vw;
`
const Text = styled.p`
    font-size: 1.5vw;
`

const Image = styled.img`
    height: inherit;
`

export default function About_us_Preview() {
    return <Preview col="stripe2">
        <Content_Area>
            <Info>
                <Title>About Us</Title>
                <Text>We participate in several competitions, educational outreach programs and member-initied projects.</Text>
                <center><Button link="about-us">Learn More</Button></center>
            </Info>
            <Image src={Img} />
        </Content_Area>
    </Preview>
}