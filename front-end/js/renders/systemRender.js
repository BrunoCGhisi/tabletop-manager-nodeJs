export const systemRenderData = (data) => {
    const container = document.getElementById('system-list')
    if (!container) return;
    container.innerHTML = '';

    const systemList = data.map((system) => {
        return `<li  style="border-bottom: solid #3A4D39 1px; padding: 15px 5px 1px 0">
            <Strong>Id:  </Strong> ${system.id}<br> 
            <Strong>Nome:</Strong> ${system.name}<br><br></li>`
    })

    container.innerHTML = `<label>${systemList.join('')}</label>`;};