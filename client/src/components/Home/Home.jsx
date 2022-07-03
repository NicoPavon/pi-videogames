import '../Home/Home.css'
import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getVideoGames, getGenres, orderByAlphabet, orderByRating, filterGamesByGenres, filterDBGames } from '../../actions';
import NavBar from '../NavBar/NavBar';
import Pagination from '../Pagination/Pagination';
import CardGame from '../CardGame/CardGame';

const Home = () => {
    const [Order, setOrder] = useState("")
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

/*paginas*/
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(15);
    const lastGameIndex = currentPage * gamesPerPage;
    const firstGameIndex= lastGameIndex - gamesPerPage;
    const { gamescopy, genres} = useSelector((store) => store);
    const currentGame= gamescopy.slice(firstGameIndex, lastGameIndex);

    const pageHandler = (page) =>{
        setCurrentPage(page);
    };
    const setPageOne = () => {
        setCurrentPage(1)
    };

    /*next y prev*/
    const nextPage = () =>{
        if(currentPage < Math.ceil(gamescopy.length/gamesPerPage)){
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if(currentPage -1 !== 0){
            setCurrentPage(currentPage - 1);
        }
    };
    
    useEffect(() =>{
        dispatch(getVideoGames());
        dispatch(getGenres());
    }, [dispatch]);

    const HandleReload = () => {
        window.location.reload();
    };

    const HandleOrderName=(e)=>{
        e.preventDefault();
        dispatch(orderByAlphabet(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    const HandleOrderRating=(e)=>{
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    const HandleFilterByGenres=(e)=>{
        e.preventDefault();
        dispatch(filterGamesByGenres(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    const HandleFilterDB= (e)=>{
        e.preventDefault();
        dispatch(filterDBGames(e.target.value));
        setCurrentPage(1);
    };
    

    // lo que retorna
return(
        <div>
            <div onChange={()=>{setPageOne()}}><NavBar/></div>
         <div className='filters-container'>
           <div className='title'>
            <h1>The Gamer's Guide</h1>
           </div>
                <button className='Refresh' onClick={HandleReload}>
                    Refresh
                </button>
          <select className="select" onChange={(e)=>{HandleOrderName(e)}} >
          <optgroup className="optionGroup" label="Alphabetic">
                    <option className="option" value="A-Z">from A to Z</option>
                    <option className="option" value="Z-A">from Z to A</option>
            </optgroup>  
          </select>
             <select  onChange={(e) => {HandleFilterByGenres(e)}}>
            <option  hidden>
              Genres
            </option>
            {genres.map((el) => {
              return (
                <option key={genres.indexOf(el)} className="option" value={el.name}>
                {el.name}
                </option>
              );
            })}
          </select> 
                <select onChange={(e)=>{HandleOrderRating(e)}}>
                    <option hidden>Rating</option>
                    <option value='Max-Min'>Max - Min</option>
                    <option value='Min-Max'>Min - Max</option>
                </select>
                <select onChange={e=>{HandleFilterDB(e)}}>
                    <option value='All'>All</option>
                    <option value='DB'>Games Added</option>
                    <option value='API'>Created</option>
                </select>
                </div>   
            <div className='Pag-div'>
                <button onClick={prevPage}>prev</button>
                <Pagination 
                gamesPerPage={gamesPerPage}
                gamesTotal={gamescopy.length}
                onSetPage={pageHandler}
                />
                <button onClick={nextPage}>next</button>
            </div>
            <div>
                <div className='container'>
                 { currentGame.length > 0 && !loader ? (
                        currentGame.map((e) => {
                     return (
                        <CardGame
                        key={currentGame.indexOf(e)}
                        id={e.id}
                        name={e.name}
                        background_image={e.background_image}
                        genres={e.genres}
                        rating={e.rating}/>
                        )})
                        ) : (<div className='container-load'>
                     <div className="loading"></div>
                     </div>)} 
                </div>

            </div>
        </div>
    )
}

export default Home;