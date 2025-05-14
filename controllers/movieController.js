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
      const movie = req.params;
      const users = await movieModel.find();
      if(!users){
        return res.status(200).send("No hay usuario");
      }
      res.status(200).send(users)
    } catch (error) {
      res.status(500).send({ status: "Failed", error: error.message });
    }
  };

const getMovieById = async (req, res) => {
    try {
        const idMovie = req.params.idMovie
        const movie = await movieModel.findById(idMovie);
        if(!movie){
            return res.status(200).send("No hay usuario");
          }
          res.status(200).send(movie)
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message });
    }
}

const getMovieByTitle = async (req, res) => {
    try {
        const title= req.params.title
        const movie = await movieModel.find({ title: new RegExp(title, "i") });
        if(!movie){
            return res.status(200).send("No hay usuario");
          }
          res.status(200).send(movie)
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message });
    }
}

module.exports = {
    addMovie,
    getAllMovie,
    getMovieById,
    getMovieByTitle,
    //deletedMovie,
    //replaceMovie,
    //updateMovie,
}