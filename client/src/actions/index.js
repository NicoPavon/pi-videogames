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

export async function getGameById(id) {
    return async function (dispatch) {
        let gameId = await axios.get('http://localhost:3001/videogames/'+ id);
        return dispatch({
            type: 'SEARCH_BY_ID',
            payload: gameId.data,
        })
    }
};








