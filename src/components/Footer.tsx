import React from "react"
import styled from "styled-components"
import LogoCircle from "../../static/logoCircle.png"
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare"
import { Email } from "@styled-icons/material/Email"
import { Link } from "gatsby"

const FooterContainer = styled.div`
    padding: 0 10%;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
        flex-wrap: wrap
    }
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const ClubName = styled.h2`
    word-wrap: no;
    color: white;
`
const Image = styled.img`
    width: 100px;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    /* Links under title */
    @media (max-width: 1000px) {
        & > * {
            text-align: center;
        }
    }

    /* 2x2 grid */
    @media (max-width: 750px) {
        flex-wrap: wrap;

        /* left column */
        & > :nth-child(odd) {
            margin-right: 10px;
            text-align: right;
            padding-left: 0;
        }
        
        /* right column */
        & > :nth-child(even) {
            margin-left: 10px;
            text-align: left;
            padding-left: 0;
        }

        /* bottom row */
        & > :nth-child(-n + 2) {
            margin-bottom: 0;
        }
    }

    /* Single column */
    @media (max-width: 365px) {
        justify-content: center;
    }
`
const Column = styled.ul`
    list-style-type: none;
    margin-top: 0;

    /* 
        2x2 grid
        make sure bigger enough so there isn't 3 on a line
    */
    @media (max-width: 750px) {
        width: 40%;
    }

    /* single column */
    @media (max-width: 365px) {
        width: 135px;
        margin: 0 10px;
    }
`
const Ct = styled.h2`
    color: white;

    /* single column */
    @media (max-width: 365px) {
        text-align: center;
    }
`
const ColumnItem = styled.li`
    & > * {
        color: white;
        text-decoration: none;
    }

    /* single column */
    @media (max-width: 365px) {
        text-align: center;
    }
`
const ColumnItemText = styled.p`
    &:hover  {
        color: #9ba6ab;
    }
    
    margin: 0;
`

export default function Footer() {
    const Ci = (props) => {
        return (
            <ColumnItem>
                <Link to={props.to}>
                    <ColumnItemText>
                        {
                            // replace spaces with nbsp
                            props.children.replace(/ /g, '\u00a0')
                        }
                    </ColumnItemText>
                </Link>
            </ColumnItem>
        );
    }

    return (
    <FooterContainer>
      <LogoContainer>
        <Image src={LogoCircle} />
        <ClubName>UCSB ROBOTICS CLUB</ClubName>
      </LogoContainer>
      <LinkContainer>
        <Column>
            <Ct>Club</Ct>
            <Ci to="/">About Us</Ci>
            <Ci to="/Projects">Projects</Ci>
            <Ci to="/Calendar">Calendar</Ci>
        </Column>
        <Column>
            <Ct>Projects</Ct>
            <Ci to="/">Electrical Team</Ci>
            <Ci to="/">Mechanical Team</Ci>
            <Ci to="/">Software Team</Ci>
            <Ci to="/">Web Design Team</Ci>
        </Column>
        <Column>
            <Ct>Members</Ct>
            <Ci to="/">Dashboard</Ci>
            <Ci to="/">Profile</Ci>
            <Ci to="/">Store</Ci>
        </Column>
        <Column>
          <Ct>Connect</Ct>
          <Ci to="/contact-us">Contact Page</Ci>
          <ColumnItem>
            <Link to="https://www.facebook.com/ucsbroboticsclub">
                <FacebookSquare size="40px" />
            </Link>
            <Link to="/">
                <Email size="40px" />
            </Link>
          </ColumnItem>
        </Column>
      </LinkContainer>
    </FooterContainer>
  )
}
