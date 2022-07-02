import './LandingPage.css'
import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage() {
    return(
        <div className="background">

            <div className="welcomebox">
                <h1 className='welcome'>Welcome to the Gamer Guide!</h1>
            </div>
            <div className='boton'>
                <Link to= '/Home'>
                <button data-text="Awesome" class="button">
                    <span class="actual-text">&nbsp;press start&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">&nbsp;come on!&nbsp;</span>
                </button>
                </Link>
            </div>

        </div>

    )
};