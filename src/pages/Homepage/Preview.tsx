import React from "react";
import styled, { css } from "styled-components";

const Section = styled.div`
    margin: 0;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.span`
    width: 80vw;
    height: 90%;
    background: gray;
    
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
`

export default function Preview({children}) {
    return <Section>
        <Content>{children}</Content>
    </Section>;
}