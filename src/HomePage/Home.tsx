import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 63px);
    padding-top: 15px;
`;

const Container = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    background: url(./image/background_thumbsup.jpg);
    animation: fadeout 1s;

    @keyframes fadeout {
        from {
            width: 100%;
        }
        to {
            width: 80%;
        }
    }
    
    @media(max-width:600px) {
        width: 100%;
        font-size: 22px;
    }
`;

const Content = styled.div`
    position: relative;
    top: 13vh;
    left: 10%;
    width: 60vw;
    display: grid;
`;

const Desc = styled.h2`
    width: 400px;
    font-size: 25px;
    margin-top: 15px;

    @media(max-width:600px) {
        width: 100%;
        font-size: 22px;
    }
`;

const GetStartedBtn = styled.button`
    width: 200px;
    margin-top: 50px;
    padding: 10px 0;
    border: 2px solid black;
    border-radius: 100px;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: bold;
    font-size: 21px;
    cursor: pointer;
`;

const Home: React.FC = () => {

    const handleGetStarted = () => {
        console.log("test")
    }

    return (
        <>
            <Wrapper>
                <Container>
                    <Content>
                        <p style={{ fontSize: '50px' }}>Happy Good Great Yeah</p>
                        <Desc>하하하하하오예오에오오오줄바꿈줄바꿈자동자동줄바꿈머하지머하지</Desc>
                        <Link to="/price" style={{ width: '200px' }}><GetStartedBtn>Get Started</GetStartedBtn></Link>
                    </Content>
                </Container>
            </Wrapper>
        </>
    )
}


export default Home;