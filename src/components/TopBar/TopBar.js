import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import React from "react";

export default function TopBar() {
    const {userData} = React.useContext(UserContext);
    return (
        <Container>
            <div>
                TrackIt
            </div>
            <img src={userData.image} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    div {
        max-width: 360px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Playball', cursive;
        color: white;
        font-size: 40px;
    }

    img {
        height: 100%;
    }
`