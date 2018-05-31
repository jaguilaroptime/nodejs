var express = require("express")
var bodyParser = require("body-parser");
var User = require("./models/user").User;
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
	User.find(function(err, doc){
		console.log(doc);
		res.render("login");
	});
	
})

app.post('/user', function (req, res) {
	var user = new User({
		email: req.body.email, 
		password: req.body.password,
		password_confirmation: req.body.password_confirmation
	});
	user.save(function(err){
		if(err){
			console.log(String(err));
			res.render("login");
		}else{
			res.send("Guardamos sus datos");	
		}
	});
	//console.log("Correo: " + req.body.email);
	//console.log("Contraseña: " + req.body.password);
	//res.send("Recibimos sus datos");
})

app.listen(8080)