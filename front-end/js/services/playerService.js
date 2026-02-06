const url_api = 'http://127.0.0.1:3000/player'

export async function getPlayerData() {
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

export async function addPlayer(player){
    const response = await fetch(url_api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player)
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
    }
    return response.json();
}

export async function updatePlayer(player){
    const response = await fetch(url_api, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player)
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
    }
    return response.json();
}

export async function deletePlayer(player){
    const response = await fetch(url_api, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player)
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
    }
    return response.json();
}