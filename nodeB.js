const http = require('http');		// including http and url lib
const url = require('url');
const server = http.createServer((req,res)=>		// creating server object
{
	//console.log(req.url);
	res.setHeader("Content-Type","application/json");		// 
	if(req.url ==='/user')
		res.end('Saksham kahol');
	else if(req.url ==='/order')
	{
		res.end('end');
	}
	else if(req.url === '/')
		res.end('end of era');
}).listen(3000);
