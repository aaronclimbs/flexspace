var db = require("../models");


module.exports = function(app) {


    app.get("/api/reviews/:id", function(req, res) {
        db.Review.findAll({
          where: {
            RoomId: req.params.id
          },
          include: [db.User]

        })
          .then(function(dbReservation) {
            res.json(dbReservation);
          });
      });


    app.post("/api/submitreview/", function(req, res) {
        console.log(req.body);
        db.Review.create({
          message: req.body.message,
          rating: req.body.rating,
          RoomId: req.body.roomid,
          UserId: req.user.id
       
        })
          .then(function(dbReview) {
            res.json(dbReview);
          });
      });
    



 }