import React from 'react';
import './Header.scss';
import logo from '../../images/LOGO.svg'

function Header (){
    return <div className='header'>
        <img src={logo} alt="logo"/>
    </div>;
}
export default Header;