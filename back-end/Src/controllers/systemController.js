const SystemRepository = require('../repository/systemRepository');
const System = require('../models/System');

class SystemController {
    getSystems(req, res) {
        res.json(SystemRepository.getSystems())
    }

    addSystem(req, res) {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Nome são obrigatórios' });
        }

        const newSystem = new System(null, name)
        SystemRepository.addSystem(newSystem)
        res.status(201).json(newSystem);
    }

    updateSystem(req, res) {
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

    deleteSystem(req, res) {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ error: 'Id é obrigatório' });
        }

        try {
            const updatedSystem = SystemRepository.removeSystem(id);
            res.json(updatedSystem);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new SystemController();