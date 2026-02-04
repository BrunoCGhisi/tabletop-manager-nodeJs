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

    addSystem(system){
        const list = this.getSystems()
        const verify = list.some(s => s.id === system.id)
        if (!verify){
            this.systems.push(system);
        }
        else{
            throw new Error(`Id: ${system.id} already exist!`);
        }
    }

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