import UserContext from "../../contexts/UserContext";
import React from "react";
import axios from "axios";
import TopBar from "../TopBar/TopBar";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
export default function TodayScreen() {
    const {token} = React.useContext(UserContext);
    let today = dayjs();
    function getHabits() {
        const habitsRequest = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token);
        habitsRequest.then(answer => console.log(answer));
        habitsRequest.catch(answer => console.log(answer));
    }
    getHabits();
    return(
        <>
        <TopBar />
        <div>{today.locale('pt-br').format("dddd, D/M")}</div>
        
        </>
    );
}