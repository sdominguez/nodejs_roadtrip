const express = require('express');
const app = express();
const port = 8085;

//servir como contenido estático
app.use(express.static('roadtrip'));

app.get('/elements', (req, res) =>{
    res.sendFile(__dirname+'/roadtrip/elements.html');
});

app.get('/generic', (req, res) =>{
    res.sendFile(__dirname+'/roadtrip/generic.html');
});

app.get('*', (req, res) =>{
    res.sendFile(__dirname+'/roadtrip/404.html');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});