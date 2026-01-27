const SystemRepository = require('../repository/systemRepository');
const System = require('../models/System');

class SystemController {
    getSystems(req, res) {
        res.json(SystemRepository.getSystems())
    }

    addSystem(req, res) {
        const { id, name } = req.body;

        if (!id || !name) {
            return res.status(400).json({ error: 'Id e nome são obrigatórios' });
        }

        const newSystem = new System(id, name)
        SystemRepository.addSystem(newSystem)
        res.status(201).json(newSystem);
    }
}

module.exports = new SystemController();