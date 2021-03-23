import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Page from "../components/global/Page"
import Colors from "../styles/Colors"

import { parseMechanical } from "../utils/markdownParser"

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  // padding: 10% 25%;
  padding: 0 25%;
  @media (max-width: 900px) {
    padding: 10% 10%;
  }
`

const Box = styled.div`
  background-color: ${Colors.DateBackgroundColor};
  border-radius: 15px;
  text-align: center;
  flex: 2;
  order: 1;
`

const HeaderContainer = styled.div`
  text-align: center;
`

const MainContainer = styled.div`
  border-radius: 5px;
  width: 100%;
`

const Label = styled.div`
  font-size: 30px;
  color: black;
`

const Header = styled.div`
  color: blue;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding-top: 2%;
`
const CircleContainer = styled.div`
  flex: 2;
  align-items: center;
  width: 100%;
`

const Circle = styled.div`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background-color: ${Colors.BoxBackgroundColor};
  flex: 2;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: black;
`

const Description = styled.div`
  padding-top: 2%;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: black;
  background-color: ${Colors.DateColor};
  padding: 2%;
  margin: 2%;
  border-radius: 5px;
`

const ListContainer = styled.div`
display:flex
flex:1;
align-items:center;
padding:5%;
padding-top:0%;
`

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column-gap: 50px;
  grid-row-gap: 10px;
  padding: 2%;
`
const BulletPoint = styled.div`
  color: black;
  margin: auto;
  margin-bottom: 2px;
  font-size: 16px;
`
const Row = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  align-items: center;
  color: black;
`

const Date = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-size: 12px;
  color: black;
  margin: auto;
`

const Time = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-size: 12px;
  color: black;
  margin: auto;
`
const Link = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-size: 12px;
  color: black;
  margin: auto;
`
const GoalRow = styled.div`
  // margin-bottom:5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 20px;
  margin-top: 2%;
`
const GoalDate = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-size: 16px;
  color: black;
  margin: auto;
  background-color: #66ccff;
  margin: 1%;
  padding: 1%;
  border-radius: 5px;
`

const Goal = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2;
  font-size: 12px;
  text-align: left;
  color: black;
  font-weight: bold;
  margin: auto;
  font-size: 16px;
  background-color: #ffff99;
  border-radius: 5px;
  margin: 1%;
  padding: 1%;
`

const WorkshopGoal = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-size: 12px;
  text-align: left;
  color: black;
  font-weight: bold;
  margin: auto;
  font-size: 16px;
  background-color: #ffff99;
  border-radius: 5px;
  margin: 2%;
  padding: 2%;
`

const WorkshopDate = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-size: 16px;
  color: black;
  margin: auto;
  background-color: ${Colors.LinkColor};
  margin: 2%;
  padding: 2%;
  border-radius: 5px;
`

const WorkshopTime = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-size: 14px;
  color: black;
  margin: auto;
  background-color: #ffdbab;
  border-radius: 5px;
  margin: 2%;
  padding: 2%;
`
const WorkshopLink = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-size: 14px;
  color: black;
  margin: auto;
  background-color: #abffb1;
  border-radius: 5px;
  margin: 2%;
  padding: 2%;
`

const WorkshopRow = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export default function MechTeam({ data }) {
  // console.log(jsonObj)
  const PageData = parseMechanical(data)
  /*  const PageData = {
    Goals: [
      {
        name: "Finish document",
        date: "2/14",
      },
      {
        name: "Group project",
        date: "2/26",
      },
      {
        name: "Team graph",
        date: "2/28",
      },
      {
        name: "Efficiency",
        date: "2/29",
      },
      {
        name: "2000 words",
        date: "2/30",
      },
    ],
    Workshops: [
      {
        name: "Team workshop",
        date: "2/14",
        time: "1:00PM",
        link: "https://zoom.us/",
      },
      {
        name: "Grouping",
        date: "2/26",
        time: "2:00PM",
        link: "https://zoom.us/",
      },
      {
        name: "Brainstorm",
        date: "2/28",
        time: "3:00PM",
        link: "https://zoom.us/",
      },
      {
        name: "Team work",
        date: "2/29",
        time: "4:00PM",
        link: "https://zoom.us/",
      },
      {
        name: "Social",
        date: "2/30",
        time: "5:00PM",
        link: "https://zoom.us/",
      },
    ],
    TeamName: "Mechanical Team",
    Projects: [
      "AI Robot",
      "Motor project",
      "Team efficiency",
      "Movement controls",
      "Team project",
    ],
    Lead: [
      {
        name: "Joe Smith",
        desc: "3rd Year, Data Science",
      },
    ],
  }
*/
  return (
    <Page>
      <PageContainer>
        <MainContainer>
          <HeaderContainer>
            <Header>{PageData.TeamName}</Header>
          </HeaderContainer>
          <BodyContainer>
            <Box>
              <Label>Goals</Label>
              {PageData.Goals.map((goal, i) => {
                return (
                  <GoalRow key={i}>
                    <GoalDate>{goal.date}</GoalDate>
                    <Goal>{goal.name}</Goal>
                  </GoalRow>
                )
              })}
            </Box>

            <Box>
              <Label>Workshops</Label>
              <ListContainer>
                {PageData.Workshops.map((workshop, i) => {
                  return (
                    <WorkshopRow key={i}>
                      <WorkshopGoal>{workshop.name}</WorkshopGoal>
                      <WorkshopDate>{workshop.date}</WorkshopDate>
                      <WorkshopTime>{workshop.time}</WorkshopTime>
                      <WorkshopLink>
                        <a href={workshop.link}>Link</a>
                      </WorkshopLink>
                    </WorkshopRow>
                  )
                })}
              </ListContainer>
            </Box>
          </BodyContainer>
          <BodyContainer>
            <CircleContainer>
              <Circle></Circle>

              <Description>
                {PageData.Lead[0].name} <br></br> {PageData.Lead[0].desc}
              </Description>
            </CircleContainer>
            <Box>
              <Label>Projects</Label>
              <ListContainer>
                {PageData.Projects.map((proj, i) => {
                  return (
                    <Row key={i}>
                      <BulletPoint>
                        <li></li>
                      </BulletPoint>
                      <Goal>{proj}</Goal>
                    </Row>
                  )
                })}
              </ListContainer>
            </Box>
          </BodyContainer>
        </MainContainer>
      </PageContainer>
    </Page>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
      rawMarkdownBody
      fileAbsolutePath
    }
  }
`
