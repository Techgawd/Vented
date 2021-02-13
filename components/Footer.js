import React from 'react';
import '../App.css';
import logo from '../images/logo.png';

function Footer() {
    return (
        <div className="Footer">
            Project By:
            <img className='logo' alt="" src={logo} />
        </div>
    );
}

export default Footer;