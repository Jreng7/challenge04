

const express = require('express'); // Importando o express.
const app = express(); // Inicializando o express e passando essa inicia para o a const APP.


app.get('/', function(req, res){
    res.send('Instalando o nodemon')
})

app.get('/blog', function(req, res) {
    res.send('Seja bem-vindo(a) ao meu blog.')
})

app.get('/canal/youtube', function(req, res) {
    res.send('<h1>bem-vindo(a) ao meu canal.</h1>')
})

app.get('/ola/:nome/:empresa', function(req, res) {
    // REQ => sÃO OS DADOS ENVIADOS PELO USUÁRIO. REQ = REQUISIÇÃO = PEDIDO.
    // RES => RESPOSTA QUE SERÁ ENVIADA PARA O USUÁRIO ( RESPOSTA DO PEDIDO ).
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send(`<h1>Olá ${nome} você trabalha na empresa ${empresa}!</h1>`)
})





const port = 8181

app.listen(port, function(erro) {  // listen tem 2 param, 1º a porta 2º a func que é erro.
    if(erro) {
        console.log('Ocorreu um erro...')
    } else {
        console.log('Server online...')
    }
})

