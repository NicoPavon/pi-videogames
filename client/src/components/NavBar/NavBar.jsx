import './NavBar.css'
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {
    return(
        <nav>
            <div>
                <ul>
                    <li className='Intro'><a href='/'>Intro</a></li>
                    <li className='Home'><a href='/home'>Home</a></li>
                    <li className='NewGame'><a href="/create">New Game</a></li>
                    <li className='Searchbar'><SearchBar/></li>
                    <li className='About'><a className='active' href="/about">About</a></li>
                </ul>
            </div>

        </nav>

    )
}

export default NavBar;