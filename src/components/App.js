import "../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import RegisterScreen from "./RegisterScreen/RegisterScreen";
import HabitsScreen from "./HabitsScreen/HabitsScreen";
import TodayScreen from "./TodayScreen/TodayScreen";
import HistoryScreen from "./HistoryScreen/HistoryScreen";
export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/cadastro" element={<RegisterScreen />} />
                <Route path="/habitos" element={<HabitsScreen />} />
                <Route path="/hoje" element={<TodayScreen />} />
                <Route path="/historico" element={<HistoryScreen />} />
            </Routes>
        </BrowserRouter>
    );
}