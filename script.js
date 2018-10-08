'use scrict';

var http = require('http');
var fs = require( 'fs' );

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
fs.readFile( './index.html', 'utf-8', function( err, data ) {
        response.write('dane do odczytania');
           	        response.end();
    } else {
            response.statusCode = 404;
            response.write('404-error-page-not-found.jpg ');
            response.end();
    }
});

server.listen(8080);
