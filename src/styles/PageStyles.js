import styled from "styled-components"

// Login

export const MainLoginContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: rgb(2,0,36);
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(37,73,110,1) 69%, rgba(0,101,255,0.9206057422969187) 100%);
`

export const TrailButton = styled.button`
    width: 16rem;
    max-width: 30rem;
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 30rem;
    gap: 2rem;
    padding: 3rem 1rem;
`

export const InputStyled = styled.input`
    text-align: center;
    padding: 1rem 1rem;
    color: black;
    font-size: 1.2rem;
    line-height: 150%;
    border-width: 0rem;
    border-bottom: 1px solid #b3b1b1;
::placeholder {
        font-size: 1rem;
}
:focus::-webkit-input-placeholder {
    color: #2e2c2c;
}
`

// Pages

export const MainContainer = styled.div`
height: 100%;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p {
    color: #488bb8
}
`

export const ContentContainer = styled.div`
width: 100%;
height: auto;
display: flex;
gap: 3rem;
margin-bottom: 3rem;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
p {
    color: #488bb8
}
`

export const ItemContainer = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: center;
align-content: center;
img {
    object-fit: cover;
    width: 32rem;
    height: 18rem;
    border-radius: 4%;
    cursor: pointer;
}
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 60rem;
    margin-bottom: 5rem;
button {
    width: 40%
}
`

// Content component

export const StyledCardShadow = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    z-index: 10;
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey
    }
    &::-webkit-scrollbar-track {
        background-color: white
    }
`

export const StyledDetail = styled.div`
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
width: 95%;
border-radius: 1rem;
padding: 2rem;
background: #3e424b;
position: absolute;
color: black;
h4{
    color: #488bb8
}
p {
    color: white;
}
`

export const CloseButton = styled.div`
    z-index: 4;
    top: 0rem;
    right: 0rem;
    position: absolute;
    color: #488bb8;
    width: 2rem;
    font-size: 2rem;
    cursor: pointer;
`
