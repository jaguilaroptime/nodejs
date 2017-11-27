var http = require("http");
fs = require("fs");

http.createServer(function(req,res){
	fs.readFile("./index_rendervar.html", function(err, html){
		var html_string = html.toString();
		//Expresión regular que busca en el html donde exista el contexto de variable {variable}
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		
		var name = "Jeenson";
		var apellido = "Aguilar Correa";
		for (var i = variables.length - 1; i >= 0; i--) {
			//Obtener el valor de una variable
			var value = eval(variables[i]);
			//Reemplazar 
			html_string = html_string.replace("{"+variables[i]+"}", value);
		}
		res.writeHead(200,{"Content-Type":"text/html"});
	 	res.write(html_string);
	 	res.end();
	});
}).listen(8080);