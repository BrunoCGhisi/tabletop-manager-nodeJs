const express = require('express');
const playerRoutes = require('./src/routes/playerRoute');
const systemRoutes = require('./src/routes/systemRoute');



const app = express();

app.use(express.json());
app.use('/player', playerRoutes);
app.use('/system', systemRoutes);


module.exports = app;
