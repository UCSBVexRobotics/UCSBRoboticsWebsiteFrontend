import React, { Fragment } from 'react';
import Container from '../global/Container';
import styled from "styled-components"

import image from "../../../static/about-us.jpg";

const Section = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

const Text = styled.h3`
    color: #12232E;
`
const Img = styled.img`
    width: 50%;
`

export default function AboutSection() {
    return (
        <Fragment>
            <Container
                background="light"
                title="About Us"
            >
                <Section>
                    <Text>
                        Here is a little bit about us. We are a club that does robotics.
                    </Text>
                    <Img src={image} />
                </Section>
            </Container>
        </Fragment>
    );
}