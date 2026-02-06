const express = require('express');
const PlayerController = require('../controllers/PlayerController');

const router = express.Router();

router.get('/', (
    req,
    res) => {
    PlayerController.getPlayers(req, res);
});

router.post('/', (
    req,
    res) => {
    PlayerController.addPlayer(req, res);
});

router.put('/', (
    req,
    res) => {
    PlayerController.updatePlayer(req, res);
});

module.exports = router;