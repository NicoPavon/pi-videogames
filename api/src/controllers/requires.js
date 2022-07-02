const axios = require('axios');
const { Videogame, Genres} = require("../db");
const {API_KEY} = process.env


// ruta del get api ----------

const getApiInfo = async() =>{
    const videogames = [];
    let url = `https://api.rawg.io/api/games?key=${API_KEY}`;
    for (let i = 1; i < 8; i++) {
        let gamesPages = await axios.get(url);
         gamesPages.data?.results.forEach((e) => {
           videogames.push({
           id: e.id,
           name: e.name,
           rating: e.rating,
           released: e.released,
           background_image: e.background_image,
           genres: e.genres.map((genre) => genre.name),
           platforms: e.platforms.map((platform) => platform.platform.name),
           });
        });
        url = gamesPages.data.next;
    };
    return videogames;
}

// ruta del get base de datos -----

const getDbInfo = async() => {
    let dbData = await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    });
    let dbGames = dbData.map((e) => {
    return {
        id: e.id,
        name: e.name,
        rating: e.rating,
        background_image: e.background_image,
        genres: e.genres.map((e) => e.name),
        description: e.description,
        released: e.released,
        createdVideoGame: true,
        plataforms: e.plataforms,
      };
});
    return dbGames;
}

// las concateno ----

const getAllGames = async() => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const totalInfo = apiInfo.concat(dbInfo);
    return totalInfo;
}

// encuentra un videojuego------

const getOneGame = async(id) =>{
    const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    const videogame = {
        id: game.data.id,
        name: game.data.name,
        rating: game.data.rating,
        released: game.released,
        background_image: game.data.background_image,
        genres: game.data.genres.map(g => g.name),
        platforms: game.data.parent_platforms.map(p => p.platform.name),
        description: game.data.description,
    };
    return videogame;
}

// generos de api en db----

const getGameGenres = async() => {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);  
    const genres = genresApi.data.results.map((g) => {
       return {name: g.name}
       });
    let getAllGenres = await Genres.findAll();
        if(getAllGenres.length === 0 ){
         await Genres.bulkCreate(genres);
    }

}

// generos en db -------

const getDbGenres = async() => {
    let genresDb = await Genres.findAll();
    genresDb = genresDb.map((g)=> g.toJSON());
    return genresDb;
}



// -------------------


module.exports={
    getApiInfo,
    getDbInfo,
    getAllGames,
    getOneGame,
    getGameGenres,
    getDbGenres,
};