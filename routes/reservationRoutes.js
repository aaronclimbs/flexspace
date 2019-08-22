var db = require("../models");


module.exports = function(app) {


    // CRUD stuff for "Reservation" tables:
  
    app.get("/api/reservations/", function(req, res) {
      db.Reservation.findAll({})
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    app.get("/api/Reservations/type/:reservationType", function(req, res) {
      db.Reservation.findAll({
        where: {
          reservationType: req.params.type
        }
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    app.get("/api/reservations/:id", function(req, res) {
      db.Reservation.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    // app.post("/api/reservations", function(req, res) {
    //   console.log(req.body);
    //   db.Reservation.create({
    //     RoomId: req.body.RoomId,
    //     UserId: req.user.email,
    //     start_date: req.body.start_date,
    //     end_date:req.body.end_date,
    //     text: req.body.text
    //   })
    //     .then(function(dbReservation) {
    //       res.json(dbReservation);
    //     });
    // });

    // app.post("/api/addreservation", function(req, res) {
    //   console.log(req.body);
  
    //   delay(function() {
    //     db.Reservation.create({
    //       RoomId: req.body.RoomId,
    //       UserId: req.user.email,
    //       start_date: req.body.start_date,
    //       end_date:req.body.end_date,
    //       text: req.body.text
    //     })
    //       .then(function() {
    //         res.json("/members");
    //       })
    //       .catch(function(err) {
    //         console.log(err);
    //         res.json(err);
    //         // res.status(422).json(err.errors[0].message);
    //       });
    //   }, 2000);
    // });

  
    app.delete("/api/reservations/:id", function(req, res) {
      db.Reservation.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    app.put("/api/reservations", function(req, res) {
      db.Reservation.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
  };