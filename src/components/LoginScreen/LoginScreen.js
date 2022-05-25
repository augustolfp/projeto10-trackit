import logo from "../../assets/images/logoBig.svg";
export default function LoginScreen() {
    return(
        <>
        <img src={logo} />
        <form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="senha" />
            <button type="submit">Entrar</button>
        </form>
        </>
    );
}