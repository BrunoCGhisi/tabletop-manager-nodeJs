export const playerRenderData = (data) => {
    const container = document.getElementById('players-list')
    if (!container) return;
    container.innerHTML = '';

    const playerList = data.map((player) => {
        return `<li style="border-bottom: solid #3A4D39 1px; padding: 15px 0 1px 0">Id: ${player.id}<br> Nome: ${player.name}<br><br></li>`
    })

    container.innerHTML = `<ul>${playerList.join('')}</ul>`;};