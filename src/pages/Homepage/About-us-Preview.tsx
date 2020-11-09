import React from "react";
import styled, { css } from "styled-components";
import Preview from "./Preview";
import Img from  "../../../static/about-us.jpg"
import Button from "../Button";
import Container from '../../components/global/Container';

const Info = styled.div`
    order: 1;
    background: green;
    width: 500px;
`

const Title = styled.h1`
    font-size: 3vw;
`

const Text = styled.p`
    font-size: 1.5vw;
`

const Image = styled.img`
    min-width: 300px;
    width: 100%;
    height: auto;
`
const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export default function About_us_Preview() {
    return (
    <Container 
        background='dark' 
        title='About Us'
    >   
        <Section>
            <Text>We participate in several competitions, educational outreach programs and member-initied projects. </Text>
            <Button link="about-us">Learn More</Button>
        
            <Image src={Img} />
        </Section>

    </Container>
    );
}