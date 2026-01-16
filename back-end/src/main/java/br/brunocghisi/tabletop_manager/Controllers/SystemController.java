package br.brunocghisi.tabletop_manager.Controllers;

import br.brunocghisi.tabletop_manager.Model.Player;
import br.brunocghisi.tabletop_manager.Model.System;
import br.brunocghisi.tabletop_manager.Repository.SystemBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/system")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SystemController {

    @Autowired
    private SystemBase repository;

    @GetMapping
    public List<System> getSystems(){ return repository.getSystemList();}

    @PostMapping
    public String postSystem(@RequestBody System newSystem){
        repository.getSystemList().add(newSystem);
        return "Sistema" + newSystem.getNome() + "criado com sucesso";
    }

}
