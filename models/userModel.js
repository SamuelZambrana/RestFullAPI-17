const mongoose = require("mongoose");

// Nos traemos todos los esquemas y lo guardamos en la cosntante
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  lastName: {
    type: String,
    required: [true, "El apellido es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: [true, "El correo ya existe"],
  },
  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  favourites: {
    type: [ mongoose.Schema.Types.ObjectId ],
    ref: "Movie",
  },
});

userSchema.pre(/^find/, function(next) {
    this.select('-password');
    next();
  });
 
const userModel = mongoose.model("User", userSchema, "user");
 
module.exports = userModel;