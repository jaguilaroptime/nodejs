var mysqlx = require('mysqlx');
mysqlx.getSession({
  host: 'host',
  port: '33060',
  dbUser: 'root',
  dbPassword: 'my pass'
}).then(function (session) {
  session.createSchema('mySchema').then(function(schema){
    console.log('Schema created');
    session.close();
  });
}).catch(function (err) {
  console.log(err.message);
  console.log(err.stack);
});