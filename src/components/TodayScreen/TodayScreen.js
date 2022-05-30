import UserContext from "../../contexts/UserContext";
import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HabitStats from "../HabitStats/HabitStats";
import styled from "styled-components";
export default function TodayScreen() {
    const {token} = React.useContext(UserContext);
    const [habits, setHabits] = useState({});
    const [updated, setUpdated] = useState(true);
    const [percentadeDone, setPercentageDone] = React.useState(0);
    let today = dayjs();

    function handleSuccess(answer) {
        setHabits(answer.data);
        let numOfDone = 0;
        answer.data.forEach(task => {
            if(task.done) {
                numOfDone++;
            }
        })
        setPercentageDone(((numOfDone/answer.data.length)*100).toFixed(0));
    }

    useEffect(() => {
        const habitsRequest = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token);
        habitsRequest.then(answer => handleSuccess(answer));
        habitsRequest.catch(answer => console.log(answer));
    },[updated]);

    function click(id, status) {
        if(status) {
            const uncheckHabit = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{},token);
            uncheckHabit.then(() => setUpdated(!updated));
            uncheckHabit.catch(() => console.log("Erro"));
        }
        else {
            const checkHabit = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{},token);
            checkHabit.then(() => setUpdated(!updated));
            checkHabit.catch(() => console.log("Erro"));
        }
        
    }

    return(
        <Container>                 
            <TopBar />
            <DateContainer>{today.locale('pt-br').format("dddd, D/M")}</DateContainer>
            <PercentageBox>{isNaN(percentadeDone) ? "0" : percentadeDone}% dos hábitos concluidos</PercentageBox>
            {
                habits.length > 0 && (
                    habits.map((habit, index) => <HabitStats {...habit} key={index} click={click} />)
                    )
            }
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

`
const DateContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color: #126ba5;
`

const PercentageBox = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: #bababa;
`