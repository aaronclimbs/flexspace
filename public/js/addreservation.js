$(document).ready(function() {

   
    // Getting references to our form and input
    var addReservationForm = $("#add-reservation");
    var startInput = $("input#startDate");
    var endInput = $("input#endDate");
    var textInput = $("input#text-input");
    var roomInput = $("input#room-input");
   
    // When the signup button is clicked, we validate the email and password are not blank
    addReservationForm.on("submit", function(event) {
      $("#loading").fadeIn();
  
      console.log("Add reservation clicked")
      event.preventDefault();
      var resData = {
        start_date: startInput.val().trim(),
        end_date: endInput.val().trim(),
        text: textInput.val().trim(),
        RoomId: roomInput.val().trim(),
      };
  
      console.log("reservation Data is "+ resData)
      // If we have an email and password, run the signUpUser function
      addReservation(resData.text, resData.start_date, resData.end_date, resData.RoomId);
      textInput.val("");
      startInput.val("");
      endInput.val("");
      roomInput.val("");
     
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function addReservation(textInput, startInput, endInput, roomInput) {
      $.post("/api/addreservation", {
          text: textInput,
          start_date: startInput,
          end_date: endInput,
          RoomId: roomInput,



  
      }).then(function(data) {
        console.log("TEST TEST TEST" +data);
        window.location.replace(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
