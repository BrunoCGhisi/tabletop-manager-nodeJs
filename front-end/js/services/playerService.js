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