//create a web server using express
const express = require('express');
const app = express();
const port = 3000;

//use the express.static middleware to serve static files
app.use(express.static('public'));

//use the express.json middleware to parse JSON data
app.use(express.json());

//use the express.urlencoded middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

//create a route that accepts GET requests on the '/comments' URL
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/data/comments.json');
});

//create a route that accepts POST requests on the '/comments' URL
app.post('/comments', (req, res) => {
  const fs = require('fs');
  const comments = JSON.parse(fs.readFileSync('data/comments.json', 'utf8'));
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync('data/comments.json', JSON.stringify(comments));
  res.send('Your comment has been successfully added');
});

//create a route that accepts GET requests on the '/contact' URL
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

//create a route that accepts POST requests on the '/contact' URL
app.post('/contact', (req, res) => {
  res.send('Your message has been successfully sent');
});

//start the server and make it listen for incoming requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Path: public/index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <div id="




