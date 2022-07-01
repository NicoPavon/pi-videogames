import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {
    return(
        <nav>
            <div>
                <ul>
                    <li><a href='/'>Intro</a></li>
                    <li><a href='/home'>Home</a></li>
                    <li><a href="/create">New Game</a></li>
                    <li><SearchBar/></li>
                </ul>
            </div>

        </nav>

    )
}

export default NavBar;