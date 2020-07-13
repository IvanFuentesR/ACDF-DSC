const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(require('./login'));
app.use(require('./getUser'));
app.use(require('./register'));
module.exports = app;