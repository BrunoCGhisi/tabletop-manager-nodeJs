import { getPlayerData } from "./services/playerService.js";
import { playerRenderData } from "./renders/playerRender.js";

import { getSystemData } from "./services/systemService";
import { systemRenderData } from "./renders/systemRender";

async function app() {
    const [jogadores, sistemas] = await Promise.all([
        getPlayerData(),
        getSystemData()
    ]);

    if (jogadores) playerRenderData(jogadores);
    if (sistemas) systemRenderData(sistemas);

}

app();



