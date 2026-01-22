const express = require('express');
const SystemController = require('../controllers/systemController');
const PlayerController = require("../controllers/playerController");

const router = express.Router();

router.get('/', (
    req,
    res) => {
    SystemController.getSystems(req, res);
});

router.post('/',(
    req,
    res) => {
    SystemController.addSystem(req, res);
});

module.exports = router;