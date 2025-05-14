const userModel = require('../models/userModel')
const movieModel = require('../models/movieModel')

const getAllUser = async (req, res) => {
    try {
      const users = await userModel.find();
      if(!users){
        return res.status(200).send("No hay usuario");
      }
      res.status(200).send(users)
    } catch (error) {
      res.status(500).send({ status: "Failed", error: error.message });
    }
  };

const getUserById =  async (req, res) => {
   try {
     const idUser = req.params.idUser;
     const usersId = await userModel
            .findById(idUser)
            .populate({ path: "favourites", select: "title description" });
     if(!usersId){
        return res.status(200).send("No hay usuario");
      }
      res.status(200).send(usersId)
   } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
   }
}  

const getUserByName = async (req, res) => {
    try {
      const name = req.params.name;
      const userName = await userModel.find({ name: new RegExp(name, "i") }); // Búsqueda flexible e insensible a mayúsculas
      if (!userName.length) {
        return res.status(200).send("No hay usuarios con ese nombre.");
    }
      res.status(200).send(userName);
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message });
    }
}

const deletedUser = async (req, res) => {
    try {
     const idUser = req.params.idUser;
     const usersId = await userModel.findByIdAndDelete(idUser);
     if(!usersId){
        return res.status(200).send("No hay usuario");
      }
      res.status(200).send(usersId)
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message });
    }
}

const replaceUser = async (req, res) => {
    try {
     const idUser = req.params.idUser;
     const newUser = req.body;
     const replaceUser = await userModel.findOneAndReplace(
        {_id: idUser},
        newUser,
        {
            new: true,
            runValidators: true
        }
    );
     if(!replaceUser){
        return res.status(200).send("No hay usuario");
      }
      res.status(200).send(replaceUser)
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
     const idUser = req.params.idUser;
     const newUser = req.body;
     const replaceUser = await userModel.findByIdAndUpdate(
        {_id: idUser},
        newUser,
        {
            new: true,
            runValidators: true
        }
    );
     if(!replaceUser){
        return res.status(200).send("No hay usuario");
      }
      res.status(200).send(replaceUser)
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message });
    }
}

const addUser = async (req, res) => {
    try {
      const newUser = req.body;
      await userModel.create(newUser)
      res.status(200).send("El usuario se ha creado correctamente");
    } catch (error) {
      res.status(500).send({ status:"Failed", error: error.message })
    }
};

const addFavouriteMovie = async (req, res) => {
    try {
      const { idUser, idMovie } = req.params;
      const user = await userModel.findById(idUser);
      if (!user) {
        return res.status(200).send("No hay usuario");
      }
   
      const movie = await movieModel.findById(idMovie);
      if (!movie) {
        return res.status(200).send("No hay peli");
      }
   
      if (user.favourites.includes(idMovie)) {
        return res.status(200).send("La película ya está en favoritos");
      }
   
      user.favourites.push(idMovie);
      user.save();
   
      res.status(200).send({ status: "Success", data: user });
    } catch (error) {
      res.status(500).send({ status: "Failed", error: error.message });
    }
  };

const deletedFavouriteMovie = async (req, res) => {
    try {
      const { idUser, idMovie} = req.params;

      const user = await userModel.findById(idUser);
      if(!user){
        return res.status(200).send("No hay usuario");
      }

      const movie = await movieModel.findById(idMovie);
      if(!movie){
        return res.status(200).send("No hay peli");
      }

      if (user.favourites.includes(idMovie)) {
        user.favourites.pull(idMovie);
        user.save()
      }
      res.status(200).send("El usuario ha eliminado la pelicula de favoritos");
    } catch (error) {
        res.status(500).send({ status:"Failed", error: error.message })
    }
}

module.exports = {
    getAllUser,
    getUserById,
    getUserByName,
    addUser,
    deletedUser,
    replaceUser,
    updateUser,
    addFavouriteMovie,
    deletedFavouriteMovie
}