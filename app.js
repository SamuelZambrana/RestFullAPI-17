// GET -> GET PARA OBTENER RECURSOS -> find
// POST -> POST PARA CREAR RECURSOS -> create
// PUT -> PUT PARA ACTUALIZAR RECURSOS -> updateOne
// DELETE -> DELETE PARA ELIMINAR RECURSOS -> deteleOne
// PATCH -> PATCH PARA ACTUALIZAR PARCIALMENTE RECURSOS -> updateOne

const PORT = 3000;
const express = require('express');
const userRouter = require('./routers/userRouter');
const movieRouter = require('./routers/movieRouter');
const loginRouter = require('./routers/loginRouter');
require("dotenv").config();
const connectToDatabase = require('./db/connetDB');



const app = express();
app.use(express.json());

connectToDatabase();
app.use('/api/user', userRouter);
app.use('/api/movie', movieRouter);
app.use('/api/auth', loginRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

// http://localhost:3000/api/user
// http://localhost:3000/api/user/1
// http://localhost:3000/api/user/name/Diego Morales

// http://localhost:3000/api/movie