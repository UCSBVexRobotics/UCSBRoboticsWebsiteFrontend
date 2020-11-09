import React, { useState } from 'react'
import styled from 'styled-components'

const Circle = styled.span`
    height: 200px;
    width: 200px;
    margin: 10px;
    background-color: #007CC7;
    border-radius: 150px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #005B93;
    }
`;

const CenteredText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export default function ProjectCircle(props) {
    const [hover, setHover] = useState(false);

    return (
        <Circle onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ?
                <CenteredText>
                    <h4>{props.description}</h4>
                </CenteredText> :
                <CenteredText>
                    <h2>{props.title}</h2>
                    <h3>{props.lead}</h3>
                </CenteredText>
            }
        </Circle>
    );
}