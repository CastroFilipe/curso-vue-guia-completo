// fazendo o import do express e do body-parser
const express = require('express')
const bodyParser = require('body-parser')//usado para fazer o parser no corpo da requisição

const app = express()

app.use(bodyParser.urlencoded({extended : true}))

// end-point
app.post('/usuarios', (requisicao, resposta) => {
    console.log('Nova requisição recebida: ') 
    console.log(requisicao.body) //possivel graças ao body-parser
    resposta.send('<h3>Servidor informa: Cadastro recebido com sucesso!</h3>')
})

app.listen(3003)

console.log('Servidor iniciado com sucesso. Aguardando por requisições...')