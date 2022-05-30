import logo from "../../assets/images/logoBig.svg";
import React from "react";
import styled from "styled-components";

export default function LoginTemplate(props) {
    return(
        <Container>
            <CenteredDiv>
                <img src={logo} />
                {props.children}
            </CenteredDiv>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;


`

const CenteredDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40vh;
        justify-content: space-between;

        img {
        width: 180px;
        }

        a {
            font-family: 'Lexend Deca', sans-serif;
        }

        a:link {
            color: #52B6FF;
        }

        a:visited {
            color: #52B6FF;
        }
`