import React from "react"
import Header from "./Header";
import Footer from "./Footer";

import Intro_Preview from "./Homepage/Intro-Preview";
import About_us_Preview from "./Homepage/About-us-Preview";
import Projects_Preview from "./Homepage/Projects-Preview";
import Calendar_Preview from "./Homepage/Calendar-Preview";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Intro_Preview />
      <About_us_Preview />
      <Projects_Preview />
      <Calendar_Preview />
      <Footer />
    </div>
  );
}
