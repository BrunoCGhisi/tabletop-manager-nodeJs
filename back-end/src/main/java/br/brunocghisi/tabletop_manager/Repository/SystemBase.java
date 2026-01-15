package br.brunocghisi.tabletop_manager.Repository;

import br.brunocghisi.tabletop_manager.Model.System;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SystemBase{
    private List<System> systemList = new ArrayList<>();

    public SystemBase(){
        systemList.add(new System(1, "Dungeons & Dragons"));
        systemList.add(new System(2, "Assimilação"));
        systemList.add(new System(3, "Ordem Paranormal"));

    }
}