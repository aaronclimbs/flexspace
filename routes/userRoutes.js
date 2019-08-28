var db = require("../models");
const https = require("https");
require("dotenv").config();

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    if (req.user.isAdmin) {
      db.User.findAll({})
        .then(function(result) {
          res.json(result);
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
    } else {
      res.json({});
    }
  });

  app.get("/api/users/:id", function(req, res) {
    console.log("request.user" + JSON.stringify(req.user));
    if (req.user.isAdmin || req.user.id == req.params.id) {
      db.User.findByPk(req.params.id)
        .then(function(result) {
          res.json(result);
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
    } else {
      res.json({});
    }
  });

  app.get("/api/users4owner/:id", function(req, res) {
    console.log("request.user" + JSON.stringify(req.user));
    // if (req.user.isAdmin || req.user.id == req.params.id) {
    db.User.findByPk(req.params.id)
      .then(function(result) {
        var showResBooking = {
          first: result.first,
          last: result.last,
          email: result.email,
          phone: result.phone
        };
        res.json(showResBooking);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
    // } else {
    //   res.json({});
    // }
  });

  app.put("/api/users/:id", function(req, res) {
    if (req.user.isAdmin || req.user.id == req.params.id) {
      console.log(JSON.stringify(req.body));
      db.User.update(
        {
          email: req.body.email,
          first: req.body.first,
          last: req.body.last,
          address: req.body.address,
          address2: req.body.address2,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          phone: req.body.phone,
          secQuestion: req.body.secQuestion,
          secAnswer: req.body.secAnswer
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
        .then(function(result) {
          req.flash("info", "User information updated.");
          res.json(result);
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
    } else {
      res.json({});
    }
  });

  app.put("/api/users/:id/reset", function(req, res) {
    if (req.user.isAdmin || req.user.id == req.params.id) {
      db.User.update(
        {
          password: req.body.password
        },
        {
          where: {
            secAnswer: req.body.secAnswer,
            id: req.params.id
          }
        }
      )
        .then(function(result) {
          req.flash("info", "Password successfully reset.");
          res.json(result);
        })
        // need some sort of logging/redirect/message in case security question does not match
        // possibly also an option to reset security question based on cell number?
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
    } else {
      res.json({});
    }
  });

  app.delete("/api/users/:id", function(req, res) {
    if (req.user.isAdmin || req.user.id == req.params.id) {
      db.User.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(result) {
          req.flash("danger", "User successfully deleted.");
          res.json(result);
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
    } else {
      res.json({});
    }
  });

  // check if user exists
  app.get("/api/users/:email/check", (req, res) => {
    const logins = db.User.findAll({}).then(data => {
      return data;
    });
    Promise.resolve(logins).then(data => {
      const matches = data.filter(user => user.email === req.params.email);
      res.json({
        match: matches.length >= 1 ? true : false
      });
    });
  });

  //check zip code
  app.get("/api/user/:zip/check", (req, res) => {
    const key = process.env.ZipCodeAPI_KEY;
    console.log(key);
    var url = "https://www.zipcodeapi.com/rest/" + key + "/info.json/" + req.params.zip + "/radians";
    const zipFetch = https.get(url, result => {
      result.setEncoding("utf8");
      let body = "";
      result.on("data", data => {
        body += data;
      });
      result.on("end", () => {
        body = JSON.parse(body);
        res.json(body);
      });
    });
  });
};
