const {getGameGenres, getDbGenres} = require("./requires.js")

const getGenres = async(req, res) => {
    try{
        await getGameGenres();
        let genres = await getDbGenres();
        genres = genres.map((g) =>{
            return {
                name: g.name,
            }
        })
        res.status(200).send(genres)
    }
    catch(error) {
        res.status(400).send({errorMsg: error})
    }
};


module.exports = {
    getGenres,
    getDbGenres,
    getGameGenres,

}