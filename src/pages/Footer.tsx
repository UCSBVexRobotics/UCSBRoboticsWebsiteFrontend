import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import Logo from "../../static/logo.png";

const padding = "350px";

const Foot = styled.footer`
    display: flex;
    height: 100px;
    padding: 0;
`

const LogoGroup = styled.span`
    display: flex;
    padding: 0 0 0 ${padding};
    height: 100%;
    background: #203647;
`

const Img = styled.img`
    height: 100%;
`

const ClubName = styled.h3`
    width: 100px;
    color: #FFF;
    margin: 0 50px 0 5px;
    align-self: center;
`

const Nav = styled.nav`
    display: flex;
    align-self: center;
    background: #007CC7;
    width: 100%;
    height: 100%;
`

const Column = styled.ul`
    list-style-type: none;
    
`
const NavHeader = styled.h3`
    margin: 0px;
    color: white;
`

const Text = styled.li`
    color: #EEFBFB;
`

const NavItem = ({name, link}) => (
    <li>
        <Link to={"/" + link} style={{ textDecoration: "none" }}><Text>{name}</Text></Link>
    </li>
);

export default function Footer() {
    return (
        <Foot>
            <LogoGroup>
                <Img src={Logo} />
                <ClubName>
                    UCSB ROBOTICS CLUB
                </ClubName>
            </LogoGroup>
            <Nav>
                <Column>
                    <NavHeader>Club</NavHeader>
                    <NavItem link="about" name="About" />
                    <NavItem link="calendar" name="Calendar" />
                    <NavItem link="contact-us" name="Contact" />
                </Column>     
                <Column>
                    <NavHeader>Members</NavHeader>
                    <NavItem link="dashboard" name="Dashboard" />
                    <NavItem link="profile" name="Profile" />
                    <NavItem link="store" name="Store" />
                </Column>       
                <Column>
                    <NavHeader>Connect</NavHeader>
                    <NavItem link="contact-us" name="Contact"/>
                </Column>              
            </Nav>
        </Foot>
    );
}