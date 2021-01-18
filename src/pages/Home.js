import React, { Fragment } from "react"
import ProjectSection from "../components/Home/ProjectSection"
import AboutUsSection from "../components/Home/AboutUsSection"
import IntroSection from "../components/Home/IntroSection"

export default function Home() {
  return (
    <Fragment>
      <IntroSection />
      <AboutUsSection />
      <ProjectSection />
    </Fragment>
  )
}