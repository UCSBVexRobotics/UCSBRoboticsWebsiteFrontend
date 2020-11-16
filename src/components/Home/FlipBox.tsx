import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Text = styled.h2`
  color: #eefbfb;
  margin: 0;
  margin-left: 8px;
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

  return <Text>{currentVal}</Text>
}
