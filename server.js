// Importando arquivo.
const express = require('express');
const cors = require('cors');

// "Instanciando" express.
const app = express();

app.use(cors());

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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.listen(3000, () => console.log("Servidor Node"));