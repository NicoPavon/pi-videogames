import React from 'react';
import {Link} from 'react-router-dom';
import './error404.css';

const Page404 = () =>{
    return(
        <div className='container-404'>
            <div>
                <p className='write-404'>Error 404! Press the Home button!</p>
            </div>
            
            <div className='centrando'>
                <Link to='/Home'>
            <button className='btn-class1'>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Page404;
