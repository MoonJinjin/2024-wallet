import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background: #202842;
    color: white;
`;

const Container = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`;

const MenuList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding-left: 0;
`;

const MenuItem = styled.li`
    margin: 8px 20px;
    cursor: pointer;
`;
const Footer: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <span style={{ fontSize: '14px' }}>@ 2024 MoonJinjin</span>
                    {/* <span style={{ fontSize: '19px', fontWeight: 'bold' }}>JJ Wallet</span> */}

                    {/* <MenuList>
                        <MenuItem>Calendar</MenuItem>
                        <MenuItem>Analyze</MenuItem>
                        <Link to="/price" style={{ color: 'white' }}><MenuItem>Price</MenuItem></Link>
                        <MenuItem style={{ marginRight: 0 }}><Button>Sign In</Button></MenuItem>
                    </MenuList> */}
                </Container>
            </Wrapper>
        </>
    )
}


export default Footer;