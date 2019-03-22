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
  var sql = "INSERT INTO userinfo (firstname, secondname) VALUES ('Mikey', 'Redburn')";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
