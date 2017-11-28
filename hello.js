var http = require("http");

var menejador = function (solicitud, respuesta){
	console.log("Revicibiendo una petición");
	respuesta.end("hola mundo");
};

var servidor = http.createServer(menejador);

servidor.listen(8080);