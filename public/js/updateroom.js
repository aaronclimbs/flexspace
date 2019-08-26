$(document).ready(function() {




  // $.get("/api/users/" + user.id).then(function(userdata) {
      
  //     $(".member-name").text(userdata.id);
  //     //$("#logMsg").text("Logged In").css("display", "unset");
  //     $("#login").css("display", "none");
  //     $("#signup").css("display", "none");
  //     $("#features").css("display", "none");

  //     $("#email-input").attr("placeholer", userdata.email);
  //     $("#phone-input").attr("placeholer", userdata.phone);
  //     $("#sec-question-input").attr("placeholer", userdata.secQuestion);
  //     $("#sec-question-answer").attr("placeholer", userdata.secAnswer);
  //     $("#first-input").attr("placeholer", userdata.first);
  //     $("#last-input").attr("placeholer", userdata.last);
  //     $("#address1-input").attr("placeholer", userdata.address1);
  //     $("#address2-input").attr("placeholer", userdata.address2);
  //     $("#state-input").attr("placeholer", userdata.state);
  //     $("#zip-input").attr("placeholer", userdata.zip);

  // });
  
  // email: req.body.email,
  // first: req.body.first,
  // last: req.body.last,
  // address: req.body.address,
  // address2: req.body.address2,
  // city: req.body.city,
  // state: req.body.state,
  // zip: req.body.zip,
  // phone: req.body.phone,
  // secQuestion: req.body.secQuestion,
  // secAnswer:


// Getting references to our form and input
// var userId = $('[data-id]').data('id');
// var userUpdateForm = $("form.user");
// var emailInput = $("#email-input");
// var passwordInput = $("#password-input");
// var firstInput = $("#first-input");
// var lastInput = $("#last-input");
// var address1Input = $("#address1-input");
// var address2Input = $("#address2-input");
// var cityInput = $("#city-input");
// var stateInput = $("#state-input");
// var zipInput = $("#zip-input");
// var phoneInput = $("#phone-input");
// var secQuestionInput = $("#sec-question-input");
// var secAnswerInput = $("#sec-question-answer");

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  return results;
}

console.log($.urlParam('variable'))

var urlRoomID=$.urlParam('variable');

var newRoomId = urlRoomID[1];
console.log("testing" +newRoomId);

$.get("/api/rooms/" + newRoomId , function(roomInfo) {
console.log(roomInfo);
      $("#room-input").val(roomInfo.roomName);
      $("#capacity-input").val(roomInfo.roomCapacity);
      $("#room-url-input").val(roomInfo.roomURL);
      $("#room-type-input").val(roomInfo.roomType).attr("selected");
      $("#room-rate-input").val(roomInfo.hourlyRate);
      $("#room-phone-input").val(roomInfo.contactPhone);
      $("#address1-input").val(roomInfo.address1);
      $("#address2-input").val(roomInfo.address2);
      $("#city-input").val(roomInfo.city);
      $("#state-input").val(roomInfo.state_us);
      $("#zip-input").val(roomInfo.zip);
      //console.log($("#zip-input"));

      $("#update-room").on("submit", function(event) {
        event.preventDefault();
        console.log("Update room clicked")
       
        // var roomid = this.id;
        // console.log(roomid);

        //var updateRoomForm = $("#update-room");
        var roomInput = $("#room-input");
        var capacityInput = $("#capacity-input");
        var roomURLInput = $("#room-url-input");
        var roomTypeInput = $("#room-type-input");
        var address1Input = $("#address1-input");
        var address2Input = $("#address2-input");
        var cityInput = $("#city-input");
        var stateInput = $("#state-input");
        var zipInput = $("#zip-input");
        var roomRateInput = $("#room-rate-input");
        var phoneInput = $("#room-phone-input");




        
       
        var roomData = {
          id: roomInfo.id,
          roomName: roomInput.val().trim(),
          roomCapacity: capacityInput.val().trim(),
          roomURL: roomURLInput.val().trim(),
          roomType: roomTypeInput.val().trim(),
          address1: address1Input.val().trim(),
          address2: address2Input.val().trim(),
          city: cityInput.val().trim(),
          state_us: stateInput.val().trim(),
          zip: zipInput.val().trim(),
          contactPhone:phoneInput.val().trim(),
          roomRate:roomRateInput.val().trim(),
        };
      
        console.log("room Data being updated is "+ JSON.stringify(roomData))
        // If we have an email and password, run the signUpUser function
        addRoom(roomData.id, roomData.roomName, roomData.roomCapacity, roomData.roomURL, roomData.roomType,roomData.address1,roomData.address2, roomData.city,roomData.state_us,roomData.zip,roomData.contactPhone, roomData.roomRate);
        // thisRoomId.val("");
        /*roomInput.val("");
        capacityInput.val("");
        roomURLInput.val("");
        roomTypeInput.val("");
        address1Input.val("");
        address2Input.val("");
        cityInput.val("");
        stateInput.val("");
        zipInput.val("");
        phoneInput.val("");
        roomRateInput.val("");*/
       
      });


})


console.log("Room id is " + urlRoomID)






// Does a post to the signup route. If successful, we are redirected to the members page
// Otherwise we log any errors
function addRoom(thisRoomId, roomName, roomCapacity, roomURL, roomType, address1, address2, city, state_us, zip, contactPhone, roomRate) {
  $.ajax({
    type:"PUT",
    url: "/api/updateroom/" + thisRoomId,
    data: { 
    roomName: roomName,
    roomCapacity: roomCapacity,
    roomURL:roomURL,
    roomType:roomType,
    address1:address1,
    address2:address2,
    city:city,
    state_us:state_us,
    zip:zip,
    contactPhone:contactPhone,
    hourlyRate: roomRate,
      },
      datatype: 'application/json',
      success: function(result) {
          console.log(result);
          location.reload(true)
          //window.location.replace("?variable=" + thisRoomId);
      },
     
  });
}


});

// // Does a post to the signup route. If successful, we are redirected to the members page
// // Otherwise we log any errors
// function updateUser(email, password, first, last, address, address2, city, state, zip, phone, secQuestion, secAnswer) {
//   console.log("the PUT was attempted")
//   console.log(JSON.stringify(userId));
//   $.ajax({
//       type:"PUT",
//       url: "/api/users/" + userId,
//       data: {
//           email: email,
//           password: password,
//           first:first,
//           last:last,
//           address:address,
//           address2:address2,
//           city:city,
//           state:state,
//           zip:zip,
//           phone:phone,
//           secQuestion:secQuestion,
//           secAnswer:secAnswer
//       },
//       datatype: 'application/json',
//       success: function(result) {
//           console.log(result);
//           window.location.replace(result);
//       },
//       error: handleLoginErr
//   });
// }

// function handleLoginErr(err) {
//   $("#alert").text(err.responseJSON);
//   $("#alert").fadeIn(500);
// }

// })

