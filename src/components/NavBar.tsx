import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LoginModal from "./global/LoginModal"
import SignupModal from "./global/SignupModal"
import ForgotPasswordModal from "./global/ForgotPasswordModal"
import LogoCircle from "../../static/logoCircle.png"

import { UserValues } from "./global/UserValuesContext"

const NavBarContainer = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
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
  color: white;

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

  const [isModalOpen, setIsModalOpen] = useState({
    Login: false,
    Signup: false,
    ForgotPassword: false,
  })

  const setIsLoginModalOpen = val =>
    setIsModalOpen({ Login: val, Signup: false, ForgotPassword: false })
  const setIsSignupModalOpen = val =>
    setIsModalOpen({ Login: false, Signup: val, ForgotPassword: false })
  const setIsForgotPasswordModalOpen = val =>
    setIsModalOpen({ Login: false, Signup: false, ForgotPassword: val })

  /*
  
  
  
  */
  const LoggedIn = false

  return (
    <NavBarContainer id="nav-bar-container">
      <UserValues>
        {isModalOpen.Login ? (
          <LoginModal
            isOpen={isModalOpen.Login}
            openSignupModal={() => setIsSignupModalOpen(true)}
            openForgotPasswordModal={() => setIsForgotPasswordModalOpen(true)}
            closeModal={() => setIsLoginModalOpen(false)}
            title="Login"
          />
        ) : null}
        {isModalOpen.Signup ? (
          <SignupModal
            isOpen={isModalOpen.Signup}
            openLoginModal={() => setIsLoginModalOpen(true)}
            closeModal={() => setIsSignupModalOpen(false)}
            title="Signup"
          />
        ) : null}
        {isModalOpen.ForgotPassword ? (
          <ForgotPasswordModal
            isOpen={isModalOpen.ForgotPassword}
            openLoginModal={() => setIsLoginModalOpen(true)}
            openSignupModal={() => setIsSignupModalOpen(true)}
            closeModal={() => setIsForgotPasswordModalOpen(false)}
            title="Forgot Password"
          />
        ) : null}
      </UserValues>
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
              Calendar
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </NavLink>
          {LoggedIn ? (
            <>
              <NavLink>
                <Link to="/Profile" className="nav-link">
                  Dashboard
                </Link>
              </NavLink>
              <LoginLink className="nav-link" onClick={() => alert("signout")}>
                Sign Out
              </LoginLink>
            </>
          ) : (
            <LoginLink
              className="nav-link"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Login
            </LoginLink>
          )}
        </LinksContainer>
      </NavBarInnerContainer>
    </NavBarContainer>
  )
}
