const express = require('express');
const app = express();
app.use(express.static('views'));

app.get('/', (req , res) => {
    res.send('Working');
});

app.get('/home', (req , res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/user/:id', (req , res) => {
    res.send('You have entered following ID : ' + req.params.id);
});



app.listen('3000', function(){
    console.log('App running at 3000');
});