// delete buttons
const deleteUsers = document.querySelectorAll(".delete-user");
const deleteRooms = document.querySelectorAll(".delete-room");
const deleteReservations = document.querySelectorAll(".delete-reservation");

// add event listeners
deleteUsers.forEach(btn => {
  btn.addEventListener("click", userDelete);
});
deleteRooms.forEach(btn => {
  btn.addEventListener("click", roomDelete);
});
deleteReservations.forEach(btn => {
  btn.addEventListener("click", reservationDelete);
});

// functions
function userDelete(e) {
  console.log("Delete clicked");
  const userId = e.target.dataset.id;
  // get users room(s)
  $.get(`/api/admin/user/${userId}/rooms`, resdata => {
    console.log("user's rooms are:" + JSON.stringify(resdata));
    return resdata;
  })
    .then(results => {
      results.forEach(room => {
        $.get("/api/reservationsbyroom/" + room.id, function(resdata) {
          console.log("Reservation data length is " + resdata.length);
          if (resdata.length !== 0) {
            for (let i = 0; i < resdata.length; i++) {
              $.ajax({
                method: "DELETE",
                url: "api/reservations/" + resdata[i].id
              }).then(function(result) {
                console.log("Reservation ID deleted was " + resdata[i].id);
              });
            }
          }
          $.ajax({
            method: "DELETE",
            url: "api/rooms/" + room.id
          }).then(function() {
            console.log("Room ID deleted was" + room.id);
          });
        });
      });
    })
    .then(() => {
      console.log(userId);
      $.ajax({
        method: "DELETE",
        url: "api/users/" + userId
      }).then(function() {
        console.log("User ID deleted was:" + userId);
        location.reload(true);
      });
    });
  /* Get the reservation for the room */
}

function roomDelete(e) {
  console.log("Delete clicked");
  e.preventDefault();
  var roomid = e.target.dataset.id;
  /* Get the reservation for the room */
  $.get("/api/reservationsbyroom/" + roomid, function(resdata) {
    console.log("Reservation data length is " + resdata.length);
    if (resdata.length !== 0) {
      for (let i = 0; i < resdata.length; i++) {
        $.ajax({
          method: "DELETE",
          url: "api/reservations/" + resdata[i].id
        }).then(function(result) {
          console.log("Reservation ID deleted was " + result.id);
        });
      }
    }
    $.ajax({
      method: "DELETE",
      url: "api/rooms/" + roomid
    }).then(function() {
      console.log("Room ID deleted was" + roomid);
    });
    location.reload(true);
  });
}

function reservationDelete(e) {
  const id = e.target.dataset.id;
  $.ajax({ method: "DELETE", url: `api/reservations/${id}` }).then(() => {
    console.log(`Reservation ID: ${id} was deleted.`);
    location.reload(true);
  });
}
