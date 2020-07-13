require('./config/config');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Configuracion global de rutas
app.use(require('./routes/index'));

let renderHTML = path.resolve(__dirname, '../public/index.html');
app.get('/', function (req, res) {
  res.send('hello world');
})

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
      
  console.log("Base de datos online");
}).catch(error => {
  console.log("No se pudo conectar a la base de datos, error: " + error);
});

app.listen(process.env.PORT, ()=> {
  console.log("Escuchando en puerto 3000");
})

/*server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/