import React, { Fragment } from "react"
import GlobalStyle from '../styles/globalStyles';
import AboutUs from '../components/Home/AboutUs';
import ProjectSection from '../components/Home/ProjectSection';

export default function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <ProjectSection />
      <AboutUs />
    </Fragment>
  );

}
