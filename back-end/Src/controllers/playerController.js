const PlayerRepository = require('../repository/playerRepository');
const Player = require('../models/player');

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
            const updatedPlayer = PlayerRepository.alterPlayer(id, name);
            res.json(updatedPlayer);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    deletePlayer(req, res) {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ error: 'Id é obrigatório' });
        }

        try {
            const updatedPlayer = PlayerRepository.removePlayer(id);
            res.json(updatedPlayer);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new PlayerController();