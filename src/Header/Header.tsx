import React, { useState } from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa6";
import { Button } from 'evergreen-ui'
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Container = styled.div<{open: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 15px;
    
    @media(max-width:600px) {
        flex-direction: ${p => (p.open ? 'unset' : 'column')};
        align-items: flex-start;
    }
`;

const MenuList = styled.ul<{open: boolean}>`
    display: flex;
    align-items: center;
    list-style: none;
    padding-left: 0;

    @media(max-width:600px) {
        display: ${p => (p.open ? 'none' : 'flex')};
        width: 100%;
        flex-direction: ${p => (p.open ? 'unset' : 'column')};
        margin-top: ${p => (p.open ? '0' : '10px')};
    }
`;

const MenuItem = styled.li`
    margin: 8px 20px;
    cursor: pointer;

    &:hover {
        color: #7266df;
    }
`;

const ToggleBtn = styled.div`
    display: none;
    position: absolute;
    right: 30px;
    cursor: pointer;
    
    @media(max-width:600px) {
        display: block;
    }
`;

const Header: React.FC = () => {

    const [open, setOpen] = useState<boolean>(true);

    return (
        <>
            <Container open={open}>
                <div className="logo">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <FaWallet style={{ fontSize: '22px', marginRight: '10px' }} />
                        <span style={{ fontSize: '19px', fontWeight: 'bold' }}>JJ Wallet</span>
                    </Link>
                </div>

                <MenuList open={open}>
                    <MenuItem>Calendar</MenuItem>
                    <MenuItem>Analyze</MenuItem>
                    <Link to="/price"><MenuItem>Price</MenuItem></Link>
                    <MenuItem style={{ marginRight: open ? 0 : '20px' }}><Button>Sign In</Button></MenuItem>
                </MenuList>

                <ToggleBtn onClick={() => setOpen(!open)}><FaBars /></ToggleBtn>
            </Container>
        </>
    )
}


export default Header;