export const systemRenderData = (data) => {
    const container = document.getElementById('system-list')
    if (!container) return;
    container.innerHTML = '';

    const systemList = data.map((system) => {
        return `<li>Id: ${system.id}<br> Nome: ${system.name}<br><br></li>`
    })

    container.innerHTML = `<ul>${systemList.join('')}</ul>`;};