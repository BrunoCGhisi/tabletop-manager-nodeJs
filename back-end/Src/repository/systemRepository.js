const System = require("../models/System");
const {getSystemData} = require("../../../front-end/js/services");

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

    addSystem(system){ this.systems.push(system); }

    alterSystem(id, name){
        const system = this.systems.find(s => s.id === id);
        if (!system) {
            throw new Error(`${id} not found`);
        }

        system.name = name;
        return system;
    }

}

module.exports = new SystemRepository();