'use scrict';

var http = require('http');
var fs = require( 'fs' );

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
		fs.readFile( '../index.html', 'utf-8', function( err, data ) {
        response.write('ten tekst powinien sie pojawic');
        if (!err) response.write('ten tekst powinien sie pojawic?');
        response.end();
    });
           	        
    } else {
            fs.readFile('../images/404-error-page-not-found.jpg', function (err, data) {
            response.statusCode = 404;
            response.write('../images/404-error-page-not-found.jpg ');
            if (!err) response.write('ten tekst powinien sie pojawic?');
            response.end();
    });
   }
});

server.listen(8080);


