// test server

var http = require("http");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var server =  http.createServer(
function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Will we ever get rid of hello world added by aviator009");
	response.end();
}
);
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});


