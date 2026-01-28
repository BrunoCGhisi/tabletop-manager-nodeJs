const url_api = 'http://127.0.0.1:3000/system'

export async function getSystemData() {
    try{
        const response = await fetch(url_api)
        if (!response.ok) throw new Error("Erro na requisição")

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log("Houve um problema: ", error)
        return [];
    }
}

export async function addSystem(system){
    await fetch(url_api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(system)
    })
}

export async function updateSystem(system){
    await fetch(url_api, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(system)
    })
}