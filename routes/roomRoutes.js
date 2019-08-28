var db = require("../models");

module.exports = function(app) {
  // CRUD stuff for "Room" tables:

  app.get("/api/rooms/", function(req, res) {
    db.Room.findAll({}).then(function(dbRoom) {
      res.json(dbRoom);
    });
  });

  app.get("/api/rooms/type/:roomType", function(req, res) {
    db.Room.findAll({
      where: {
        roomType: req.params.type
      }
    }).then(function(dbRoom) {
      res.json(dbRoom);
    });
  });

  app.get("/api/rooms/:id", function(req, res) {
    db.Room.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Review]
    }).then(function(dbRoom) {
      res.json(dbRoom);
    });
  });

  app.post("/api/rooms", function(req, res) {
    console.log(req.body);
    db.Room.create({
      roomName: req.body.roomName,
      roomCapacity: req.body.roomCapacity,
      roomURL: req.body.roomURL,
      roomType: req.body.roomType,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state_us: req.body.state_us,
      zip: req.body.zip,
      contactPhone: req.body.contactPhone,
      ownerID: req.user.email,
      hourlyRate: req.body.hourlyRate
    }).then(function(dbRoom) {
      req.flash("success", "Room added.");
      res.json(dbRoom);
    });
  });

  app.delete("/api/rooms/:id", function(req, res) {
    db.Room.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRoom) {
      req.flash("info", "Room successfully deleted.");
      res.json(dbRoom);
    });
  });

  app.put("/api/updateroom/:id", function(req, res) {
    db.Room.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbRoom) {
      req.flash("danger", "Room information updated.");
      res.json(dbRoom);
    });
  });
};
