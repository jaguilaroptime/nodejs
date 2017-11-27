var http = require("http");
fs = require("fs");
parser = require("./params_parser.js");
renders = require("./render_view.js");

var p = parser.parse;
var r = renders.render;
http.createServer(function(req,res){

	if(req.url.indexOf("favicon.ico") > 0){
		return;
	}

	fs.readFile("./form.html", function(err, html){
		var html_string = html.toString();
		//Expresión regular que busca en el html donde exista el contexto de variable {variable}
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var params = p(req);

		html_string = r(html, variables);
		
		res.writeHead(200,{"Content-Type":"text/html"});
	 	res.write(html_string);
	 	res.end();
	});
}).listen(8080);