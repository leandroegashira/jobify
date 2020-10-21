const express = require('express')  
const app = express()  

const sqlite = require('sqlite')
const dbConnection = sqlite.open('banco.sqlite', {Promise})

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/vaga', (req, res) => {
    res.render('vaga')
})

app.listen(3000, (err) => {
    if (err){
        console.log('Não foi possível iniciar o servidor do Jobify')
    }else {
        console.log('Servidor do Jobify rodando...')
    }
})