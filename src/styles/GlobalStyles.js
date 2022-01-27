import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Inter", sans-serif;
    background: #1b1b1b;
    overflow-x: hidden
}

html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey
    }
    &::-webkit-scrollbar-track {
        background-color: white
    }
    @media ( max-width: 1700px ) {
        font-size: 90%
    }
    @media ( max-width: 1300px ) {
        font-size: 75%
    }
}

button {
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #488bb8;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #488bb8;
        color: white;
    }
}

h2 {
    font-weight: lighter;
    font-size: 2rem;
    padding: 5rem;
    color: #488bb8
}

h4 {
    font-weight: bold;
    font-size: 2rem
}

a {
    font-size: 1.1rem
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
    text-align: center;
}
`

export default GlobalStyle;