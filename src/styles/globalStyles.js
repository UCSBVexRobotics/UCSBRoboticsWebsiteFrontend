import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Nunito', sans-serif;
    }

    html {
        scroll-behavior: smooth;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    //Disable being able to drag an image
    img,
    a {
        user-drag: none; 
        -webkit-user-drag: none;
    }

    h3 {
        margin-top: 0;
    }

    h2 {
        margin-bottom: 15px;
        font-weight: normal
    }

    a {
        text-decoration: none;

        &:link {
            color: white;
        }

        &:visited { 
            color: white;
        }
    }
`
export default GlobalStyle
