function render(html, variables){

	var html_string = html.toString();

	for (var i = variables.length - 1; i >= 0; i--) {
		//Obtener el valor de una variable
		var variable = variables[i];
		//Reemplazar 
		html_string = html_string.replace("{"+variables[i]+"}", params[variable]);

	}

	return html_string;
}

module.exports.render = render;
