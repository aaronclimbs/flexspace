var db = require("../models");

var Sequelize = require('sequelize')
var Op=Sequelize.Op
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

    app.get("/api/reservationsbyroomdate/:roomid/:date", function(req, res) {
     

      db.Reservation.findAll({
    

        where: {
          RoomId: req.params.roomid,
          start_date: req.params.date
        },
        
        
      include: [db.Room]
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });

    app.get("/api/reservationsbyroom/:roomid/", function(req, res) {
     

      db.Reservation.findAll({
    

        where: {
          RoomId: req.params.roomid,
          
        },
        
      include: [db.Room]
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });

    app.get("/api/reservationsbyuser/:userid/", function(req, res) {
     

      db.Reservation.findAll({
    

        where: {
          UserID: req.params.userid,
          
        }
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
  
    app.post("/api/reservations", function(req, res) {
      console.log(req.body);

      console.log("Infor to submit" + req.body.roomID + " " + req.body.resDate + " " + req.body.resTime + " " + req.body.resDur + " " + req.user.id)

      db.Reservation.create({
        RoomId: req.body.roomID,
        start_date: req.body.resDate,
        end_date: req.body.resDate,
        start_time: req.body.resTime,
        duration: req.body.resDur,
        text: req.body.resText,
        UserId: req.user.id
     
      })
        .then(function(dbReservation) {
          res.json(dbReservation);
        });
    });
  
    // app.delete("/api/reservations/:id", function(req, res) {
    //   db.Reservation.destroy({
    //     where: {
    //       id: req.params.id
    //     }
    //   })
    //     .then(function(dbReservation) {
    //       res.json(dbReservation);
    //     });
    // });


    app.delete("/api/reservations/:roomid", function(req, res) {
      db.Reservation.destroy({
        where: {
          RoomId: req.params.roomid
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