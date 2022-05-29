import styled from "styled-components";
import DayButton from "../DayButton/DayButton";
import { useState } from "react";
import UserContext from "../../contexts/UserContext";
import React from "react";
import axios from "axios";

export default function CreateHabit() {
    const {token} = React.useContext(UserContext);
    const [days, setDays] = useState(Array(7).fill(false));
    const [habit, setHabit] = useState("");

    function DisplayButtons() {
        let buttons = [];
        for(let i=0;i<7;i++) {
            buttons.push(<DayButton click={() => {
                days[i]=!days[i]
                setDays([...days])
            }} key={i} day={i} selected={days[i]} />);
        }
        return buttons;
    }

    function postHabit() {
        const selectedDays = days.map((day,index) => day ? index : false);
        const filteredDays = selectedDays.filter(day => day!=false);
        console.log(filteredDays);
        const body = {
            name: habit,
            days: filteredDays
        }
        console.log(body)
        const addHabit = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, token);

        addHabit.then(() => console.log("sucesso"));
        addHabit.catch(() => console.log("Falhou"));
    }
    return(
        <Container>
            <input type="text" placeholder="nome do hábito" onChange={e => setHabit(e.target.value)} />
            <DaysContainer>
                {DisplayButtons()}
            </DaysContainer>
            <ButtonsContainer>
                <button onClick={() => postHabit()}>Cancelar</button>
                <button>Salvar</button>
            </ButtonsContainer>
        </Container>
    );
}

const Container = styled.div`

`

const DaysContainer = styled.div`
    display: flex;
`

const ButtonsContainer = styled.div`
    display: flex;
`