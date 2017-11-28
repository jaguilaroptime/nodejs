function parse(req){
	var array_params=params=[];
	if(req.url.indexOf("?") > 0){
		var url_data = req.url.split("?");
		var array_params = url_data[1].split("&");
	}

	for (var i = array_params.length - 1; i >= 0; i--) {
		var param = array_params[i];
		var param_data = param.split("=");

		params[param_data[0]] = param_data[1];
	}
	return params;
}

module.exports.parse = parse;