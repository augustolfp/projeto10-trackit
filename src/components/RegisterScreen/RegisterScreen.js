import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginTemplate from "../LoginTemplate/LoginTemplate";
import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";


export default function RegisterScreen() {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [form, setForm] = React.useState({
        email: "",
        password: "",
        username: "",
        image: ""
    });

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleRegister(event) {
        event.preventDefault();
        setIsDisabled(true);
        const body = {
            email: form.email,
            password: form.password,
            name: form.username,
            image: form.image,
        }

        const registerRequest = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        registerRequest.then(() => navigate("/"));
        registerRequest.catch(() => {
            alert("Ocorreu um erro! Tente novamente")
            setIsDisabled(false)
        });
    }

    return(
        <LoginTemplate>
            <Form onSubmit={handleRegister}>
                <input type="email" name="email" placeholder="email" onChange={handleForm} value={form.email} disabled={isDisabled} required />
                <input type="password" name="password" placeholder="senha" onChange={handleForm} value={form.password} disabled={isDisabled} required />
                <input type="text" name="username" placeholder="nome" onChange={handleForm} value={form.username} disabled={isDisabled} required />
                <input type="url" name="image" placeholder="foto" onChange={handleForm} value={form.image} disabled={isDisabled} required />
                <button type="submit" disabled={isDisabled} >{isDisabled ? <BeatLoader color="#FFFFFF" /> : "Cadastrar"}</button>
            </Form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </LoginTemplate>
    );
}

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