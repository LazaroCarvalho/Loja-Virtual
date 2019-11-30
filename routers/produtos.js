const express = require('express');
const router = express.Router();

const bd = [{
    "ID" : "1",
    "Produto" : "Teclado",
    "Quantidade" : "100"
},
{
    "ID" : "2",
    "Produto" : "Teclado Supersônico",
    "Quantidade" : "2"
}
];

router.get("/", (req, res) => {
    res.status(200).json({
        "Status" : "Ok",
        "Data" : bd
    })
});

router.get("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        "Status" : "Ok",
        "Dados" : bd[id - 1]
    })
});

router.post('/', (req, res) => {
    const data = req.body;
    res.status(201).send({
        "Método" : "Post",
        "Dados" : data
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send("Regístro excluido com sucesso");
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send("Regístro excluido com sucesso");
});

module.exports = router;