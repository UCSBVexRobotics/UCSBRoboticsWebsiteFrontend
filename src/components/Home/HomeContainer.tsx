import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div<{ introSection: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: ${({ introSection }) => (introSection ? "10% 25%" : "5% 25%")};
  padding-bottom: ${({ introSection }) => (introSection ? "5%" : "10%")};
  @media (max-width: 710px) {
    padding: 5% 10%;
  }

  background-size: cover;
`

const HeaderContainer = styled.div<{ titleAlignment: "left" | "right" }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ titleAlignment }) =>
    titleAlignment === "left" ? "flex-start" : "flex-end"};
`

const LightProjectTitle = styled.h1`
  color: #003384;
`

const DarkProjectTitle = styled.h1`
  color: #eefbfb;
`

const Line = styled.div<{ color: string; lineAnimation: boolean }>`
  border-bottom: solid 3px;
  border-color: ${({ color }) => (color === "light" ? "#003384" : "white")};
  border-top-width: 0px;
  transition: width 0.5s;

  width: ${({ lineAnimation }) => (lineAnimation ? "200px" : "100px")};
`

/* 
  I made some of these optional b/c it still works if you don't pass everything
    > I don't really know how this works....
*/
type Props = {
  introSection?: boolean
  titleAlignment?: "left" | "right"
  title?: string
  background?: string
  children: JSX.Element[] | JSX.Element
}

export default function HomeContainer({
  introSection,
  titleAlignment,
  title,
  background,
  children,
}: Props) {
  const [lineAnimation, setLineAnimation] = useState(false)

  //TODO add in the line animation when user scrolls into the view
  // background={props.background}
  return (
    <Box introSection={introSection}>
      <HeaderContainer titleAlignment={titleAlignment}>
        {background === "light" ? (
          <LightProjectTitle
            onMouseEnter={() => setLineAnimation(true)}
            onMouseLeave={() => setLineAnimation(false)}
          >
            {title}
          </LightProjectTitle>
        ) : (
          <DarkProjectTitle
            onMouseEnter={() => setLineAnimation(true)}
            onMouseLeave={() => setLineAnimation(false)}
          >
            {title}
          </DarkProjectTitle>
        )}
        {title && <Line color={background} lineAnimation={lineAnimation} />}
      </HeaderContainer>
      {children}
    </Box>
  )
}
