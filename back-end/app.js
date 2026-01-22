const express = require('express');
const playerRoutes = require('./src/routes/playerRoute');

const app = express();

app.use(express.json());
app.use('/player', playerRoutes);

module.exports = app;
