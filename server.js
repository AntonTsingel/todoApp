var static = require('node-static');

var file = new static.Server('./app');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {

        file.serve(request, response);
    }).resume();
}).listen(8000);
console.log('server available on: http://localhost:8000');