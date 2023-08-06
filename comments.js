// create web server with node.js
// run: node comments.js
// then: http://localhost:8080
// then: http://localhost:8080/comments
// then: http://localhost:8080/comments?user=1
// then: http://localhost:8080/comments?user=1&post=1

var http = require('http');
var url = require('url');
var comments = require('./comments');

http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    res.writeHead(200, {'Content-Type': 'application/json'});

    if (query.user && query.post) {
        comments.getComments(query.user, query.post, function (err, comments) {
            if (err) {
                res.end(JSON.stringify(err));
            } else {
                res.end(JSON.stringify(comments));
            }
        });
    } else {
        res.end(JSON.stringify(comments));
    }
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
