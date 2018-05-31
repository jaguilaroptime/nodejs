var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fotos', { useMongoClient: true });
mongoose.Promise = global.Promise;

var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Correo Electronico no es valido"];

var user_schema = new Schema({
	name: String,
	username: { type: String, required: true, maxlength: [50, "Username muy grande"]},
	password: { type: String, minlength: [8, "El password es muy corto"]},
	age: { type: Number, min: [18, "La edad no puede ser menor que 18"], max: [100, "Edad es mayor a 100"]},
	email: { type: String, required: "El correo es obligatorio", match: email_match },
	date_of_birth: Date
});

user_schema.virtual("password_confirmation").get(function (){
	return this.p_c;
}).set(function(password){
	this.p_c = password;
});

var User = mongoose.model("User", user_schema);

module.exports.User = User;

/* Tipos de datos */
/* String - Number -Date -Buffer -Boolean -Mixed -Objectid -Array */