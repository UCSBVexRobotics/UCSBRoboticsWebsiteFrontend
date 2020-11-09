import React, { Fragment } from "react"
import GlobalStyle from "../styles/globalStyles"
import ProjectSection from "../components/Home/ProjectSection"
import AboutUsSection from "../components/Home/AboutUsSection"
import IntroSection from "../components/Home/IntroSection"
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <IntroSection />
      <AboutUsSection />
      <ProjectSection />
    </Fragment>
  )
}
