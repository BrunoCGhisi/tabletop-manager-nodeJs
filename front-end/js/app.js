import { getPlayerData, getSystemData } from "./services";
import { playerRenderData, systemRenderData } from "./renders";
import {
    formPlayerHandler,
    formRegisterHandler,
    formSystemHandler,
    registerPlayerHandler,
    registerSystemHandler
} from "./handlers";

async function app() {
    formPlayerHandler();
    formSystemHandler();

    const [players, systems] = await Promise.all([
        getPlayerData(),
        getSystemData()

    ]);

    if (players) playerRenderData(players);
    if (systems) systemRenderData(systems);

}

app();



