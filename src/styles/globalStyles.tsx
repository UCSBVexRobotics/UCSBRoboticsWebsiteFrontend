import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Arial';
    }

    html {
        scroll-behavior: smooth;
    }

    h3 {
        margin-top: 0;
    }

    h2 {
        margin-bottom: 15px;
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
