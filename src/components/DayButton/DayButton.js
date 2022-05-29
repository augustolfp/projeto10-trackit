import styled from "styled-components";

export default function DayButton({day, selected, click}) {

    const days = ["D","S","T","Q","Q","S","S"];

    return(
        <Container onClick={click} selected={selected}>
            {days[day]}
        </Container>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #DBDBDB;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: ${props => props.selected ? "white" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#DBDBDB" : "white"};
`