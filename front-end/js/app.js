import { getPlayerData, getSystemData } from "./services";
import { playerRenderData, systemRenderData } from "./renders";
import { registerPlayerHandler, registerSystemHandler } from "./handlers";

async function app() {
    registerPlayerHandler();
    registerSystemHandler();

    const [players, systems] = await Promise.all([
        getPlayerData(),
        getSystemData()

    ]);

    if (players) playerRenderData(players);
    if (systems) systemRenderData(systems);

}

app();



