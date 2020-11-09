import React from "react"
import Header from "./Header";
import Footer from "./Footer";

import Intro_Preview from "./Homepage/Intro-Preview";
import About_us_Preview from "./Homepage/About-us-Preview";
import Projects_Preview from "./Homepage/Projects-Preview";
import Calendar_Preview from "./Homepage/Calendar-Preview";

import ProjectSection from "../components/Home/ProjectSection";

import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Verdana, Arial, sans-serif;
    height: 100%;
  }
`

const Wrapper = styled.div`
  &>:nth-child(even) {
    background-color: #FDFDFF;
  }

  &>:nth-child(odd) {
    background-color: #4DA8DA;
  }
`

export default function HomePage() {
  return (
    <Wrapper>
      <GlobalStyle />
      <About_us_Preview />
      <About_us_Preview />
      <ProjectSection />
    </Wrapper>
  );
}

/*
<Header />
      <Intro_Preview />
      <About_us_Preview />
      <Projects_Preview />
      <Calendar_Preview />
      <Footer />
*/