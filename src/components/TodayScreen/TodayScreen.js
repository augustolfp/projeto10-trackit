import UserContext from "../../contexts/UserContext";
import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import TopBar from "../TopBar/TopBar";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HabitStats from "../HabitStats/HabitStats";
import styled from "styled-components";
export default function TodayScreen() {
    const {token} = React.useContext(UserContext);
    const [habits, setHabits] = useState({});
    let today = dayjs();
    console.log(habits);

    useEffect(() => {
        const habitsRequest = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token);
        habitsRequest.then(answer => {
            setHabits(answer.data);
            console.log(answer.data)
        });
        habitsRequest.catch(answer => console.log(answer));
    },[]);

    function click(props) {
        const checkHabit = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props}/check`,{},token);
        checkHabit.then(() => console.log("sucesso"));
        checkHabit.catch(() => console.log("Erro"));
        console.log(props)
        console.log(token)
    }

    return(
        <Container>                 
            <TopBar />
            <DateContainer>{today.locale('pt-br').format("dddd, D/M")}</DateContainer>
            {
                habits.length > 0 && (
                    habits.map((habit, index) => <HabitStats {...habit} key={index} click={click} />)
                    )
            }
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #F2F2F2;

`
const DateContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color: #126ba5;
`