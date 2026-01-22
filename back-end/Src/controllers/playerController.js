const PlayerRepository = require('../repository/playerRepository');
const Player = require('../models/player');

class PlayerController {
    getPlayers(req, res) {
        res.json(PlayerRepository.getPlayers())
    }

    addPlayer(req, res) {
        const { id, name } = req.body;
        const newPlayer = new Player(id, name)
        PlayerRepository.addPlayer(newPlayer)

        res.send(`Jogador ${name} criado com sucesso`);
    }
}

module.exports = new PlayerController();