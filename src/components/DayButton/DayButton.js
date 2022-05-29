import styled from "styled-components";

export default function DayButton(props) {

    const days = ["D","S","T","Q","Q","S","S"];

    return(
        <Container>
            {days[props.day]}
        </Container>
    );
}

const Container = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
`