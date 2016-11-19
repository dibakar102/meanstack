var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('mydb', ['mydb']);
var db2 = mongojs('mypr', ['mypr'])
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/mydb', function(req, res){
	console.log("I received a get request");

	db.mydb.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});
app.post('/mydb',function(req, res){
	console.log(req.body);
	db.mydb.insert(req.body, function(err, doc){
		res.json(doc);
	});
})

app.get('/mypr', function(req, res){
	console.log("I received a get request");

	db2.mypr.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});
app.post('/mypr',function(req, res){
	console.log(req.body);
	db2.mypr.insert(req.body, function(err, doc){
		res.json(doc);
	});
})


app.listen(8080);
console.log("server running on port 8080");