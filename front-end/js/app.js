import { getPlayerData, getSystemData } from "./services";
import { playerRenderData, systemRenderData } from "./renders";

async function app() {
    const [jogadores, sistemas] = await Promise.all([
        getPlayerData(),
        getSystemData()
    ]);

    if (jogadores) playerRenderData(jogadores);
    if (sistemas) systemRenderData(sistemas);

}

app();



