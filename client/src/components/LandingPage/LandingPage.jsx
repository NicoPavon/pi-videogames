import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage() {
    return(
        <div className="background">

            <div className="welcomebox">
                <h1 className='welcome'>Retrogames!</h1>
            </div>
            <div>
                <Link to= '/Home'>
            <button className="button"><span>press start</span></button>
                </Link>
            </div>

        </div>

    )
};