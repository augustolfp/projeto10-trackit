import logo from "../../assets/images/logoBig.svg";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterScreen() {
    const navigate = useNavigate();
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
        const body = {
            email: form.email,
            password: form.password,
            name: form.username,
            image: form.image,
        }

        const registerRequest = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        registerRequest.then(() => navigate("/"));
        registerRequest.catch(() => alert("Ocorreu um erro! Tente novamente"));
    }

    return(
        <>
        <img src={logo} />
        <form onSubmit={handleRegister}>
            <input type="email" name="email" placeholder="email" onChange={handleForm} value={form.email} required />
            <input type="password" name="password" placeholder="senha" onChange={handleForm} value={form.password} required />
            <input type="text" name="username" placeholder="nome" onChange={handleForm} value={form.username} required />
            <input type="url" name="image" placeholder="foto" onChange={handleForm} value={form.image} required />
            <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">Já tem uma conta? Faça login!</Link>
        </>
    );
}