const db = require("../models");

module.exports = function(app) {
  app.get("/admin", (req, res, next) => {
    const ejsObj = {
      pageTitle: "Admin Home",
      user: req.user,
      script: "admin",
      messages: req.flash()
    };
    if (!req.user || !req.user.isAdmin) {
      req.flash("warning", "Unauthorized access.");
      res.redirect("/");
    } else if (req.user.isAdmin) {
      const users = db.User.findAll().then(data => {
        return data;
      });
      const rooms = db.Room.findAll().then(data => {
        return data;
      });
      const reservations = db.Reservation.findAll().then(data => {
        return data;
      });

      Promise.all([users, rooms, reservations]).then(data => {
        ejsObj.users = data[0];
        ejsObj.rooms = data[1];
        ejsObj.reservations = data[2];
        return res.render("pages/admin", ejsObj);
      });
    }
  });

  app.get("/admin/user/:id/delete", (req, res) => {});
};
