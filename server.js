var http = require('http')

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
 //   res.end('Hello World Philippines Agsib');
  
//});
  //	.
 // 	res.end('Hello World!
  //    
  		res.end('Hello World Philippines ');
  
//  ');
});

server.listen(5000);

console.log("server running at http://0.0.0.0:5000");

