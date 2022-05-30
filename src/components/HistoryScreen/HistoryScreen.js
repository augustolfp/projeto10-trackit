import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";
import styled from "styled-components";

export default function HistoryScreen() {
    return(
        <Container>
            <TopBar />
            <h2>Histórico</h2>
            <h4>Em breve você poderá ver o histórico dos seus hábitos aqui!</h4>
            <BottomBar />
        </Container>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    margin: 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #F2F2F2;

    h2 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        color: #126BA5;
    }

    h4 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #666666;
    }
`