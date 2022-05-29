import logo from "../../assets/images/logoBig.svg";
import React from "react";
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";


export default function LoginScreen() {
    const navigate = useNavigate();
    const {setToken, setUserData} = React.useContext(UserContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isDisabled, setIsDisabled] = React.useState(false);

    function handleLogin(event) {
        event.preventDefault();
        setIsDisabled(true);
        const body = {
            email,
            password
        }

        const loginRequest = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        loginRequest.then(answer => {
            setUserData(answer.data)    
            setToken({
                headers: {
                    Authorization: `Bearer ${answer.data.token}`
                }
            })
            navigate("/habitos")
        });

        loginRequest.catch(answer => 
            {alert("Ocorreu um erro, tente novamente!")
            setIsDisabled(false)}
            );

    }

    return(
        <Container>
            <CenteredDiv>
                <img src={logo} />
                <Form onSubmit={handleLogin}>
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" disabled={isDisabled} required />
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" disabled={isDisabled} required />
                    <button type="submit" disabled={isDisabled} >{isDisabled ? <BeatLoader color="#FFFFFF" /> : "Entrar"}</button>
                    
                </Form>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </CenteredDiv>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;


`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;

    input {
        box-sizing: border-box;
        height: 46px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        margin: 3px 0;
        padding: 0 6px;
        
        ::placeholder {
            color: #dbdbdb;
        }
    }

    input:disabled {
        opacity: 0.5;
    }

    button {
        height: 46px;
        border-style: none;
        border-radius: 4px;
        background-color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size:22px;
        color:white;
        margin: 3px 0 18px 0;
    }

    button:disabled {
        opacity: 0.5;
    }

`

const CenteredDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40vh;
        justify-content: space-between;

        img {
        width: 180px;
        }

        a {
            font-family: 'Lexend Deca', sans-serif;
        }

        a:link {
            color: #52B6FF;
        }

        a:visited {
            color: #52B6FF;
        }
`