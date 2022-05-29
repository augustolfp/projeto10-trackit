import styled from "styled-components";

export default function HabitStats(props) {
    return(
        <Container>
            <HabitTitle>{props.name}</HabitTitle>
            <Stats>Sequência atual: {props.currentSequence} dias</Stats>
            <Stats>Seu recorde: {props.highestSequence} dias</Stats>
        </Container>
    );
}

const Container = styled.div`
    width: 340px;
    background-color: white;
    margin-top: 10px;
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