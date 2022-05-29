import styled from "styled-components";
import DayButton from "../DayButton/DayButton";

export default function HabitBox(props) {
    console.log(props)
    return(
        <Container>
            <h3>{props.name}</h3>
            <Weekdays>
                {props.days.map((day, index) => <DayButton key={index} day={day} selected={true} /> )}
            </Weekdays>
        </Container>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    h3 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;
    }
`

const Weekdays = styled.div`
    display: flex;
`