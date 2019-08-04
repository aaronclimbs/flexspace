

var roomData = require("../data/roomData");




module.exports = function(app) {


  app.get("/api/rooms", function(req, res) {
    res.json(roomData);
  });



  app.post("/api/rooms", function(req, res) {


      roomData.push(req.body);
      res.json(true);

  });


app.get("/api/rooms/:name", function(req, res) {
  var chosen = req.params.name;


  for (var i = 0; i < roomData.length; i++) {

    console.log(res.json(roomData));
    if (chosen === roomData[i].customerName) {

      return res.json(roomData[i]);

    }
  }

  return res.json(false);
});

//******************************* */


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    roomData.length = 0;


    res.json({ ok: true });
  });
};
