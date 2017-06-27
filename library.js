var express = require('express');
var cons = require('consolidate');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views')
app.use(bodyParser())

// Récupération du client mongodb
var mongoClient = require('mongodb').MongoClient;

// Paramètres de connexion
var url = 'mongodb://localhost:27017/library';

//Affiche les livres
app.get('/books', function(req, res) {
	app.db.collection('book').find({}).toArray(function(err, book) {
		res.render("library", {
			'books_list' : book
		});
	});
});

// Connexion au serveur avec la méthode connect
mongoClient.connect(url, function (err, db) {
	app.db = db;
	app.listen(8000);
	console.log("Express server started on 8000");
});