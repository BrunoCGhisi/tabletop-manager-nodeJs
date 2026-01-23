const app = require('./app');

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
