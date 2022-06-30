import React from 'react';
import { Link} from 'react-router-dom';


const CardGame = ({ id, name, background_image, genres, rating}) =>{
    return(
        <div>
        <div>
            <Link to={"/home/" + id}>
                <div>
                    <img className="image-card" src={background_image} alt='not found' width="200px" height="250px"/>
                </div>
            </Link>
        <div>
            <Link to={"/home/" + id}>
                <h3 className="content-card">{name}</h3>
                <h3 className="content-card">Genres:</h3>{genres.map((e)=> <div className="content-card" key={genres.indexOf(e) + name}>{e}</div>)}
                <h3 className="content-card">Rating: {rating}</h3>
            </Link>
        </div>
        </div>
        </div>

    )
};

export default CardGame;