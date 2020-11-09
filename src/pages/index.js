import React, { Fragment } from "react"
import GlobalStyle from "../styles/globalStyles"
import ProjectSection from "../components/Home/ProjectSection"
import AboutUsSection from "../components/Home/AboutUsSection"

export default function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <AboutUsSection />
      <ProjectSection />
    </Fragment>
  )
}
