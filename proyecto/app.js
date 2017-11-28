var express = require('express')
var app = express()

/*
Cuando se desea usar carpeta estatica o definidas para ciertos propositos
app.use("/web", express.static('public'));
*/
app.use(express.static('public'));

app.set("view engine", "jade");

app.get('/', function (req, res) {
  res.render("index");
})

app.get('/login', function (req, res) {
	res.render("login");
})

app.listen(8080)