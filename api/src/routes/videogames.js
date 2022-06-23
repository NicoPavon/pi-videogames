const express = require('express');
const {getVideogame, getGameById, postVideogame} = require('../controllers/videogames');

const videogamesRouter = express.Router();

videogamesRouter.get('/', getVideogame);
videogamesRouter.get('/:id', getGameById);
videogamesRouter.post('/', postVideogame);



module.exports = videogamesRouter;