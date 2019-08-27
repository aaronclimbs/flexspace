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
      const rooms = db.Room.findAll({
        include: [db.User, db.Reservation]
      }).then(data => {
        console.log(JSON.stringify(data));
        return data;
      });
      const reservations = db.Reservation.findAll().then(data => {
        return data;
      });

      const revenueData = db.User.findAll({
        include: [
          {
            model: db.Room,
            include: [
              {
                model: db.Reservation
              }
            ]
          }
        ]
      }).then(data => {
        console.log(JSON.stringify(data, null, 2));
        return data;
      });
      Promise.all([revenueData, rooms, reservations]).then(data => {
        // user revenue
        const revenueEjs = data[0].map(user => {
          const userRevArr = user.Rooms.map(room => {
            return room.Reservations.reduce((acc, val) => {
              acc += val.duration * parseInt(room.hourlyRate);
              return acc;
            }, 0);
          });
          const revenue = userRevArr.reduce((acc, val) => {
            return acc + val;
          }, 0);
          const numReservations = user.Rooms.reduce((acc, val) => {
            return acc + val.Reservations.length;
          }, 0);
          return {
            id: user.id,
            email: user.email,
            rooms: user.Rooms.length,
            reservations: numReservations,
            revenue: "$ " + revenue.toFixed(2)
          };
        });

        // reservations/room

        const roomEjs = data[1].map(room => {
          return {
            id: room.id,
            name: room.roomName,
            type: room.roomType,
            owner: room.User.email,
            reservations: room.Reservations.length
          };
        });

        ejsObj.users = revenueEjs;
        ejsObj.rooms = roomEjs;
        ejsObj.reservations = data[2];
        return res.render("pages/admin", ejsObj);
      });
    }
  });

  app.get("/api/admin/user/:id/rooms", (req, res) => {
    const rooms = db.Room.findAll({
      where: {
        userId: req.params.id
      }
    }).then(data => res.json(data));
  });
};
