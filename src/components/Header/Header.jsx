import React from 'react';
import './Header.scss';
import logo from '../../images/LOGO.svg';
import { NavLink } from 'react-router-dom';

function Header () {

    return <div className='header'>
        <img src={logo} alt="logo"/>
        <nav className='navBar'>
        <ul>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? 'active-link': '')} >Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? 'active-link': '')}>A Propos</NavLink>
            </li>
        </ul>
        </nav>
    </div>;
}
export default Header;