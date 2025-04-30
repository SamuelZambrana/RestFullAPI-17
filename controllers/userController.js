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

const addUser = (req, res) => {
   const newUser = req.body;
   console.log(newUser);
   res.send('User added');
}

module.exports = {
    getAllUser,
    getUserById,
    getUserByName,
    addUser
}