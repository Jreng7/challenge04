
const express = require('express'); // Importando o express.
const app = express(); // Inicializando o express e passando essa inicia para o a const APP.


app.get('/', function(req, res){
    res.send('Usando o "res.send" para enviar uma reposta na rota')
})






const port = 8181

app.listen(port, function(erro) {  // listen tem 2 param, 1º a porta 2º a func que é erro.
    if(erro) {
        console.log('Ocorreu um erro...')
    } else {
        console.log('Server online...')
    }
})

