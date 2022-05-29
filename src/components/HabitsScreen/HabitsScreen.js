import UserContext from "../../contexts/UserContext";
import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import TopBar from "../TopBar/TopBar";
import styled from "styled-components";
import HabitBox from "../HabitBox/HabitBox";

export default function HabitsScreen() {
    const {token} = React.useContext(UserContext);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const habitsRequest = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", token);
        habitsRequest.then(answer => {
            setHabits(answer.data);
        });
        habitsRequest.catch(answer => console.log(answer));
    },[]);

    return(
        <Container>
            <TopBar />
            <TopTitle>
                <h2>Meus hábitos</h2>
                <button>+</button>
            </TopTitle>
            {
                habits.length > 0 ? (
                    habits.map((habit, index) => <HabitBox key={index} {...habit} />)
                ) : (
                    <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
                )
            }
        </Container>
    );
}

const TopTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 36px;
    margin: 22px 0;

    h2 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        color: #126BA5;
    }

    button {
        background-color: #52B6FF;
        border-style: none;
        border-radius: 5px;
        color: white;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 27px;
        padding: 0 12px;
    }

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #F2F2F2;
`
