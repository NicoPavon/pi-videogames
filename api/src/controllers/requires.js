const axios = require("axios");
const { Videogame, Genres} = require("../db");
const API_KEY = process.env


// ruta del get api ----------

const getApiInfo = async() =>{
    const apiUrl= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const apiGames= await apiUrl.map((e) =>{
        return{
            id: e.id,
            name: e.name,
            background_image: e.background_image,
            rating: e.rating,
            genres: e.genres.map((gender) => gender.name),
            platforms: e.platforms.map((platform) => platform.platform.name),
        }
    })
    return apiGames;
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

// -------------------


module.exports={
    getApiInfo,
    getDbInfo,
    getAllGames,
   
};