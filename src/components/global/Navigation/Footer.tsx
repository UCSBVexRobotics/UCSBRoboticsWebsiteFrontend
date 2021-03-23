import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Colors from "../../../styles/colors"
import LogoCircle from "../../../../static/Logo.svg"

const FooterContainer = styled.div`
  // padding: 0 10% 10px 10%;
  display: flex;
  justify-content: center;

  background-color: ${Colors.BLACK};

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: center;
  }
`
const ClubName = styled.h2`
  word-wrap: no;
  color: white;
`
const Image = styled.img`
  width: 75px;
  &:hover {
    transform: rotate(360deg);
    transition: transform 0.2s ease-out;
  }
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;

  /* Links under title */
  @media (max-width: 963px) {
    & > * {
      text-align: center;
    }
  }

  /* Single column */
  @media (max-width: 750px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`
const Column = styled.ul`
  list-style-type: none;
  margin-top: 0;
  width: 100%;

  padding: 0 20px;

  @media (max-width: 750px) {
    width: 40%;
  }

  /* single column */
  @media (max-width: 500px) {
    width: 100%;
    padding-left: 0;
  }
`
const Ct = styled.h2`
  color: ${Colors.YELLOW};
  cursor: default;

  /* single column */
  @media (max-width: 500px) {
    text-align: center;
  }
`
const ColumnItem = styled.li`
  & > * {
    color: white;
    text-decoration: none;
  }

  /* single column */
  @media (max-width: 500px) {
    text-align: center;
    width: 100%;
  }
`
const ColumnItemText = styled.p`
  &:hover {
    color: ${Colors.HIGHLIGHT_TEXT_LIGHT};
  }

  margin: 0;
`

function toTopOfPage() {
  window.scrollTo(0, 0)
}

export default function Footer() {
  const Ci = props => {
    return (
      <ColumnItem>
        <Link to={props.to}>
          <ColumnItemText>
            {
              // replace spaces with nbsp
              props.children.replace(/ /g, "\u00a0")
            }
          </ColumnItemText>
        </Link>
      </ColumnItem>
    )
  }

  return (
    <FooterContainer>
      <LogoContainer>
        <Link to="/" onClick={() => toTopOfPage()}>
          <ClubName>UCSB ROBOTICS CLUB</ClubName>
        </Link>
        <Link to="/" onClick={() => toTopOfPage()}>
          <Image src={LogoCircle} />
        </Link>
      </LogoContainer>
      <LinkContainer>
        <Column>
          <Ct>Club</Ct>
          <Ci to="/About-Us">About Us</Ci>
          <Ci to="/Projects">Projects</Ci>
          <Ci to="/Calendar">Calendar</Ci>
          <Ci to="/Calendar">Contact Us</Ci>
        </Column>
        <Column>
          <Ct>Projects</Ct>
          <Ci to="/projects/electrical">Electrical</Ci>
          <Ci to="/projects/mechanical">Mechanical</Ci>
          <Ci to="/projects/software">Software</Ci>
          <Ci to="/projects/web">Web Design</Ci>
        </Column>
        <Column>
          <Ct>Members</Ct>
          <Ci to="/dashboard">Dashboard</Ci>
          <Ci to="/Profile">Profile</Ci>
          <Ci to="/store">Store</Ci>
        </Column>
      </LinkContainer>
    </FooterContainer>
  )
}
