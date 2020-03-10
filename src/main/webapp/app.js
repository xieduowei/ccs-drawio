var express = require('express')
var express = require('express');
var app = express()
var http = require('http').Server(app)
var path = require('path');

app.set('views', path.join(__dirname, '../webapp' ));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../webapp')));

app.get('/',function(req,res){
	console.log(1)
	res.render('index')
})

http.listen(9997);