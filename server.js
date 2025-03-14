const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

app.set('view engine','ejs');
app.set('views','./views');

const homeRoutes = require('./routes/homeRoutes.js');
app.use('/home',homeRoutes);
app.get('/',(req,res)=>{

    res.status(200).render('index',
        {
            title:'Págia Inicial',
            message: 'Bem Vindo ao Express com EJS!'
        }
    )
})


const rotaAdmin = express.Router();       // Criando sistema de Roteamento usando Express
rotaAdmin.get('/', (req,res)=>{
    res.status(200).send('Dashboard Admin');
});

rotaAdmin.get('/usuarios', (req,res)=>{
    res.status(200).send('Gerenciamento de Usuários');
});

rotaAdmin.get('/clientes', (req,res)=>{
    res.status(200).json({nome:"Leandro",idade:"23"});
});

app.use('/admin', rotaAdmin);





app.listen(PORT, () =>{

    console.log(`Servidor http://${HOST}:${PORT}`);

});
