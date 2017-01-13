
var express = require('express');
var path = require('path');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
var PHOTO;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static(__dirname +'/site'));

    //console.log(req.body.data); 
    //res.send('200').end(); 

app.post('/photo', function(req, res){
    //console.log(req.body.photodb); 
    this.PHOTO = req.body.photodb;
    console.log(this.PHOTO); 
    res.send('200').end(); 
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './site', 'index_tabs.html'));
});

app.get('/photo', function(req, res){
    //console.log(req.body.photodb);
    this.PHOTO = req.body.photodb;
    console.log(req,body.PHOTO); 

});

app.listen(port);
