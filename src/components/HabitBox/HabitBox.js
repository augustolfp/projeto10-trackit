import styled from "styled-components";
import DayButton from "../DayButton/DayButton";
import UserContext from "../../contexts/UserContext";
import React from "react";
import axios from "axios";

export default function HabitBox(props) {
    const {token} = React.useContext(UserContext);

    function HandleDayButtons() {
        let buttons = [];
        for(let i=0;i<7;i++) {
            buttons.push(<DayButton key={i} day={i} selected={props.days.includes(i)} />);
        }
        return buttons;
    }

    function deleteHabit(props) {
        const deleteRequest = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props}`, token);
        deleteRequest.then(() => console.log("Deletado com sucesso"));
        deleteRequest.catch(() => console.log("Erro ao deletar"));
    }

    return(
        <Container>
            <CenteredDiv>
                <div>
                    <h3>{props.name}</h3>
                    <Weekdays>
                        {HandleDayButtons()}
                    </Weekdays>
                </div>
                <button onClick={() => deleteHabit(props.id)}>Delete</button>
            </CenteredDiv>
        </Container>

    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const CenteredDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 340px;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 5px;
    
    h3 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;
        margin-bottom: 10px;
    }
`

const Weekdays = styled.div`
    display: flex;
`