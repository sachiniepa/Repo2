var express = require('express');
var Routes = express.Router();
var BookRoutes = require('./BookRoutes');

Routes.use('/books/',BookRoutes);

module.exports = Routes;