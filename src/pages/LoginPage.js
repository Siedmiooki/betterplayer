import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Appcontext } from '../App'
import { useNavigate } from "react-router-dom"
import { MainLoginContainer, TrailButton, FormStyled, InputStyled } from "../styles/PageStyles"

function LoginPage() {

    const { dispatch } = useContext(Appcontext)

    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const axiosAnonymusLogin = async () => {
        try {
            const response = await axios.post("/Authorization/SignIn", {
                "Device": {
                    "PlatformCode": "WEB",
                    "Name": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                }
            })
            dispatch({
                type: "USER_LOGIN",
                payload: response.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const axiosManualLogin = async () => {
        try {
            const response = await axios.post("/Authorization/SignIn", {
                "Username": `${user}`,
                "Password": `${pass}`,
                "Device": {
                    "PlatformCode": "WEB",
                    "Name": "7a6a86e5-356f-4795-8998-305e205531"
                }
            })
            dispatch({
                type: "USER_LOGIN",
                payload: response.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleTrial = async () => {
        await axiosAnonymusLogin()
        await navigate("/trial")
    }

    const handleManual = async (e) => {
        e.preventDefault();
        await axiosManualLogin()
        await navigate("/home")
    }

    return (
        <MainLoginContainer>
            <FormStyled onSubmit={(e) => handleManual(e)}>
                <InputStyled type="text" placeholder="user" value={user} onChange={(e) => setUser(e.target.value)} />
                <InputStyled type="password" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                <button type="submit">Login</button>
            </FormStyled>
            <TrailButton onClick={() => handleTrial()} whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                Trail varsion
            </TrailButton>
        </MainLoginContainer>
    )
}

export default LoginPage;

