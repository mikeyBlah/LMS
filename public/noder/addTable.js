let mysql = require('mysql');

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cornbeefkeith123",
  database: "users"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE userinfo ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
