const url_api = 'http://localhost:8080/player'

const searchPlayers = () => {
    fetch(url_api)
        .then(ren => res.json())
        .then(data => {
            renderData(data)
        })
        .catch(error => console.log(error))
};

const renderData = (data) => {
    const container = document.getElementById('container')
    container.innerHTML = '';

    const itenHtml = data.map((player) => {
        return `<li>${player.id}: ${player.name}</li>`
    })

    container.innerHTML = itensHtml.join('');
};

searchPlayers();
