import {addSystem, getSystemData} from "../services";
import {systemRenderData} from "../renders";

export function registerSystemHandler() {
    const form = document.getElementById("registerSystem");
    if  (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const id = document.getElementById("system-id").value.trim();
        const name = document.getElementById("system-name").value.trim();

        if (!id || !name) return;

        await addSystem({id, name});

        const updatedList = await getSystemData()
        systemRenderData(updatedList)

        form.reset();
    })
}