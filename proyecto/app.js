var express = require('express')
var bodyParser = require('body-parser');
var app = express()

/*
Cuando se desea usar carpeta estatica o definidas para ciertos propositos
app.use("/web", express.static('public'));
*/
app.use(express.static('public'));

app.use(bodyParser.json());//Peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get('/', function (req, res) {
  res.render("index");
})

app.get('/login', function (req, res) {
	res.render("login");
})

app.post('/user', function (req, res) {
	console.log("Correo: " + req.body.email);
	console.log("Contraseña: " + req.body.password);
	res.send("Recibimos sus datos");
})

app.listen(8080)