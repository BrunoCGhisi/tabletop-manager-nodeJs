import { addPlayer, getPlayerData } from '../services';
import { playerRenderData } from '../renders';

export function registerPlayerHandler() {
    const form = document.getElementById('registerPlayer');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const id = document.getElementById('player-id').value.trim();
        const name = document.getElementById('player-name').value.trim();

        if (!id || !name) return;

        await addPlayer({ id, name });

        const updatedList = await getPlayerData();
        playerRenderData(updatedList);

        form.reset();
    });
}
