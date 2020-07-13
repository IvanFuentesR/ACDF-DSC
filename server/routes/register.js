const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('./../models/User');
const app = express();
app.post('/register', function (req, res) {
    console.log(req.query);
  let body = req.query;
  let { name, lastname, email, password, role } = body;
  let usuario = new Usuario({
    name,
    lastname,
    email,
    password: bcrypt.hashSync(password, 10),
    role
  });
  
usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
         ok: false,
         err,
      });
    }
    res.json({
          ok: true,
          usuario: usuarioDB
       });
    })
});

module.exports = app;