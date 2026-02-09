const System = require("../models/System");

class SystemRepository {
    constructor(){
        this.systems = [
            new System(1, "Assimilação RPG"),
            new System(2, "Ordem Paranormal"),
            new System(3, "D&D 5e"),
            new System(4, "GURPS"),
        ];
    }

    getSystems(){ return this.systems; }

    addSystem(system){
        let lastId = this.systems.at(-1).id;
        system.id = (lastId + 1)
        this.systems.push(system);
    }

    alterSystem(id, name){
        let idNumber = Number(id);
        const system = this.systems.find(s => s.id === idNumber);
        if (!system) {
            throw new Error(`${id} not found`);
        }
        system.name = name;
        return system;
    }

    removeSystem(id){
        let idNumber = Number(id);
        const index = this.systems.findIndex(s => s.id === idNumber);
        if (index === -1) {
            throw new Error(`${id} not found`);
        }
        return this.systems.splice(index, 1);
    }
}

module.exports = new SystemRepository();