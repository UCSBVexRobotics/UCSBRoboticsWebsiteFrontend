import React from "react"
import styled from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"
import LogoCircle from "../../static/logoCircle.png"

import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare"
import { Email } from "@styled-icons/material/Email"

import { Link } from "gatsby"

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10%;
  flex-grow: 1;
`
const ClubName = styled.h2`
  word-wrap: break-word;
  color: white;
`

const Image = styled.img`
  width: 100px;
`

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 50;

  &:first-child {
    padding-left: 0;
  }
`
const ColumnList = styled.ul`
  list-style-type: none;
  margin-top: 0;
`

const ColumnTitle = styled.h2`
  color: white;
`
const ColumnItem = styled.li`
  & > * {
    color: white;
    text-decoration: none;
  }
`
export function Column(props) {
  return (
    <ColumnList>
      <ColumnTitle>{props.title}</ColumnTitle>
      {props.content.map(item => {
        return (
          <ColumnItem>
            <Link
              to={(
                (props.sub ? props.title + "/" : "") + item.replace(" ", "-")
              ).toLowerCase()}
            >
              {item}
            </Link>
          </ColumnItem>
        )
      })}
    </ColumnList>
  )
}

export default function Footer() {
  const club = ["About Us", "Projects", "Calendar"]
  const projects = ["Project 1", "Project 2", "Project 3"]
  const members = ["Dashboard", "Profile", "Store"]

  return (
    <FooterContainer>
      <LogoContainer>
        <Image src={LogoCircle} />
        <ClubName>UCSB ROBOTICS CLUB</ClubName>
      </LogoContainer>
      <LinkContainer>
        <Column title="Club" content={club} sub={false} />
        <Column title="Projects" content={projects} sub={true} />
        <Column title="Members" content={members} sub={true} />
        <ColumnList>
          <ColumnTitle>Connect</ColumnTitle>
          <ColumnItem>
            <Link to="/contact-us">Contact Page</Link>
          </ColumnItem>
          <ColumnItem>
            <Link to="https://www.facebook.com/ucsbroboticsclub">
              <FacebookSquare />
            </Link>
            <Link to="https://www.facebook.com/ucsbroboticsclub">
              <Email />
            </Link>
          </ColumnItem>
        </ColumnList>
      </LinkContainer>
    </FooterContainer>
  )
}
