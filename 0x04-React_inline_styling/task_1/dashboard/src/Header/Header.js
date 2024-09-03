import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();
const Header = () => {
    return (
        <>
            <img width={200} height={200} src={logo} alt="Holberton School logo"></img>
            <h1>School dashboard</h1>
        </>
    );
};

export default Header;