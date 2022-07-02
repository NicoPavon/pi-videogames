import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGameById, resetDetailPage, deleteGame, updateGame} from '../../actions';
import {Link, useParams, useNavigate} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


const Details = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const game = useSelector((state) => state.detail);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getGameById(id));
    return () =>{
        dispatch(resetDetailPage())
    }
    }, [dispatch, id]);

    const handleUpdate = () => {
        dispatch(updateGame(id));
        navigate(`/updategame/${id}`);
    };
    const handleDelete = ()=>{
        dispatch(deleteGame(id));
        navigate('/home');
        alert('Game delete');
    };

    // lo que retorna

    return game.length > 0 ? (
        <div>
            <div>
              <NavBar/>
            </div>
            <div>
                <button onClick={handleDelete}>delete</button>
                <Link to={`/updategame/${id}`}>
                    <button onClick={handleUpdate}>update</button>
                </Link>
            </div>
            <div className='container-'> 
                <img className='bck-img' src={game[0].background_image} width='430px' height='220px' alt={game.name} />
                <div><h1 className='title'>{game[0].name}</h1></div>
                <p ><strong className='id-'>ID : </strong>{game[0].id}</p>
                <p><strong>Genres : </strong>{game[0].genres?.join(', ')}</p>
                <p><strong>Rating : </strong>{game[0].rating}</p>
                <p><strong>Released : </strong>{game[0].released}</p>
                <p><strong>Platforms : </strong>{game[0].platforms?.join(', ')}</p>
                <p><strong>Description : </strong></p>
                <p dangerouslySetInnerHTML={{ __html: game[0].description }}/>

                <div className='return-home'>
                    <Link to='/Home'>
                        <button className='btn-return'>
                            <strong>back to Home</strong>
                        </button>
                    </Link>
                </div>

            </div>
          </div>
      ) : (
        <div className='container-'> 
          <div>
            <NavBar/>
          </div>
                <img className='bck-img' src={game.background_image} width='430px' height='220px' alt={game.name} />
                <div><h1 className='title'>{game.name}</h1></div>
                <p ><strong className='id-'>ID : </strong>{game.id}</p>
                <p><strong>Genres : </strong>{game.genres?.join(', ')}</p>
                <p><strong>Rating : </strong>{game.rating}</p>
                <p><strong>Released : </strong>{game.released}</p>
                <p><strong>Platforms : </strong>{game.platforms?.join(', ')}</p>
                <p><strong>Description : </strong></p>
                <p dangerouslySetInnerHTML={{ __html: game.description }}/>

                <div className='return-home'>
                    <Link to='/Home'>
                        <button className='btn-return'>
                            <strong>back to Home</strong>
                        </button>
                    </Link>
                </div>

                </div>
      )
    };
    
    export default Details
