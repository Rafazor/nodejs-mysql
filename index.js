var express    = require("express");
var mysql = require("mysql");
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root",
    database: 'students',
    port: 3306
});
app.get("/",function(req,res){
connection.query('SELECT * from student where contry= "EN"', function(err, rows, fields) {
  if (!err) {
    res.send(rows);
  }
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000, function() {
    console.log("Server Start...")
});