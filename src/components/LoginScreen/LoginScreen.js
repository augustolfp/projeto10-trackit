import logo from "../../assets/images/logoBig.svg";
import React from "react";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";


export default function LoginScreen() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleLogin(event) {
        event.preventDefault();
        const body = {
            email,
            password
        }

        const loginRequest = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        loginRequest.then("funcionou");
        loginRequest.catch("deu pau")

    }

    return(
        <>
        <img src={logo} />
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required />
            <button type="submit">Entrar</button>
        </form>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </>
    );
}