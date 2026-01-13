package br.brunocghisi.tabletop_manager.Repository;

import br.brunocghisi.tabletop_manager.Model.Player;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PlayerBase {
    private List<Player> playerList = new ArrayList<>();

    public PlayerBase() {
        playerList.add(new Player(1, "Bruno Ghisi"));
        playerList.add(new Player(2, "Pedro Venicio"));
        playerList.add(new Player(3, "Gabriel Tramontin"));

        Player joao = new Player(4, "Joao");
        playerList.add(joao);
        Player bettina = new Player(5, "Bettina");
        playerList.add(bettina);
    }

    public List<Player> getPlayers() {
        return playerList;
    }



}


