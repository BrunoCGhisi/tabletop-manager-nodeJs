const express = require('express');
const playerRoutes = require('./src/routes/playerRoute');
const systemRoutes = require('./src/routes/systemRoute');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/player', playerRoutes);
app.use('/system', systemRoutes);

module.exports = app;