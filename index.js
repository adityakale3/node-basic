const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('views'));
app.set('view engine', 'ejs');
/*
app.use('/assets', express.static('views'));
*/
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (req , res) => {
    res.send('Working');
});

app.get('/home', (req , res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/user/:name', (req , res) => {
    res.render('profile', {person: req.params.name});
});

app.get('/contact', (req , res) => {
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req , res) => {
    console.log(req.body);
    res.render('contact', {qs: req.query});
});



app.listen('3000', function(){
    console.log('App running at 3000');
});