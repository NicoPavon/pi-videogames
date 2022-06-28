const {Videogame, Genres} = require('../db');
const {getOneGame, getAllGames, getDbInfo} = require('./requires');


// ruta del get ------

const getVideogame = async (req,res) => {
    //console.log(1)
try {
    //console.log(2)
    const {name} = req.query;
    //console.log(3)
    const videogames = await getAllGames();
    if(name) {
        let videogame = await videogames.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))
        .slice(0, 16);
        videogame.length? 
        res.status(200).send(videogame) 
        : res.status(404).send("videogame not found.")
    } else {
        /*si no hay por query, que muestre todos*/
        res.status(200).send(videogames) 
    }
    //console.log(4)
    }
catch(error) {
    res.status(400).send({errorMsg: error})
    }
};

// ruta por id --------

const getGameById = async (req, res)=> {
try{
    const{id} = req.params
    if(id.length > 7 && typeof id === 'string'){
        const dbGame = await getDbInfo();
        const gameId = await dbGame.filter((e)=>e.id === id);
        return res.status(200).send(gameId)
    } else{ /* que busque en api*/
        const apiGame = await getOneGame(id);
        return res.status(200).send(apiGame)
    }
    }
catch(error){
    res.status(404).send({errorMsg:"videogame not found" })
    }
}

// ruta del post --------

const postVideogame = async(req, res)=>{
try{
    const {name,
        background_image,
        description,
        released,
        rating,
        genres,
        platforms,
        createdVideoGame,} = req.body;
    if(!name || !description || !genres) {
        res.status(400).send('Missing data')
    }
    let newGame = await Videogame?.create({
        name,
        background_image:
        background_image ||
        "https://i.pinimg.com/originals/ba/e1/de/bae1de77d6e67ae8bb6250941c4256c1.jpg",
        description,
        released,
        rating,
        platforms,
        createdVideoGame,
    })
    genres.forEach(async (e) => {
        let genreDb = await Genres.findAll({
            where: {
                name: e
            }
        })
        await newGame.addGenres(genreDb);
    })
    res.status(200).json(newGame);
    }
catch(error) {
    res.status(400).send({errorMsg: error});
    }
}

// ruta del put ------

const putGame = async (req, res) => {
try{
    const {id} = req.params;
    const gameupdId = await Videogame.findOne({
        where: {
            id: id,
        }
    });
    await gameupdId.update({
        name: req.body.name,
        rating: req.body.rating,
        released: req.body.released,
        description: req.body.description,
        platforms: req.body.platforms,
    });
    req.body.genres.forEach(async(e) => {
        let genreDb = await Genres.findAll({
            where: {
                name: e,
            }
        });
        await gameupdId.setGenres(genreDb)
    });
    res.status(200).send(gameupdId);
}
catch(error) {
    res.status(400).send({errorMsg: error})
}
};

// ruta del delete ------

const deleteGame = async(req, res) => {
try{
    const {id} = req.params; /*encuentra el id que coresponde*/
    const deletedGame = await Videogame.findByPk(id);
    if(deletedGame) {
        await deletedGame.destroy(); /*aca se borra*/
        return res.send("videogame deleted!")
    }
    res.status(400).send("videogame not found");
}
catch(error){
    res.status(400).send({errorMsg: error})
}
}



module.exports= {
    getVideogame,
    getGameById,
    postVideogame,
    putGame,
    deleteGame,
};