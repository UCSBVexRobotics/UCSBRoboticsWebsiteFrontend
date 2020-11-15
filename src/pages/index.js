import React, { Fragment } from "react"
import GlobalStyle from '../styles/globalStyles';
import ProjectSection from '../components/Home/ProjectSection';
import AboutSection from '../components/Home/AboutSection'

export default function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <AboutSection />
      <ProjectSection />
    </Fragment>
  );

}
