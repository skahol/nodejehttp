const http = require('http');
const url = require('url');
http.createServer(function(req,res)
{
	console.log(req.url);
	res.end('end');
}).listen(8080);