// Create Web server to listen on port 3000
// This is a basic web server that listens on port 3000 for web requests.
// It will respond to any request with a JSON object containing the list of comments.
// This will be the starting point for our application.
// This is a very basic server, and it is not suitable for production use.
// Instead, you should use a production-ready web server such as Apache or Nginx.
// You can also use Node.js to create a production-ready web server.
// See the following link for more information: http://expressjs.com/en/advanced/best-practice-performance.html
// Run this file with the following command: node comments.js

// Load the express module.
var express = require('express');
// Load the body-parser module.
var bodyParser = require('body-parser');
// Create a new express server.
var app = express();
// Configure the server to use bodyParser.
app.use(bodyParser.json());

// Create the list of comments.
var comments = [
    { id: 1, author: 'John Doe', text: 'This is one comment' },
    { id: 2, author: 'Jane Smith', text: 'This is *another* comment' }
];

// Create a route for the server.
// This route will respond to a GET request at the /api/comments URL.
// It will send the comments list as a JSON object.
// This is the route that the client will use to request the list of comments.
app.get('/api/comments', function(req, res) {
    // Send the comments list as a JSON object.
    res.json(comments);
});

// Create a route for the server.
// This route will respond to a POST request at the /api/comments URL.
// It will add a comment to the comments list.
// This is the route that the client will use to add a new comment.
app.post('/api/comments', function(req, res) {
    // Get the next ID.
    var id = comments.length + 1;
    // Create a new comment object.
    var comment = {
        id: id,

