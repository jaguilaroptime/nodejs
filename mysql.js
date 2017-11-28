var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'backend'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  //console.log('connected as id ' + connection.threadId);
});

var sql = 'SELECT * FROM clientes'; 
connection.query(sql, function(err, results) {
  if (err) throw err;
  //console.log('El cliente es: ', results[0]);
  //console.log('El cliente es: ', results[1]);
  console.log('Cantidad de Clientes: ', results.length);
});
 
connection.end();
/*var mysqlx = require('mysqlx');
mysqlx.getSession({
  host: 'host',
  port: '33060',
  dbUser: 'root',
  dbPassword: ''
}).then(function (session) {
  var schema = session.getSchema('mySchema');
  var coll = schema.getCollection('myColl');
  var query = "$.name == 'NewField'";
  var newDoc = { name: 'NewField', description: 'a new field', 
                 extra: ['hello', 'world'] };

  coll.add(newDoc).execute().then(function (added) {
    coll.modify(query)
        .set('$.newField1', 'new field 1')
        .execute().then(function (updated) {
          console.log('Document(s) updated: '
                      + updated.getAffectedItemsCount());
          coll.find(query).execute(function (doc) {
            console.log(doc);
            session.close();
          });
    })
    .catch(function (err) {
      console.log(err.message);
      console.log(err.stack);
    });
  });
}).catch(function (err) {
  console.log(err.message);
  console.log(err.stack);
});*/