import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LoginModal from "./global/LoginModal"
import LogoCircle from "../../static/logoCircle.png"
import { CircleFill } from "@styled-icons/bootstrap"
import { Trustedshops } from "styled-icons/simple-icons"

const NavBarContainer = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
`

const NavBarInnerContainer = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Image = styled.img`
  width: 100px;
`

const Title = styled.h2`
  margin: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavLink = styled.div`
  margin: 0 30px;
  letter-spacing: 0.2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    opacity: 0.5;
  }
`

const LoginLink = styled(NavLink)`
  cursor: pointer;
`

const LoginLinkContainer = styled.div`
  background-color: red;
  padding: 10px 20px;
  margin: 4px 2px;
  border-radius: 16px;
`

function toTopOfPage() {
  window.scrollTo(0, 0)
}

function NavLinkWithDot({ isLogin = false, link, name, active }) {
  return (
    <NavLink>
      <Link to={link} className="nav-link">
        {name}
      </Link>
      {active ? (
        <CircleFill className="nav-link" size="5px" color="white" />
      ) : null}
    </NavLink>
  )
}

export default function NavBar() {
  //Function to change the overlay of the navbar once scroll past a 100px
  useEffect(() => {
    window.onscroll = () => {
      var navLink = document.getElementsByClassName("nav-link")
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("nav-bar-container").style.backgroundColor =
          "rgba(255, 255, 255, 0.7)"
        for (var i = 0; i < navLink.length; i++)
          navLink[i].style.color = "#003384"
      } else {
        document.getElementById("nav-bar-container").style.backgroundColor =
          "transparent"
        for (var i = 0; i < navLink.length; i++)
          navLink[i].style.color = "white"
      }
    }
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <NavBarContainer id="nav-bar-container">
      <LoginModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        title="Login"
      />
      <NavBarInnerContainer>
        <LogoContainer>
          <Image src={LogoCircle} />
        </LogoContainer>
        <Title onClick={() => toTopOfPage()}>
          <Link to="/" className="nav-link">
            UCSB ROBOTICS CLUB
          </Link>
        </Title>
        <LinksContainer>
          <NavLinkWithDot link="/Projects" name="About" active={true} />
          <NavLinkWithDot link="/Calendar" name="Calendar" active={true} />
          <NavLinkWithDot link="/Shop" name="Shop" active={true} />
          <NavLinkWithDot link="/Contact" name="Contact" active={true} />
          <LoginLinkContainer>
            <LoginLink
              className="nav-link"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Login
            </LoginLink>
          </LoginLinkContainer>
        </LinksContainer>
      </NavBarInnerContainer>
    </NavBarContainer>
  )
}
