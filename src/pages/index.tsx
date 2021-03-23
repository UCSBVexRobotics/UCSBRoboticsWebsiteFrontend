import React from "react"
import ProjectSection from "../components/Home/ProjectSection"
import AboutUsSection from "../components/Home/AboutUsSection"
import IntroSection from "../components/Home/IntroSection"
import Connected from "../components/Home/Connected"

import Page from "../components/global/Page"

export default function Home() {
  return (
    <Page>
      <IntroSection />
      <AboutUsSection />
      <ProjectSection />
      <Connected />
    </Page>
  )
}
