
var path = require("path");



module.exports = function(app) {


  app.get("/rooms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/rooms.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
