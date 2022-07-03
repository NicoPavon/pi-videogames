import React from 'react';
import {Link} from 'react-router-dom';
import './error404.css';

const Page404 = () =>{
    return(
        <div className='container-404'>
        <div><p className='write-404'>, PRESS THE HOME BUTTON!</p></div>
        <div className='container-btn-404'>
           <Link to='/Home'>
            <button className='btn-class'>
                <strong>Home</strong>
            </button>
            </Link>
        </div>
    </div>
    )
}

export default Page404;
