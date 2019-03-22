let mysql = require('mysql');

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cornbeefkeith123"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected to data");
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
