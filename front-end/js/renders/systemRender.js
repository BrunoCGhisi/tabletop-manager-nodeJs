export const systemRenderData = (data) => {
    const container = document.getElementById('system-list')
    if (!container) return;
    container.innerHTML = '';

    const systemList = data.map((system) => {
        return `<li  style="border-bottom: solid #3A4D39 1px; padding: 15px 0 1px 0">Id: ${system.id}<br> Nome: ${system.name}<br><br></li>`
    })

    container.innerHTML = `<ul >${systemList.join('')}</ul>`;};