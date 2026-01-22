const SystemRepository = require('../repository/systemRepository');
const System = require('../models/System');

class SystemController {
    getSystems(req, res) {
        res.json(SystemRepository.getSystems())
    }

    addSystem(req, res) {
        const { id, name } = req.body;
        const newSystem = new System(id, name)
        SystemRepository.addSystem(newSystem)

        res.send(`Jogador ${name} criado com sucesso`);
    }
}

module.exports = new SystemController();