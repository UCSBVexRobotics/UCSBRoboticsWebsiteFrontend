import React from "react";
import styled, { css } from "styled-components";

const Section = styled.div`
    height: 450px;
    margin: 0;
    padding: 0 350px;
`

export default function Preview({col, children}) {
    if (col == "stripe1") {
        col = "#FDFDFF"
    }
    else if (col == "stripe2") {
        col = "#4DA8DA"
    }

    return <Section style={{backgroundColor: col}}>
        {children}
    </Section>;
}