import React from "react"
import ProjectSection from "../components/Home/ProjectSection"
import AboutUsSection from "../components/Home/AboutUsSection"
import IntroSection from "../components/Home/IntroSection"

import Page from "../components/Page"

export default function Home() {
  return (
    <Page>
      <IntroSection />
      <AboutUsSection />
      <ProjectSection />
    </Page>
  )
}
