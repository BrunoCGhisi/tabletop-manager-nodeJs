const PlayerRepository = require('../repository/playerRepository');
const Player = require('../models/player');

class PlayerController {
    getPlayers(req, res) {
        res.json(PlayerRepository.getPlayers())
    }

    addPlayer(req, res) {
        const { id, name } = req.body;

        if (!id || !name) {
            return res.status(400).json({ error: 'Id e nome são obrigatórios' });
        }

        const newPlayer = new Player(id, name)
        PlayerRepository.addPlayer(newPlayer)
        res.status(201).json(newPlayer);
    }
}

module.exports = new PlayerController();