const users = require('../db/users');

const getAllUser =  (req, res) => {
   res.send(users);
}

const getUserById = (req, res) => {
    const { idUser } = req.params;
    const user = users.filter(user => user.id === parseInt(idUser));
    if (!user.length === 0) {
        return res.send('User not found');
    }
    res.send(user)
}  

const getUserByName = (req, res) => {
    const { name } = req.params;
    const user = users.find(user => user.nombre.includes(name));
    if (!user) {
        return res.send('User not found');
    }
    res.send(user)
}

const getUserAge = (req, res) => {
    const edad = parseInt(req.params.edad); // Corrección en la extracción del parámetro
    const user = users.find(user => user.edad === edad);

    if (!user) {
        return res.status(404).send('User not found'); // Usar código de estado 404 para mejor práctica
    }

    res.json(user); // Mejor práctica: devolver la respuesta en formato JSON
};

const addUser = (req, res) => {
   const newUser = req.body;
   console.log(newUser);
   res.send('User added');
}

module.exports = {
    getAllUser,
    getUserById,
    getUserByName,
    addUser,
    getUserAge
}