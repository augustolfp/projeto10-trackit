import styled from "styled-components";
import DayButton from "../DayButton/DayButton";

export default function HabitBox(props) {
    console.log(props)

    function HandleDayButtons() {
        let buttons = [];
        for(let i=0;i<7;i++) {
            buttons.push(<DayButton key={i} day={i} selected={props.days.includes(i)} />);
        }
        return buttons;
    }
    return(
        <Container>
            <h3>{props.name}</h3>
            <Weekdays>
                {HandleDayButtons()}
            </Weekdays>
            <button>Delete</button>
        </Container>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom:10px;

    h3 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;
    }
`

const Weekdays = styled.div`
    display: flex;
`