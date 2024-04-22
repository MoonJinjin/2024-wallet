import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 63px);
    padding-top: 15px;
    
    @media(max-width:600px) {
        height: 100%;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #eff0f2;
    animation: fadein 1s;

    @keyframes fadein {
        from {
            width: 80%;
        }
        to {
            width: 100%;
        }
    }
`;

const Content = styled.div`
    position: relative;
    top: 8vh;
    margin: auto;
    display: grid;
    
    @media(max-width:1100px) {
        width: 90%;
    }
    @media(max-width:600px) {
        position: unset;
    }
`;

const Title = styled.h2`
    font-size: 30px;
    text-align: center;

    @media(max-width:600px) {
        margin-top: 30px;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 35px;
    margin-top: 40px;
    
    @media(max-width:600px) {
        flex-direction: column;
        margin-bottom: 30px;
    }
`;

const Card = styled.div`
    flex: 1;
    max-width: 300px;
    height: 450px;
    position: relative;
    border-radius: 35px;
    text-align: center;
    padding: 10px;
    box-shadow: 0 0 20px rgba(100,100,100,0.3);
    
    @media(max-width:600px) {
        max-width: none;
    }
`;

const PriceName = styled.h3`
    font-size: 20px;
    margin-top: 15px;
`;

const PriceVal = styled.h2`
    font-size: 38px;
    margin: 20px 0 5px 0;
`;

const ServiceItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 17px;
    margin-bottom: 5px;
`;

const PriceItem = styled.div`
    width: 70%;
    margin: auto;
    text-align: left;
`;

const GetStartedBtn = styled.button`
    position: absolute;
    left: calc(50% - 82px);
    bottom: 30px;
    width: 170px;
    padding: 10px 0;
    border: 1.5px solid black;
    border-radius: 100px;
    font-size: 17px;
    cursor: pointer;
    
    @media(max-width:600px) {
        position: unset;
        margin-block: 15px;
    }
`;

const Price: React.FC = () => {

    const freeItem: string[] = ['Manage with calendar', 'Category', 'Analyze']
    const enterItem: string[] = ['Manage with calendar', 'Category', 'Analyze', 'Excel download function']

    const handleSubscribe = () => {
        console.log("Subscribe")
    }

    const makeCardItem = (priceName: string, priceVal: number, items: string[], theme: string) => {
        var darkColor = theme === 'dark' ? 'white' : '#202842';
        var lightColor = theme === 'dark' ? '#202842' : 'white';

        return (
            <Card style={{ color: darkColor, background: lightColor }}>
                <PriceName>{priceName}</PriceName>
                <PriceVal>${priceVal}</PriceVal>
                <p style={{ color: theme === 'dark' ? 'lightgray' : 'gray', marginBottom: '65px' }}>/month</p>
                <PriceItem>
                    {items.map(item => {
                        return <ServiceItem><FaCheckCircle style={{ color: darkColor, marginRight: '8px' }} /> {item}</ServiceItem>
                    })}
                </PriceItem>
                <GetStartedBtn onClick={() => handleSubscribe()} style={{ color: lightColor, background: darkColor }}>Subscribe</GetStartedBtn>
            </Card>
        )
    }

    return (
        <>
            <Wrapper>
                <Container>
                    <Content>
                        <Title>Select your Plan</Title>
                        <CardWrapper>
                            {makeCardItem('Free', 0, freeItem, 'light')}
                            {makeCardItem('Enterprise', 10, enterItem, 'dark')}
                        </CardWrapper>
                    </Content>
                </Container>
            </Wrapper>
        </>
    )
}


export default Price;