// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    var ejsObj = {
      pageTitle: "FlexSpace",
      user: req.user,
      script: "home",
      messages: req.flash()
    };
    res.render("pages/home", ejsObj);
  });

  app.get("/signup", function(req, res, next) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
      next();
    }
    var ejsObj = {
      pageTitle: "Signup",
      user: req.user,
      script: "signup",
      messages: req.flash()
    };
    res.render("pages/signup", ejsObj);
  });

  app.get("/login", function(req, res, next) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
      next();
    }
    var ejsObj = {
      pageTitle: "Login",
      user: req.user,
      script: "login",
      messages: req.flash()
    };
    res.render("pages/login", ejsObj);
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    var ejsObj = {
      pageTitle: "Members",
      user: req.user,
      script: "members",
      messages: req.flash()
    };
    // TODO: Check if user is admin/renter/owner and return appropriate data
    // TODO: Can we programmatically add a property to users that lists how many rooms they have added?
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
    var ejsObj = {
      pageTitle: "FlexSpace",
      user: req.user,
      script: "addroom",
      messages: req.flash()
    };
    if (!req.user) {
      return res.redirect("/login");
      next();
    }

    res.render("pages/addroom", ejsObj);
  });

  app.get("/updateroom", function(req, res, next) {
    // If the user already has an account send them to the members page
    var ejsObj = { pageTitle: "FlexSpace", user: req.user, script: "updateroom" };
    if (!req.user) {

      return res.redirect("/login");
      next();
    }


    res.render("pages/updateroom", ejsObj);
  });

  app.get("/viewrooms", function(req, res, next) {
    // If the user already has an account send them to the members page
    var ejsObj = {
      pageTitle: "FlexSpace",
      user: req.user,
      script: "viewrooms",
      messages: req.flash()
    };
    if (!req.user) {
      return res.redirect("/login");
      next();
    }

    res.render("pages/viewrooms", ejsObj);
  });

  app.get("/contact", function(req, res) {
    // If the user already has an account send them to the members page
    var ejsObj = {
      pageTitle: "Contact",
      user: req.user,
      script: "contact",
      messages: req.flash()
    };

    res.render("pages/contact", ejsObj);
  });
  


  app.get("/about", function(req, res) {
    // If the user already has an account send them to the members page
    var ejsObj = {
      pageTitle: "About",
      user: req.user,
      script: "about",
      messages: req.flash()
    };

    res.render("pages/about", ejsObj);
  });

  app.get("/user/:id", function(req, res) {
    // If the user already has an account send them to the members page
    var ejsObj = {
      pageTitle: "User Information",
      user: req.user,
      script: "user",
      messages: req.flash()
    };
    console.log(JSON.stringify(req.user));

    res.render("pages/user", ejsObj);
  });

  app.get("/rendercalender", function(req, res, next) {
    // If the user already has an account send them to the members page
    /*if (req.user) {

    var ejsObj = { pageTitle: "FlexSpace",
                   loggedIn: true };


    } else {
      var ejsObj = { pageTitle: "FlexSpace",
      loggedIn: false };

      return res.redirect("/login");
      next()

    }*/
    var ejsObj = {
      pageTitle: "Reservations",
      user: req.user,
      script: "reservations",
      messages: req.flash()
    };

    if (!req.user) {
      return res.redirect("/login");
      next();
    }

    res.render("pages/rendercalender", ejsObj);
  });



  app.get("/updateroom", function(req, res, next) {
    var ejsObj = { pageTitle: "FlexSpace",
    loggedIn: true };

    var ejsObj = {
      pageTitle: "Update Room",
      user: req.user,
      script: "updateroom"
    };
    if (!req.user) {
      return res.redirect("/login");
      next();
    }
    res.render("pages/members", ejsObj);
  });
      // Review route test
      app.get("/reviews", function(req, res) {
        // If the user already has an account send them to the members page
        var ejsObj = {
          pageTitle: "Reviews",
          user: req.user,
          script: "review"
        };
    
        res.render("pages/reviews", ejsObj);
      });


  // Submit Review route test
  app.get("/submitreview", function(req, res) {
    // If the user already has an account send them to the members page
    var ejsObj = {
      pageTitle: "Submit Review",
      user: req.user,
      script: "submitReview"
    };

    res.render("pages/submitreview", ejsObj);
  });


  app.get("*", function(req, res) {

    // If the user already has an account send them to the members page
    var ejsObj = {
      pageTitle: "Not Found",
      user: req.user,
      script: "error",
      messages: req.flash()
    };

    res.render("pages/error", ejsObj);
  });


  
};
