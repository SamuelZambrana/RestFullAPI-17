const movieModel = require('../models/movieModel')

const addMovie = async (req, res) => {
    try {
      const newMovie = req.body;
      await movieModel.create(newMovie)
      res.status(200).send("La pelicula se ha creado correctamente");
    } catch (error) {
      res.status(500).send({ status:"Failed", error: error.message })
    }
};

const getAllMovie = async (req, res) => {
    try {
      const users = await movieModel.find();
      if(!users){
        return res.status(200).send("No hay usuario");
      }
      res.status(200).send(users)
    } catch (error) {
      res.status(500).send({ status: "Failed", error: error.message });
    }
  };


module.exports = {
    addMovie,
    getAllMovie
}