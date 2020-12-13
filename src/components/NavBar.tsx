import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LoginModal from "./global/LoginModal"
import LogoCircle from "../../static/logoCircle.png"

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
  font-weight: lighter;
  letter-spacing: 0.2em;

  &:hover {
    opacity: 0.5;
  }
`

const LoginLink = styled(NavLink)`
  cursor: pointer;
`

function toTopOfPage() {
  window.scrollTo(0, 0)
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
        <Title onClick={() => toTopOfPage()}>
          <Link to="/" className="nav-link">
            UCSB ROBOTICS CLUB
          </Link>
        </Title>
        <LinksContainer>
          <NavLink>
            <Link to="/Projects" className="nav-link">
              About
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/Calendar" className="nav-link">
              Test
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </NavLink>
          <LoginLink
            className="nav-link"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Login
          </LoginLink>
        </LinksContainer>
      </NavBarInnerContainer>
    </NavBarContainer>
  )
}
