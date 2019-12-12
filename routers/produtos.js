const express = require('express');
const conn = require('../connection');

const router = express.Router();

router.get("/", (requisicao, resposta) => {

    const sql = "SELECT * FROM produtos";

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

    const sql = "SELECT * FROM produtos WHERE id = " + idRegistro;

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
    let descricao = requisicao.body.descricao;
    let preco = requisicao.body.preco;

    const sql = `INSERT INTO produtos 
                (nome, descricao, preco)
                VALUES
                ('${nome}', '${descricao}', ${preco})`;

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
    let descricao = requisicao.body.descricao;
    let preco = requisicao.body.preco;

    let sql = `UPDATE produtos SET nome = '${nome}',
                descricao = '${descricao}',
                preco = ${preco}
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

    const sql = "DELETE FROM produtos WHERE id = " + idRegistro;

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