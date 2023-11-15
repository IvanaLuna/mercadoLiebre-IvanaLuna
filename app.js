const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve('./views/register.html'))
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve('./views/login.html'))
});

app.post('/',(req,res)=>{
    res.sendFile(path.resolve('./views/home.html'))
});

const port= process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Servidor iniciado en http://localhost: ${port}`));
