const PlayerRepository = require('../repository/playerRepository');
const Player = require('../models/player');
const SystemRepository = require("../repository/systemRepository");

class PlayerController {
    getPlayers(req, res) {
        res.json(PlayerRepository.getPlayers())
    }

    addPlayer(req, res) {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Nome são obrigatórios' });
        }

        const newPlayer = new Player(null, name)
        PlayerRepository.addPlayer(newPlayer)
        res.status(201).json(newPlayer);
    }

    updatePlayer(req, res) {
        const { id, name } = req.body;
        if (!id || !name) {
            return res.status(400).json({ error: 'Id e nome são obrigatórios' });
        }

        try {
            const updatedSystem = SystemRepository.alterSystem(id, name);
            res.json(updatedSystem);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }


}

module.exports = new PlayerController();