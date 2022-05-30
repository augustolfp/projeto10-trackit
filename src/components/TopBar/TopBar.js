import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import React from "react";

export default function TopBar() {
    const {userData} = React.useContext(UserContext);
    return (
        <Container>
            <div>
                <TitleContainer>
                    TrackIt
                </TitleContainer>
                <img src={userData.image} />
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    div {
        box-sizing: border-box;
        width: 450px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;

    }

    img {
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius:100px;
    }

    @media (max-width: 450px) {
        div {
            width: 100vw;
        }
    }
`

const TitleContainer = styled.div`
    font-family: 'Playball', cursive;
    color: white;
    font-size: 40px;
`