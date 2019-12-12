// Importando arquivo.
const express = require('express');

// "Instanciando" express.
const app = express();

app.use(express.json());

const routerProdutos = require('./routers/produtos');
const routerClientes = require('./routers/clientes');
// const routerClientes = require('./routers/clientes');

app.get('/', (req, res) => res.json({
    "Status" : "Ativado",
    "Mensagem" : "Continue"
}));

app.use('/produtos', routerProdutos);

app.use('/clientes', routerClientes);
// app.get('/clientes', routerClientes);

app.listen(3000, () => console.log("Servidor Node"));