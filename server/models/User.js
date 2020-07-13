const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
let validRoles = {
  values: ["ADMIN", "USER"],
  message: "{VALUE} no es un rol válido",
};
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es necesario"],
  },
  lastname: {
    type: String,
    required: [true, "El apellido paterno es necesario"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El email es obligatorio"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  role: {
    type: String,
    default: "USER",
    required: [true],
    enum: validRoles,
  },
});

userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})
module.exports = mongoose.model('Usuario', userSchema)
