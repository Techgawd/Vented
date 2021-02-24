import React from 'react';
import '../App.css';
import vented from '../images/vented.png';

function Nav() {
    return (
        <div className="Nav">
            <img className='vented' alt="" src={vented} />
        </div>
    );
}

export default Nav;