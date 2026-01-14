const url_api = 'http://localhost:8080/tabletop-manager'

const searchPlayers = () => {
    fetch(url_api)
        .then(res => res.json())
        .then(data => {
            renderData(data)
        })
        .catch(error => console.log(error))
};

const renderData = (data) => {
    const container = document.getElementById('players-list')
    container.innerHTML = '';

    const itensHtml = data.map((player) => {
        return `<li>${player.id}: ${player.name}</li>`
    })

    container.innerHTML = `<ul>${itensHtml.join('')}</ul>`;};

searchPlayers();
