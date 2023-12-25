import React from 'react';
import './Header.scss';
import logo from '../../images/LOGO.svg'

function Header (){
    return <div className='header'>
        <img src={logo} alt="logo"/>
        <nav className='navBar'>
        <ul>
            <li>
                <a href="/" className='navLink'>Accueil</a>
            </li>
            <li>
                <a href="/about" className='navLink'>A Propos</a>
            </li>
        </ul>
        </nav>
    </div>;
}
export default Header;