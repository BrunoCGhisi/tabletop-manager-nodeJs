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

        if (!id || !name) return;

        if (action === "register") {
            await addSystem(name, id);
        }

        if (action === "update") {
            await updateSystem(name, id);
        }

        await addSystem({id, name});

        const updatedList = await getSystemData()
        systemRenderData(updatedList)

        form.reset();
    })
}