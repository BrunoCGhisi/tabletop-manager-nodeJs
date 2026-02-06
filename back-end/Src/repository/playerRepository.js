const Player = require('../models/Player');

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

    getPlayers(){ return this.players; }

    addPlayer(player){
        let lastId = this.players.length
        player.id = lastId + 1;
        this.players.push(player);
    }

    alterPlayer(id, name){
        let idNumber = Number(id);
        const player = this.players.find(p => p.id === idNumber);
        if (!player) {
            throw new Error(`${id} not found`);
        }
        else{
            player.name = name;
            return player;
        }

    }

    removePlayer(id){
        let idNumber = Number(id);
        const player = this.players.find(p => p.id === idNumber);
        const index = this.players.indexOf(player);
        if (!player) {
            throw new Error(`${id} not found`);
        }

        this.players.splice(index, 1)

    }

}

module.exports = new PlayerRepository();