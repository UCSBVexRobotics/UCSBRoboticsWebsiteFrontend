import React, { Fragment } from 'react';
import Container from '../global/Container';
import ProjectCircle from './ProjectCircle'
import styled from "styled-components"

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export default function ProjectSection() {
    return (
        <Fragment>
            <Container
                background='dark'
                title='Projects'
            >
                <Section>
                    <ProjectCircle
                        title="Project #1"
                        lead="Lead #1"
                        description="Description"
                    />
                    <ProjectCircle
                        title="Project #1"
                        lead="Lead #1"
                        description="Description"
                    />
                    <ProjectCircle
                        title="Project #1"
                        lead="Lead #1"
                        description="Description"
                    />
                    <ProjectCircle
                        title="Project #1"
                        lead="Lead #1"
                        description="Description"
                    />
                    <ProjectCircle
                        title="Project #1"
                        lead="Lead #1"
                        description="Description"
                    />
                    <ProjectCircle
                        title="Project #1"
                        lead="Lead #1"
                        description="Description"
                    />
                </Section>
            </Container>
        </Fragment>
    );
}