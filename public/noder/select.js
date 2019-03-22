let mysql = require('mysql');

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cornbeefkeith123",
  database: "users"
});

conn.connect(function(err) {
  if (err) throw err;
  conn.query("SELECT * FROM userinfo", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
