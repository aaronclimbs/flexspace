var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use("/api", "/routes/apiRoutes");
app.use("/", "/routes/viewRoutes");

// listening:

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
