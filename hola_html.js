var http = require("http");
fs = require("fs");

/* Forma de leer el archivo sincronicamente
var html = fs.readFileSync("./index.html");
*/

/* Lee el archivo por cada peticion
fs.readFile("./index.html", function(err, html){
	http.createServer(function(req,res){
	 res.write(html);
	 res.end();
	}).listen(8080);
});*/

http.createServer(function(req,res){
	fs.readFile("./index.html", function(err, html){
	 res.write(html);
	 res.end();
	});
}).listen(8080);

/* Forma de leer el archivo sincronicamente
http.createServer(function(req,res){
 res.write(html);
 res.end();
}).listen(8080);
*/