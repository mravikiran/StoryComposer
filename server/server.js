// test server

var http = require("http");

http.createServer(
function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Will we ever get rid of hello world");
	response.end();
}
).listen(8888);
