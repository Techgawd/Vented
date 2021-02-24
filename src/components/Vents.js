import React from 'react';
import '../App.css';
// import vents from '../images/vents.png';

function Vents() {
    return (
        <div className="Vents">
            {/* <img className='vents' alt="" src={vents} /> */}
            <div className="ventBox">
                <div class="card">
                    {/* <h1>FaceBook</h1> */}
                    <h3>I love my life and manifesting is SO fun!!!</h3>
                </div>
                <div class="card">
                    <h3>My therapist told me to come here. I'm not sure how this helps but I'm trying it.</h3>
                </div>
                <div class="card">
                    <h3>I'm a virgin and I don't care...like I don't want to rush to do something just because society says I should. I don't feel less cool. I just didn't have sex yet.</h3>
                </div>
            </div>
        </div>
    );
}

export default Vents;