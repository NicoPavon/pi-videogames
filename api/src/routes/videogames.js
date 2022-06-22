const express = require('express');
const {getVideogame} = require('../controllers/videogames');

const videogamesRouter = express.Router();

videogamesRouter.get('/', getVideogame);



module.exports = videogamesRouter;