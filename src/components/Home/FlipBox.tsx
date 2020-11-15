import React, { useEffect, useState } from "react"
import styled from "styled-components"

const FlipBoxContainer = styled.div`
  background-color: transparent;
  margin-left: 8px;
  height: 50px;
`
const FlipBoxCard = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Text = styled.h4`
  color: white;
  margin: 0;
  position: absolute;
`

export default function FlipBox(props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    //every 1.5s, change the word displayed in the flipBox
    const timer = window.setInterval(() => {
      if (index == props.flipBoxValues.length - 1) setIndex(0)
      else setIndex(index + 1)
    }, 1500)

    return () => {
      clearInterval(timer)
    }
  }, [index])

  //Set the value of the text
  const currentVal = props.flipBoxValues[index]

  return (
    <FlipBoxContainer>
      <FlipBoxCard>
        <Text>{currentVal}</Text>
      </FlipBoxCard>
    </FlipBoxContainer>
  )
}
