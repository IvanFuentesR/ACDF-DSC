const express = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('./../models/User');
const app = express();
const cors = require("cors");
app.use(cors())
app.get('/getUser', function(req, res) {
    try{
        let token = req.query.token;
        const decoded = jwt.verify(token,process.env.SEED_AUTENTICACION);
        res.status(200).json({ ok: true, data: decoded});
    }catch(error){
            console.log(error);
            return res.status(401).json({
                message :'Auth failed'
            })
        }
    /*if(jwt.verify(token,process.env.SEED_AUTHENTICACION, { expiresIn: process.env.CADUCIDAD_TOKEN}), function(err, response) {
        if(erro) {
            console.log(err);
            return false;
        }

        console.log(response)
    });*/
})

module.exports = app;