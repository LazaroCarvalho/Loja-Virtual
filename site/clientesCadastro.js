const $cadastro = document.getElementById('botao');
const $nome = document.getElementById('nome');
const $idade = document.getElementById('idade');
const $profissao = document.getElementById('profissao');

const cadastrarCliente = () => {

    let nome = $nome.value;
    let idade = $idade.value;
    let profissao = $profissao.value;

    let url = "http://localhost:3000/clientes";

    let dados = {
        "nome" : nome,
        "idade" : idade,
        "profissao" : profissao
    }

    fetch(url, {
        "headers" : {
            'Content-Type':'application/json'
        },
        "method" : "post",
        "body" : JSON.stringify(dados)
    });

}

$cadastro.addEventListener('click', () => cadastrarCliente());