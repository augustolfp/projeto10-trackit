import styled from "styled-components";
import React from "react";
import IonIcon from "@reacticons/ionicons";

export default function HabitStats(props) {
    return(
        <Container>
            <TextContainer>
                <HabitTitle>{props.name}</HabitTitle>
                <Stats>Sequência atual: {props.currentSequence} dias</Stats>
                <Stats>Seu recorde: {props.highestSequence} dias</Stats>
            </TextContainer>
            <CheckButton done={props.done} onClick={() => props.click(props.id, props.done)}>
                <IonIcon name="checkmark" />
            </CheckButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    background-color: white;
    margin-top: 10px;
    padding: 14px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const HabitTitle = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    color: #666666;
    font-size: 20px;
`

const Stats = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    color: #666666;
    font-size: 13px;
`

const CheckButton = styled.button`
    width: 70px;
    height: 70px;
    border-style: none;
    border-radius: 5px;
    background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};

    * {
        font-size: 42px;
        color: white;
    }
`