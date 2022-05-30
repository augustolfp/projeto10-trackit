import styled from "styled-components";
import DayButton from "../DayButton/DayButton";
import { useState } from "react";
import UserContext from "../../contexts/UserContext";
import React from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

export default function CreateHabit() {
    const {token} = React.useContext(UserContext);
    const [days, setDays] = useState(Array(7).fill(false));
    const [habit, setHabit] = useState("");
    const [isDisabled, setIsDisabled] = React.useState(false);

    function DisplayButtons() {
        let buttons = [];
        for(let i=0;i<7;i++) {
            buttons.push(<DayButton click={() => {
                if(!isDisabled) {
                    days[i]=!days[i]
                    setDays([...days])
                }
            }} key={i} day={i} selected={days[i]} />);
        }
        return buttons;
    }

    function postHabit() {
        setIsDisabled(true);
        const selectedDays = days.map((day,index) => day ? index : undefined);
        const filteredDays = selectedDays.filter(day => !isNaN(day));
        console.log(filteredDays);
        const body = {
            name: habit,
            days: filteredDays
        }
        console.log(body)
        const addHabit = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, token);

        addHabit.then(() => {
            console.log("sucesso");
            setIsDisabled(false);
        });
        addHabit.catch(() => {
            console.log("Falhou");
            setIsDisabled(false);
        });
    }
    return(
        <Container>
            <input type="text" placeholder="nome do hábito" onChange={e => setHabit(e.target.value)} disabled={isDisabled} />
            <DaysContainer>
                {DisplayButtons()}
            </DaysContainer>
            <ButtonsContainer>
                <CancelButton>Cancelar</CancelButton>
                <SaveButton onClick={() => postHabit()} disabled={isDisabled}>{isDisabled ? <BeatLoader color="#FFFFFF" /> : "Salvar"}</SaveButton>
            </ButtonsContainer>
        </Container>
    );
}

const Container = styled.div`
    background-color: white;
    margin: 18px;
    padding: 12px 16px;
    border-radius: 5px;
    
    input {
        box-sizing: border-box;
        height: 46px;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        margin: 8px 0;
        padding: 0 6px;
        
        ::placeholder {
            color: #dbdbdb;
        }
    }

    *:disabled {
        opacity: 0.5;
    }
`

const DaysContainer = styled.div`
    display: flex;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`

const SaveButton = styled.button`
    border-style: none;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    color: white;
    border-radius: 5px;
    padding: 6px 16px;
    margin-left: 14px;
`

const CancelButton = styled.button`
    border-style: none;
    background-color:white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    color: #52b6ff;
    border-radius: 5px;
`