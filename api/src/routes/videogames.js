const express = require('express');
const {getVideogame, getGameById, postVideogame, putGame, deleteGame} = require('../controllers/videogames');

const videogamesRouter = express.Router();

videogamesRouter.get('/', getVideogame);
videogamesRouter.get('/:id', getGameById);
videogamesRouter.post('/', postVideogame);
videogamesRouter.put('/:id', putGame);
videogamesRouter.delete('/:id', deleteGame);



module.exports = videogamesRouter;