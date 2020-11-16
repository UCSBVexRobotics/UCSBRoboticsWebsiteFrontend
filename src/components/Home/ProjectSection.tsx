import React from "react"
import HomeContainer from "../global/HomeContainer"
import ProjectCircle from "./ProjectCircle"
import styled from "styled-components"

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 5%;
`

export default function ProjectSection() {
  return (
    <HomeContainer
      background="dark"
      title="Current Projects"
      titleAlignment="right"
    >
      <Section>
        <ProjectCircle
          title="Electrical Team"
          lead="Edward Liu & Rahul Varghese"
          description="Goals: Learn and build logic gates, simulate circuits in LTSpice"
        />
        <ProjectCircle
          title="Mechanical Team"
          lead="Rafee Q & Steven Man"
          description="Goals: Learn how to use CAD Solidworks, extended extrusion tools, and engineering drawings 
          Projects: Crane Claw CAD and Slingshot Turret CAD"
        />
        <ProjectCircle
          title="Software Team"
          lead="Alex Mei"
          description="Goals: 5 Workshops Series from the Basics to OOP, Short Tag-Team Projects with Robotics Applications, and a Multi-Phase Vex
          Simulation Group Project"
        />
        <ProjectCircle
          title="Web Design Team"
          lead="Angela Chen & Nina Huang"
          description="Goals: Build/redesign Robotics Club website using ASP.net and Gatsby"
        />
      </Section>
    </HomeContainer>
  )
}
