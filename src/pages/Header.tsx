import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import LogoImage from "../../static/logo.png";

const Head = styled.header`
    background: #007CC7;
    display: flex;
    justify-content: space-between;
    height: 37px;
    padding: 0 350px;
`
const LogoArea = styled.span`
    display: flex;
`
const Img = styled.img`
    height: 100%; 
` // keeps aspect ratio

const ClubName = styled.h1`
    color: #FFF;
    margin: 0 0 0 5px;
`

const NavList = styled.nav`
    align-self: center;
`

const UList = styled.ul`
    margin: 0;
`

const NavListItem = styled.li`
    list-style-type: none;
    margin: 0 15px;
    float: left;
    font-size: 1.25vw;
`

const NavItem = ({name, link}) => (
    <NavListItem>
        <Link to={"/" + link} style={{ textDecoration: "none" }}>{name}</Link>
    </NavListItem>
);

export default function Header() {
    return (
        <Head>
            <LogoArea>
                <Img src={LogoImage} />
                <ClubName>UCSB ROBOTICS CLUB</ClubName>
            </LogoArea>
            <NavList>
                <UList>
                    <NavItem name="About" link="about" />
                    <NavItem name="Calendar" link="calendar" />
                    <NavItem name="Contact" link="contact-us" />
                    <NavItem name="Login" link="account/login" />
                </UList>            
            </NavList>
        </Head>
    );
}