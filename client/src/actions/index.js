import axios from 'axios';

// todos los juegos -----
export function getVideoGames() {
    return async function (dispatch) {
        let games = await axios.get(`http://localhost:3001/videogames`);
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: games.data,
        })
    }
};

// solo un juego -----

export function getGameByName(name) {
    return async function (dispatch){
        let gameName = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({
            type: 'SEARCH_BY_NAME',
            payload: gameName.data,
        })
    }
};

// por id ------

export function getGameById(id) {
    return async function (dispatch) {
        let gameId = await axios.get('http://localhost:3001/videogames/'+ id);
        return dispatch({
            type: 'SEARCH_BY_ID',
            payload: gameId.data,
        })
    }
};

// por genero -----

export function getGenres() {
    return async function (dispatch) {
        let allGenres = await axios.get(`http://localhost:3001/genres`);
        return dispatch({
            type: 'GET_GENRES',
            payload: allGenres.data,
        })
    }
};

// crear ------

export function createGame(payload){
    return async function() {
        const info = axios.post(`http://localhost:3001/videogames`, payload);
        return {info};
    }
};

// modificar -----

export const updateGame = (id, data) => {
    return async function(dispatch) {
        await axios.put(`http://localhost:3001/videogames/${id}`, data);
        return dispatch({
            type: 'UPDATE_GAME',
        })
    }
};

// borrar ------

export const deleteGame = (id) => {
    return async function (dispatch){
        await axios.delete(`http://localhost:3001/videogames/${id}`);
        return dispatch({
            type: 'DELETE_GAME',
        })
    }
};

// ordenamientos y filtrados

export function orderByAlphabet(payload) {
    return {
        type: 'ORDER_BY_ALPHABET',
        payload,
    }
};

export function orderByRating(payload) {
    return {
        type: 'ORDER_BY_RATING',
        payload,
    }
};

//-------

export function filterGamesByGenres(payload) {
    return {
        type: 'FILTER_BY_GENRES',
        payload,
    }
};

export function filterDBGames(payload) {
    return {
        type: 'FILTER_DB_GAMES',
        payload,
    }
};

// reset ----

export function resetDetailPage() {
    return {
        type: 'CLEAR_STATE',
    }
};







