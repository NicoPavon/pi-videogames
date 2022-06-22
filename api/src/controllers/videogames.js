const {Videogame, Genres} = require('../db');
const {getOneGame, getAllGames, getDbInfo} = require('./requires');


// ruta del get ------

const getVideogame = async (req,res) => {
    console.log(1)
try {
    console.log(2)
    const {name} = req.query;
    console.log(3)
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
    console.log(4)
}
catch(error) {
    res.status(400).send({errorMsg: error})
}
};

// ruta por id --------



module.exports= {
    getVideogame,
};