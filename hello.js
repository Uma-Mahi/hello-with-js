var http = require('http');

function onRequest(request, response) {
    console.log(request.url);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!!!");
    response.end();

}

http.createServer(onRequest).listen(3030);
console.log('Server is now running');
