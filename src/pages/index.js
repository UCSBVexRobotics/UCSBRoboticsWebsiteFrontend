import React, { Fragment } from "react"
import GlobalStyle from "../styles/globalStyles"
import ProjectSection from "../components/Home/ProjectSection"

export default function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <ProjectSection />
    </Fragment>
  )
}
