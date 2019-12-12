const express = require('express');
const conn = require('../connection');

const router = express.Router();

router.get("/", (requisicao, resposta) => {

    const sql = "SELECT * FROM clientes";

    conn.query(sql, (erro, resultado) => {

        if(erro)
            resposta.json({
                "Erro" :erro.sqlMessage
            });
        else
            resposta.json(resultado);

    })

});

router.get("/:id", (requisicao, resposta) => {

    let idRegistro = requisicao.params.id;

    const sql = "SELECT * FROM clientes WHERE id = " + idRegistro;

    conn.query(sql, (erro, resultado) => {

        if(erro)
            resposta.json({
                "Erro" :erro.sqlMessage
            });
        else
            resposta.json(resultado);

    })

});

router.post('/', (requisicao, resposta) => {

    let nome = requisicao.body.nome;
    let idade = requisicao.body.idade;
    let profissao = requisicao.body.profissao;

    const sql = `INSERT INTO clientes 
                (nome, idade, profissao)
                VALUES
                ('${nome}', ${idade}, '${profissao}')`;

    conn.query(sql, (erro, resultado) => {

        if(erro)
            resposta.json({
                "status" : "Erro ao inserir",
                'script' : sql
            });
        else
            resposta.json({
                "status" : "inserido com sucesso",
                "dados" : resultado
            });

    });

});

router.patch('/', (requisicao, resposta) => {

    let idRegistro = requisicao.body.id;
    let nome = requisicao.body.nome;
    let idade = requisicao.body.idade;
    let profissao = requisicao.body.profissao;

    let sql = `UPDATE clientes SET nome = '${nome}',
                idade = ${idade},
                profissao = '${profissao}'
                WHERE id = ${idRegistro}`;

    conn.query(sql, (erro, resultado) => {

        if(erro)
            resposta.json({
                "status" : "erro",
                "erro: " : erro.sqlMessage
            });
        else
            resposta.json({
                "status" : "sucesso",
                "dados" : resultado
            });

    })

});

router.delete('/:id', (requisicao, resposta) => {

    let idRegistro = requisicao.params.id;

    const sql = "DELETE FROM clientes WHERE id = " + idRegistro;

    conn.query(sql, (erro, resultado) => {
        
        if(erro)
            resposta.json({
                "status" : "erro",
                "erro" : erro.sqlMessage
            });
        else
            resposta.json({
                "status" : "sucesso",
                "resultado" : resultado
            });

    });

});

module.exports = router;