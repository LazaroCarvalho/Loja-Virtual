const express = require('express');
const router = express.Router();
const conn = require('../connection.js');

router.get('/', (req, res) => {

    const sql = "SELECT * FROM clientes";

    conn.query(sql, (erro, result) => {

        if(erro)
            res.json(erro);
        else
            res.json(result);

    });

});

router.get('/:id', (req, res) => {

    const idRegistro = req.params.id;
    const sql = "SELECT * FROM clientes WHERE id = " + idRegistro;

    conn.query(sql, (erro, resultado) => {

        if (erro)
            res.send("Erro ao buscar registro");
        else
            res.json(resultado);

    });

});

router.post('/', (req, res) => {

    const nome = req.body.body.nome;
    const idade = req.body.body.idade;
    const profissao = req.body.body.profissao;

    const sql = `INSERT INTO clientes 
                (nome, idade, profissao)
                VALUES
                ('${nomeRegistro}', '${idadeRegistro}', '${profissaoRegistro}');`;


    conn.query(sql, (erro, resultado) => {

        if(erro)
            res.json(erro);
        else
            res.json("Cliente inserido com sucesso");

    });

});

module.exports = router;