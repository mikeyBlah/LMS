let mysql = require('mysql');

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cornbeefkeith123"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  conn.query("CREATE DATABASE users", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
