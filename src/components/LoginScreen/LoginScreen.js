import logo from "../../assets/images/logoBig.svg";
import React from "react";
import UserContext from "../../contexts/UserContext";
import styledComponents from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function LoginScreen() {
    const navigate = useNavigate();
    const {setToken, setUserData} = React.useContext(UserContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleLogin(event) {
        event.preventDefault();
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
            navigate("/hoje")
        });

        loginRequest.catch(answer => alert("Ocorreu um erro!"));

    }

    return(
        <>
        <img src={logo} />
        <form onSubmit={handleLogin}>
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required />
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required />
            <button type="submit">Entrar</button>
        </form>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </>
    );
}