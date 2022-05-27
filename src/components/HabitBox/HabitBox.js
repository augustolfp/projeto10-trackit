import styled from "styled-components";

export default function HabitBox(props) {
    return(
        <>
        <div>{props.name}</div>
        <div>Sequência atual: {props.currentSequence} dias</div>
        <div>Seu recorde: {props.highestSequence} dias</div>
        </>
    );
}