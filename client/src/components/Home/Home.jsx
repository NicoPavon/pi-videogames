import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getVideoGames, getGenres } from '../../actions';

const Home = () =>{
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
    }
    const setPageOne = () => {
        setCurrentPage(1)
    }
    /*next y prev*/
    const nextPage = () =>{
        if(currentPage < Math.ceil(gamescopy.length/gamesPerPage)){
            setCurrentPage(currentPage + 1);
        }
    }
    const prevPage = () => {
        if(currentPage -1 !== 0){
            setCurrentPage(currentPage - 1);
        }
    }

    useEffect(() =>{
        dispatch(getVideoGames());
        dispatch(getGenres());
    }, [dispatch]);




}