$(document).ready(function() {
  // Getting references to our form and input
  var addRoomForm = $("#add-room");
  var roomInput = $("input#room-input");
  var capacityInput = $("input#capacity-input");
  var roomURLInput = $("input#room-url-input");
  var roomTypeInput = $("#room-type-input");
  var address1Input = $("input#address1-input");
  var address2Input = $("input#address2-input");
  var cityInput = $("input#city-input");
  var stateInput = $("#state-input");
  var zipInput = $("input#zip-input");
  var roomRateInput = $("input#room-rate-input");
  var phoneInput = $("input#room-phone-input");

  // When the signup button is clicked, we validate the email and password are not blank
  addRoomForm.on("submit", function(event) {
    $("#loading").fadeIn();

    console.log("Add room clicked");
    event.preventDefault();
    var roomData = {
      roomName: roomInput.val().trim(),
      roomCapacity: capacityInput.val().trim(),
      roomURL: roomURLInput.val().trim(),
      roomType: roomTypeInput.val().trim(),
      address1: address1Input.val().trim(),
      address2: address2Input.val().trim(),
      city: cityInput.val().trim(),
      state_us: stateInput.val().trim(),
      zip: zipInput.val().trim(),
      contactPhone: phoneInput.val().trim(),
      roomRate: roomRateInput.val().trim()
    };

    console.log("room Data is " + roomData);
    // If we have an email and password, run the signUpUser function
    addRoom(
      roomData.roomName,
      roomData.roomCapacity,
      roomData.roomURL,
      roomData.roomType,
      roomData.address1,
      roomData.address2,
      roomData.city,
      roomData.state_us,
      roomData.zip,
      roomData.contactPhone,
      roomData.roomRate
    );
    roomInput.val("");
    capacityInput.val("");
    roomURLInput.val("");
    roomTypeInput.val("");
    address1Input.val("");
    address2Input.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
    phoneInput.val("");
    roomRateInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function addRoom(
    roomName,
    roomCapacity,
    roomURL,
    roomType,
    address1,
    address2,
    city,
    state_us,
    zip,
    contactPhone,
    roomRate
  ) {
    $.post("/api/addroom", {
      roomName: roomName,
      roomCapacity: roomCapacity,
      roomURL: roomURL,
      roomType: roomType,
      address1: address1,
      address2: address2,
      city: city,
      state_us: state_us,
      zip: zip,
      contactPhone: contactPhone,
      roomRate: roomRate
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
