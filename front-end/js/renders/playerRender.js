export const playerRenderData = (data) => {
    const container = document.getElementById('players-list')
    if (!container) return;
    container.innerHTML = '';

    const playerList = data.map((player) => {
        return `<li  style="border-bottom: solid #3A4D39 1px; padding: 15px 5px 1px 0">
            <Strong>Id:  </Strong> ${player.id}<br> 
            <Strong>Nome:</Strong> ${player.name}<br><br></li>`
    })

    container.innerHTML = `<label>${playerList.join('')}</label>`;};