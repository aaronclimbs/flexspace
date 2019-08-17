var db = require("../models");


module.exports = function(app) {


    // CRUD stuff for "Reservation" tables:
  
    app.get("/api/Reservations/", function(req, res) {
      db.Reservation.findAll({})
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    app.get("/api/Reservations/type/:ReservationType", function(req, res) {
      db.Reservation.findAll({
        where: {
          ReservationType: req.params.type
        }
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    app.get("/api/Reservations/:id", function(req, res) {
      db.Reservation.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    app.post("/api/Reservations", function(req, res) {
      console.log(req.body);
      db.Reservation.create({
        ReservationName: req.body.ReservationName,
        ReservationCapacity: req.body.ReservationCapacity,
        ReservationURL: req.body.ReservationURL,
        ReservationType: req.body.ReservationType,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state_us: req.body.state_us,
        zip: req.body.zip,
        contactPhone: req.body.contactPhone,
        ownerID: req.user.email,
        hourlyRate: req.body.hourlyRate
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    app.delete("/api/Reservations/:id", function(req, res) {
      db.Reservation.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    app.put("/api/Reservations", function(req, res) {
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
