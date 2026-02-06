import {addPlayer, getSystemData, updatePlayer} from '../services';
import { playerRenderData } from '../renders';

export function formPlayerHandler()  {
    const form = document.getElementById('registerPlayer');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const action = e.submitter.dataset.action;
        const id = document.getElementById('player-id').value.trim();
        const name = document.getElementById('player-name').value.trim();

        try{
            if (action === 'register') {
                if (!name) throw new Error("Nome é obrigatório");
                await addPlayer({name});
            }

            if (action === 'update') {
                if (!id || !name) throw new Error("Id e nome são obrigatórios");
                await updatePlayer({id, name});
            }
            const updatedList = await getSystemData()
            playerRenderData(updatedList)
            form.reset();
        }
        catch (err) {
            alert(err.message);
        }
    });
}
