import logo from "../../assets/images/logoBig.svg";
import React from "react";
export default function RegisterScreen() {
    const [form, setForm] = React.useState({
        email: "",
        password: "",
        name: "",
        image: ""
    })

    return(
        <>
        <img src={logo} />
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required />
            <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">Já tem uma conta? Faça login!</Link>
        </>
    );
}