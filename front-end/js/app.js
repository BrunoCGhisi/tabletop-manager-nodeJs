import { playerRenderData } from "./renders/playerRender.js";
import { getPlayerData } from "./services/playerService.js";

async function init() {
    console.log("Iniciando aplicação..."); // Adicione esse log para testar
    const jogadores = await getPlayerData();

    if (jogadores) {
        playerRenderData(jogadores);
    } else {
        console.log("Nenhum jogador encontrado ou lista vazia.");
    }


}

init();



