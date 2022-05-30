import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BottomBar() {
    const navigate = useNavigate();
    const {userData} = React.useContext(UserContext);
    return(
        <Container>
            <div>
                <Link to="/habitos">Hábitos</Link>
                <Link to="/hoje">Hoje</Link>
                <Link to="/historico">Histórico</Link>
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    height: 70px;

    div {
        box-sizing: border-box;
        width: 450px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
    }

    @media (max-width: 450px) {
        div {
            width: 100vw;
        }
    }

`