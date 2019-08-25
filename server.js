// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

var sessionStore = new session.MemoryStore();

// Require middleware logger 'morgan'
var morgan = require("morgan");

// Require EJS-Lint
var ejsLint = require("ejs-lint");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: sessionStore
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"));

app.set("view engine", "ejs");

// Express Messages Middleware
app.use(require("connect-flash")());
app.use(function(req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

// FLASH TESTS
// app.get("/flashtest", (req, res) => {
//   const ejsObj = {
//     pageTitle: "flashtest",
//     script: "",
//     messages: req.flash()
//   };
//   res.render("pages/home", ejsObj);
// });

// app.get("/flashtest-flash", (req, res) => {
//   req.flash("warning", "This is a flash warning");
//   req.flash("success", "This is a flash success");
//   res.redirect("/flashtest");
// });

// Requiring our routes
var routeDir = require("./routes/index");
for (route in routeDir) {
  routeDir[route](app);
}

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
