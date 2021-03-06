import "../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import RegisterScreen from "./RegisterScreen/RegisterScreen";
import HabitsScreen from "./HabitsScreen/HabitsScreen";
import TodayScreen from "./TodayScreen/TodayScreen";
import HistoryScreen from "./HistoryScreen/HistoryScreen";
import React from "react";
import UserContext from "../contexts/UserContext";
export default function App() {
    const [token, setToken] = React.useState({});
    const [userData, setUserData] = React.useState({});
    return(
        <UserContext.Provider value={{token, setToken, userData, setUserData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/cadastro" element={<RegisterScreen />} />
                    <Route path="/habitos" element={<HabitsScreen />} />
                    <Route path="/hoje" element={<TodayScreen />} />
                    <Route path="/historico" element={<HistoryScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
} 