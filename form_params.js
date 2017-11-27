var http = require("http");
fs = require("fs");

http.createServer(function(req,res){

	if(req.url.indexOf("favicon.ico") > 0){
		return;
	}

	fs.readFile("./form.html", function(err, html){
		var html_string = html.toString();
		//Expresión regular que busca en el html donde exista el contexto de variable {variable}
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var name = "";
		var array_params=params=[];

		if(req.url.indexOf("?") > 0){
			var url_data = req.url.split("?");
			var array_params = url_data[1].split("&");
		}
		console.log(url_data);
		console.log(array_params);

		for (var i = array_params.length - 1; i >= 0; i--) {
			var param = array_params[i];
			var param_data = param.split("=");

			//console.log(param_data);
			params[param_data[0]] = param_data[1];
			//console.log(params);
		}

		for (var i = variables.length - 1; i >= 0; i--) {
			//Obtener el valor de una variable
			var variable = variables[i];
			//Reemplazar 
			html_string = html_string.replace("{"+variables[i]+"}", params[variable]);

		}
		res.writeHead(200,{"Content-Type":"text/html"});
	 	res.write(html_string);
	 	res.end();
	});
}).listen(8080);