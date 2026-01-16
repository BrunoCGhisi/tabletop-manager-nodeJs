const url_api = 'http://localhost:8080/tabletop-manager'

export async function getPlayerData() {
    try{
        const response = await fetch('http://localhost:8080/tabletop-manager')
        if (!response.ok) throw new Error("Erro na requisição")

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log("Houve um problema: ", error)
        return [];
    }
}