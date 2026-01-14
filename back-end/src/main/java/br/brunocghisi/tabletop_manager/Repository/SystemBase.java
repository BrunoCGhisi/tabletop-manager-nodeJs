import br.brunocghisi.tabletop_manager.ModelP;

@Repository
public class SystemBase{
    private List<System> systemList = new ArrayList<>();

    public SystemBase(){
        systemList.add(new System(1, "Dungeons & Dragons"));
        systemList.add(new System(2, "Assimilação"));
        systemList.add(new System(3, "Ordem Paranormal"));




    }
}