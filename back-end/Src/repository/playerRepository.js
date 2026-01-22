const Player = require('../model/Player');

class PlayerRepository {
    constructor() {
        this.players = [
            new Player(1, 'Bruno Ghisi'),
            new Player(2, 'Pedro Venicio'),
            new Player(3, 'Erik de Freitas'),
            new Player(4, 'Gabriel Tramontin'),
            new Player(5, 'João Augusto'),
            new Player(6, 'Pedro Ribeiro'),
        ];
    }

    getPlayers(){
        return this.players
    }

    addPlayer(){
        this.players.push(player);
    }
}

module.exports = new PlayerRepository();
