import { getPlayerData, getSystemData } from "./services";
import { playerRenderData, systemRenderData } from "./renders";
import { registerPlayerHandler } from "./handlers";

async function app() {
    registerPlayerHandler();

    const [jogadores, sistemas] = await Promise.all([
        getPlayerData(),
        getSystemData()

    ]);

    if (jogadores) playerRenderData(jogadores);
    if (sistemas) systemRenderData(sistemas);

}

app();



