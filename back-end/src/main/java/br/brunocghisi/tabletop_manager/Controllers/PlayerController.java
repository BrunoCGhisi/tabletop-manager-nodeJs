package br.brunocghisi.tabletop_manager.Controllers;

import br.brunocghisi.tabletop_manager.Model.Player;
import br.brunocghisi.tabletop_manager.Repository.PlayerBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tabletop-manager")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PlayerController {

    @Autowired
    private PlayerBase repository;

    @GetMapping
    public List<Player> getPlayers(){
        return  repository.getPlayers();
    }

    @PostMapping
    public String addPlayer(@RequestBody Player newPlayer){
        repository.getPlayers().add(newPlayer);
        return "Jogador" + newPlayer.getNome() + "criado com sucesso!";

    }


}
