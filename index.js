const db = require("./db");
const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { listarAtivos, listarProventos } = require('./controllers/carteira.js');

//criar servidor

const app = express();
const port = 3001;

//sao  middleweres, intercepta todas as requisições *
//cors libera o acesso em dominios diferentes
app.use(cors());
app.use(bodyParser.json()); //envia e recebe formado json


app.get('/ativos', listarAtivos);
app.get('/proventos', listarProventos);

app.listen(port, () => 
    console.log(`Servidor inicializado na porta ${port}` ));
