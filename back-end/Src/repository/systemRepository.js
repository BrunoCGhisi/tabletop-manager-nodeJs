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

    addSystem(system){ this.systems.push(system); }

}

module.exports = new SystemRepository();