import React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import NavBar from '../components/NavBar';

import Colors from "../styles/Colors"

const BackgroundContainer = styled.div`
  height: 200vh;
  width: 100vw;
  background-image: linear-gradient(#3dd6ff, #003384);
`

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  padding: 10% 25%;

  @media (max-width: 900px) {
    padding: 10% 10%;
  }
  
`








const Box = styled.div`
background-color: ${Colors.DateBackgroundColor};

border-radius:15px;
text-align:center;
flex:2;
order:1;
`



const HeaderContainer = styled.div`
text-align: center;
`

const MainContainer = styled.div`
border-radius:5px;
width:100%;
`

const Label  = styled.div`
font-size:30px;
color:black;
`
// 

const Header = styled.div`
color:blue;
font-size:30px;
text-align:center;
font-weight:bold;
padding-top:2%;
`
const CircleContainer = styled.div`
flex:2;
align-items:center;
width:100%;
`

const Circle = styled.div`
width: 10vw;
height: 10vw;
border-radius: 50%;
background-color: ${Colors.BoxBackgroundColor};
flex:2;
margin-left:auto;
margin-right:auto;
text-align:center;
color:black;
`

const Description = styled.div`
padding-top:2%;
font-size:20px;
margin-left: auto;
margin-right: auto;
text-align:center;
color:black;
background-color:${Colors.DateColor};
padding:2%;
margin:2%;
border-radius:5px;
`

const ListContainer = styled.div`
display:flex
flex:1;

align-items:center;

padding:5%;
padding-top:0%;
`


const BodyContainer = styled.div`
display:flex;
justify-content:space-between;
grid-column-gap: 50px;
grid-row-gap: 10px;
padding:2%;
`
const BulletPoint = styled.div`
color:black;
margin:auto;
margin-bottom:2px;
font-size:16px;

`
const Row = styled.div`
margin-bottom:5px;
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
align-items:center;
color:black;

`


const Date = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
font-size:12px;
color:black;
margin:auto;
`

const Time = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
font-size:12px;
color:black;
margin:auto;
`
const Link = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
font-size:12px;
color:black;
margin:auto;
`
const GoalRow = styled.div`
// margin-bottom:5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-left:2%;
margin-right:2%;
font-size:20px;
margin-top:2%;
`
const GoalDate = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
font-size:16px;
color:black;
margin:auto;
background-color:#66ccff;
margin:1%;
padding:1%;
border-radius:5px;
`

const Goal = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 2;
font-size:12px;
text-align:left;
color:black;
font-weight:bold;
margin:auto;
font-size:16px;
background-color:#ffff99;
border-radius:5px;
margin:1%;
padding:1%;
` 

const WorkshopGoal = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
font-size:12px;
text-align:left;
color:black;
font-weight:bold;
margin:auto;
font-size:16px;
background-color:#ffff99;
border-radius:5px;
margin:2%;
padding:2%;
` 

const WorkshopDate = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
font-size:16px;
color:black;
margin:auto;
background-color:${Colors.LinkColor};
margin:2%;
padding:2%;
border-radius:5px;
`

const WorkshopTime = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
font-size:14px;
color:black;
margin:auto;
background-color:#ffdbab;
border-radius:5px;
margin:2%;
padding:2%;

`
const WorkshopLink = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
font-size:14px;
color:black;
margin:auto;
background-color:#abffb1;
border-radius:5px;
margin:2%;
padding:2%;
`

const WorkshopRow = styled.div`
margin-bottom:5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
`


export default function MechTeam() {
  const PageData = {
    GoalDates: ["2/14","2/26","2/28","2/29","2/30"],
    Goals: ["Finish document", "Group project", "Team graph", "Efficiency", "2000 words"],
    WorkshopNames:["Team workshop","Grouping","Brainstorm","Team work","Social"],
    PageHeader:"Mechanical Team",
    WorkshopHeader:'Workshops',
    GoalHeader:"Goals",
    WorkshopDates: ["2/14","2/26","2/28","2/29","2/30"],
    Projects:['AI Robot','Motor project','Team efficiency','Movement controls','Team project'],
    WorkshopTimes: ['1:00PM','2:00PM','3:00PM','4:00PM','5:00PM'],
    WorkshopLinks: ["https://zoom.us/","https://zoom.us/","https://zoom.us/","https://zoom.us/","https://zoom.us/"],
    
    PictureName:"Joe Smith",
    PictureDescription:"3rd Year, Data Science"
  }


  return (  
    <BackgroundContainer>
      <NavBar />
      <GlobalStyle />
      <PageContainer>
        <MainContainer>
        <HeaderContainer>
          <Header>
            {PageData.PageHeader}
          </Header>
        </HeaderContainer>
        <BodyContainer>
          <Box>
            <Label>
            {PageData.GoalHeader}
            </Label>
                {
                  PageData.GoalDates.map((date, i) => {
                    return (
                    <GoalRow>
                      <GoalDate>{date}</GoalDate>
                      <Goal>{PageData.Goals[i]}</Goal>   
                    </GoalRow>
                  );
                  })
                }    
          </Box>

          <Box>
          <Label>
            Workshops
          </Label>
          <ListContainer>
          {
            PageData.WorkshopNames.map((workshop, i) => {
              return (
              <WorkshopRow>
                <WorkshopGoal>{workshop}</WorkshopGoal>
                <WorkshopDate>{PageData.WorkshopDates[i]}</WorkshopDate>
                <WorkshopTime>{PageData.WorkshopTimes[i]}</WorkshopTime>
                <WorkshopLink><a href={PageData.WorkshopLinks[i]}>Link</a></WorkshopLink>
              </WorkshopRow>
              );
            })
          }
          </ListContainer>
          </Box>
       </BodyContainer>
       <BodyContainer>
         <CircleContainer>
         <Circle>
           
         </Circle>


          <Description>
           {PageData.PictureName} <br></br> {PageData.PictureDescription}
          </Description>
         </CircleContainer>
          <Box>
          <Label>
            Projects
          </Label>  
          <ListContainer>
          {
            PageData.Projects.map((proj, i) => {
            return (
              <Row>
                <BulletPoint><li></li></BulletPoint>
                <Goal>{proj}</Goal>
              </Row>
            );       
            })
          }
          </ListContainer>  
          </Box>
       </BodyContainer>
       </MainContainer>
      </PageContainer>
    </BackgroundContainer>
  )
}
