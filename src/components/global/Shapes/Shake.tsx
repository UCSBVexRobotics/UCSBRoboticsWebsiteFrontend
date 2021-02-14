import React, { useState, useEffect } from "react"
import styled from "styled-components"

const ShakeArea = styled.div<{ shake: boolean }>`
  animation: ${({ shake }) => (shake ? "shake" : "")} 1.5s
    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`
type Props = {
  children: JSX.Element | JSX.Element[]
  time: string
}

export default function Shake({ children, time }: Props) {
  const [shake, setShake] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShake(!shake)
    }, time)

    return () => {
      clearInterval(timer)
    }
  }, [shake])

  return <ShakeArea shake={shake}>{children}</ShakeArea>
}
