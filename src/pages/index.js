import React from "react"
import styled from "styled-components"
import { Router } from "@reach/router"
import Home from "./Home.js"
import GlobalStyle from "../styles/globalStyles"
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Profile from "./Profile"
import PrivateRoute from "../components/global/PrivateRoute";

const BackgroundContainer = styled.div`
  background-image: linear-gradient(#3DD6FF, #003384)
`

export default function App() {
    return (
        <BackgroundContainer>
            <NavBar />
            <GlobalStyle />
            <Router basepath="/">
                <Home path="/" />
            </Router>
            <Footer />
        </BackgroundContainer >

    )
}