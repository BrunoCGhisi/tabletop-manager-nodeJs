export const playerRenderData = (data) => {
    const container = document.getElementById('players-list')
    if (!container) return;
    container.innerHTML = '';

    const playerList = data.map((player) => {
        return `<li>Id: ${player.id}<br> Nome: ${player.nome}<br><br></li>`
    })

    container.innerHTML = `<ul>${playerList.join('')}</ul>`;};