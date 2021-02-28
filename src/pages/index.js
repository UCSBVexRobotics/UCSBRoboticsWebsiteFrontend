import React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import ProjectSection from "../components/Home/ProjectSection"
import AboutUsSection from "../components/Home/AboutUsSection"
import IntroSection from "../components/Home/IntroSection"
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const BackgroundContainer = styled.div`
  background-image: linear-gradient(#3DD6FF, #003384)


  `

export default function Home() {
  return (
    <BackgroundContainer>
      <NavBar />
      <GlobalStyle />
      <IntroSection />
      <AboutUsSection />
      <ProjectSection />
      <Footer />
    </BackgroundContainer>
  )
}



