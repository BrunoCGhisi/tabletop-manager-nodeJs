package br.brunocghisi.tabletop_manager.Model;

public class System {
    private Integer id;
    private String nome;


public System() {}

public System(Integer id, String nome) {
    this.id = id;
    this.nome = nome;
}

public Integer getId() {
    return id;
}

public String getNome() {
    return nome;
}

public void setId(Integer id) {
    this.id = id;
}

public void setNome(String nome) {
    this.nome = nome;
}

}