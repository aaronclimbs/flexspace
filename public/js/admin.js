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
  const id = e.target.dataset.id;
  $.ajax({
    method: "DELETE",
    url: "api/reservations/" + id
  }).then(function(err) {
    if (err) {
      console.log("error deleting reservations");
    }
    console.log("deleted RESERVATIONS from roomID:" + id);
    $.ajax({
      method: "DELETE",
      url: "api/rooms/" + id
    }).then(function(err) {
      if (err) {
        console.log("error deleting rooms");
      }
      console.log("deleted Rooms from userID:" + id);
      $.ajax({
        method: "DELETE",
        url: "api/rooms/" + id
      }).then(() => {
        console.log("Deleted successfully");
        location.reload(true);
      });
    });
  });
}

function roomDelete(e) {
  const id = e.target.dataset.id;
  $.ajax({
    method: "DELETE",
    url: "api/reservations/" + id
  }).then(function(err) {
    if (err) {
      console.log("error deleting reservations");
    }
    console.log("deleted RESERVATIONS from roomID:" + id);
    $.ajax({
      method: "DELETE",
      url: "api/rooms/" + id
    }).then(function() {
      console.log("Room Id " + id);
      location.reload(true);
    });
  });
}

function reservationDelete(e) {
  const id = e.target.dataset.id;
  $.ajax({ method: "DELETE", url: `api/reservations/${id}` }).then(() => {
    console.log(`Reservation ID: ${id} was deleted.`);
    location.reload(true);
  });
}
