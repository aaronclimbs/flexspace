

var express = require("express");


var app = express();


var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');



require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


var mysql = require("mysql");

// MySQL stuff

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "confercloud_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



// listening:

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
