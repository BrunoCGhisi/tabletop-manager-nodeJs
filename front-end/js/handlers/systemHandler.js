import {addSystem, getSystemData, updateSystem} from "../services";
import {systemRenderData} from "../renders";

export function formSystemHandler() {
    const form = document.getElementById("registerSystem");
    if  (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const action = e.submitter.dataset.action;
        const id = document.getElementById("system-id").value.trim();
        const name = document.getElementById("system-name").value.trim();

        try {
            if (action === "register") {
                if (!name) throw new Error("Nome é obrigatório");
                await addSystem({name});
            }

            if (action === "update") {
                if (!id || !name) throw new Error("Id e nome são obrigatórios");
                await updateSystem({id, name});
            }
            const updatedList = await getSystemData()
            systemRenderData(updatedList)
            form.reset();
        }
        catch (err) {
            alert(err.message);
        }
    })
}