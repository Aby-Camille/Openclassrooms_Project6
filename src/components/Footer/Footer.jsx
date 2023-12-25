import React from 'react';
import './Footer.scss';
import footerLogo from '../../images/logo-footer.svg';

function Footer () {
    return <footer className='footer'>
        <img src={footerLogo} alt="logo" className='footer-logo'/>
        <p className='footer-note'>© 2020 Kasa. All rights reserved</p>
    </footer>
}
export default Footer;