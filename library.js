var express = require('express');
var cons = require('consolidate');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views')
app.use(bodyParser())

var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/library';

//Return all the books
app.get('/books', function(req, res) {
	app.db.collection('book').find({}).toArray(function(err, book) {
		res.render("library", {
			'books_list' : book
		});
	});
});

//Create a new book
app.post('/books/new', function(req, res) {
	var categories = req.body.categories.split(",");
	var newBook = {ISBN: req.body.isbn, title: req.body.title, author: req.body.author, purchase_date: new Date(), condition: req.body.condition, categories: categories}
  	app.db.collection('book').save(newBook)
	res.redirect('/books')
});

// Return the selected book
app.get('/books/:id', function(req, res) {
	app.db.collection('book').find({_id: new mongodb.ObjectId(req.params.id)}).toArray(function(err, book) {
		res.render("book", {
			'books_list' : book
		});
	});
});

// Allow to borrow a book
app.post('/books/:id/borrow', function(req, res) {
  	app.db.collection('book').update({_id: new mongodb.ObjectId(req.params.id)}, { $set: {borrow: {borrow_date: new Date(), borrower: req.body.borrower}}})
	res.redirect('/books/'+req.params.id)
});

// Allow to return a book
app.post('/books/:id/return', function(req, res) {
	if (req.body.return){
		app.db.collection('book').update({_id: new mongodb.ObjectId(req.params.id)}, { $unset: {borrow: ''}})
	}
	res.redirect('/books/'+req.params.id)
});

//Delete the selected book
app.get('/books/delete/:id', function(req, res) {
	app.db.collection('book').remove({_id: new mongodb.ObjectId(req.params.id)})
	res.redirect('/books')
});

mongoClient.connect(url, function (err, db) {
	app.db = db;
	app.listen(8000);
	console.log("Express server started on 8000");
});