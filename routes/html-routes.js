// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
    
    var ejsObj = { pageTitle: "FlexSpace",
                   loggedIn: true };
    

    } else {
      var ejsObj = { pageTitle: "FlexSpace",
      loggedIn: false };

    }
    res.render("pages/home", ejsObj);
  });

  app.get("/signup", function(req, res, next) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
      next();
    }
    var ejsObj = {pageTitle: "Signup"};
    res.render("pages/signup", ejsObj);
  });

  app.get("/login", function(req, res, next) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
      next()
    }
    var ejsObj = {pageTitle: "Login"};
    res.render("pages/login", ejsObj);
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {

    var ejsObj ={
      pageTitle: "Members"


    }
    // TODO: Check if user is admin/renter/owner and return appropriate data
   /* db.Rooms.findAll({ where: { user_id: req.user.id } }).then(result => {
      var ejsObj = {
        pageTitle: "Members",
        user: req.user,
        name: req.user.first,
        rooms: result[0]
      };*/
      res.render("pages/members", ejsObj);
    });
  //});

  app.get("/addroom", function(req, res, next) {
    // If the user already has an account send them to the members page
    if (req.user) {
    
    var ejsObj = { pageTitle: "FlexSpace",
                   loggedIn: true };
    

    } else {
      var ejsObj = { pageTitle: "FlexSpace",
      loggedIn: false };

      return res.redirect("/login");
      next()

    }
    res.render("pages/addroom", ejsObj);
  });

  app.get("/viewrooms", function(req, res, next) {
    // If the user already has an account send them to the members page
    if (req.user) {
    
    var ejsObj = { pageTitle: "FlexSpace",
                   loggedIn: true };
    

    } else {
      var ejsObj = { pageTitle: "FlexSpace",
      loggedIn: false };

      return res.redirect("/login");
      next()

    }
    res.render("pages/viewrooms", ejsObj);
  });

};
