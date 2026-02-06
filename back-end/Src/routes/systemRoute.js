const express = require('express');
const SystemController = require('../controllers/systemController');

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

router.put('/',(
    req,
    res) => {
    SystemController.updateSystem(req, res);
});

router.delete('/',(
    req,
    res) => {
    SystemController.deleteSystem(req, res);
});

module.exports = router;