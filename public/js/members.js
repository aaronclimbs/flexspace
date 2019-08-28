$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page






    $.get("/api/user_data").then(function(userdata) {

      $(".member-name").text(userdata.first + ",");
      //$("#logMsg").text("Logged In").css("display", "unset");
      $("#login").css("display", "none");
      $("#signup").css("display", "none");
      $("#features").css("display", "none");



 $.get("/api/reservationsbyuser/" +userdata.id, function(resdata) {

var i=0;


  resdata.forEach(function(element){

    rowDiv=$("<tr>")
    rowDiv.addClass("reservationrow")
    rowDiv.attr("id", "reservation-row"+i)

    $("#my-reservations").append(rowDiv)

    roomName=$("<td>")
    roomName.addClass("get-room-info")
    roomName.attr("id", element.RoomId)
    roomName.html('<a href="#" id="'+element.roomId+'">'+element.Room.roomName)



    resName=$("<td>")
    resName.attr("id", "reservation"+i)
    resName.attr("id", element.id)
    resName.text(element.text)




    resDate=$("<td>")
    resDate.attr("id", "reservation-date"+i)
    resDate.text(moment(element.start_date).format( "MMM DD YYYY"))

    resTime=$("<td>")
    resTime.attr("id", "reservation-time"+i)
    resTime.text(moment(element.start_date+ " " + element.start_time).format("hh:mm A"))


    resDur=$("<td>")
    resDur.attr("id", "reservation-duration"+i)
    resDur.text(element.duration + " hr")

    resCost=$("<td>")
    resCost.text("$" + element.duration * element.Room.hourlyRate)

    resUpdDel=$("<td>")

    resDel=$("<span>")
    resDel.addClass("del-res float-left pr-4")
    resDel.html('<i class="fas fa-calendar-times"></i>')
    resDel.attr("id", element.id)

    resUpd=$("<span>")
    resUpd.addClass("update-res")
    resUpd.html('<i class="fas fa-edit"></i>')
    resUpd.attr("id", element.id)


    rowDiv.append(resName,roomName, resDate, resTime, resDur, resCost, resUpdDel)
      resUpdDel.append(resDel, resUpd)


  i++
  })




  })



  $.get("/api/pastreservationsbyuser/" +userdata.id, function(pastresdata) {


    var i=0;


      pastresdata.forEach(function(element){

        pastrowDiv=$("<tr>")
        pastrowDiv.addClass("reservationrow")
        pastrowDiv.attr("id", "reservation-row"+i)

        $("#my-past-reservations").append(pastrowDiv)

        pastroomName=$("<td>")
        pastroomName.addClass("get-room-info")
        pastroomName.attr("id", element.RoomId)





        pastroomName.html('<a href="#" id="'+element.RoomId+'">'+element.Room.roomName)




        pastresName=$("<td>")
        pastresName.attr("id", "reservation"+i)
        pastresName.attr("id", element.id)
        pastresName.text(element.text)




        pastresDate=$("<td>")
        pastresDate.attr("id", "reservation-date"+i)
       pastresDate.text(moment(element.start_date).format( "MMM DD YYYY"))

        pastresTime=$("<td>")
       pastresTime.attr("id", "reservation-time"+i)
        pastresTime.text(moment(element.start_date+ " " + element.start_time).format("hh:mm A"))


        pastresDur=$("<td>")
       pastresDur.attr("id", "reservation-duration"+i)
        pastresDur.text(element.duration + " hr")

        pastresCost=$("<td>")
        pastresCost.text("$" + element.duration * element.Room.hourlyRate)

        //$.get("/api/submitreview/" +element.RoomId, function(reviewdata) {

        pastReview=$("<td>")

        pastReviewLink=$("<a>")
        pastReviewLink.attr("id", element.RoomId)
        pastReviewLink.addClass("review-click")
        pastReviewLink.text("Review Room")







        pastrowDiv.append(pastresName,pastroomName, pastresDate, pastresTime, pastresDur, pastresCost, pastReview)

        pastReview.append(pastReviewLink)


      i++
      })

  })

  $.get("/api/rooms/" , function(roomdata) {
  var i=0;

  var results = JSON.stringify(roomdata)


  console.log(results)
    roomdata.forEach(function(element){




      rowDiv=$("<tr>")
      rowDiv.addClass("room-row")
      rowDiv.attr("id", "room-row"+i)

      $("#my-rooms").append(rowDiv)

      roomImg=$("<img>")
      roomImg.attr("src", element.roomURL)
      roomImg.addClass("room-thumb")



      roomName=$("<td>")
      roomName.attr("id", "room-name"+i)
      roomName.attr("id", element.id)
      roomName.text(element.roomName)


      roomLoc=$("<td>")
      roomLoc.attr("id", "room-loc"+i)
      roomLoc.text(element.city + ", " + element.state_us)

      roomResCount=$("<td>")
      roomResCount.addClass("get-res-info")
      roomResCount.attr("id", element.id)
      roomResCount.html('<a href="#" id="'+element.id+'">'+element.Reservations.length)



      roomReviews=$("<td>")



      roomReviews.addClass("get-review-info")
      roomReviews.attr("id", element.id)
      roomReviews.html('<a href="#" id="'+element.id+'">Check Reviews')




      roomUpdDel=$("<td>")



      roomDel=$("<span>")
    roomDel.addClass("del-room float-left pr-4")
    roomDel.html('<i class="fa fa-trash" ></i>')
    roomDel.attr("id", element.id)

    roomUpdate=$("<span>")
    roomUpdate.addClass("update-room")
    roomUpdate.html('<i class="fa fa-pen" ></i>')
    roomUpdate.attr("id", element.id)



      rowDiv.append(roomImg, roomName, roomLoc, roomResCount,roomReviews, roomUpdDel)


      roomUpdDel.append(roomDel, roomUpdate)

    i++
    })

    })




    })


    /*Clickable actions */

    $(document).on ("click", ".del-res", function (event)  {
      console.log("Launch modal clicked")
      event.preventDefault();
      jQuery.noConflict();
    var resid = this.id

    $("#confirm-res-del-btn").attr("value", resid)

    $("#res-del-info").text("Are you sure you want to delete this reservation?")

    $("#confirm-res-del-modal").modal("toggle");


    $(document).on ("click", "#confirm-res-del-btn", function (event)  {
      console.log("Confrim Delete clicked")
      event.preventDefault();



    console.log("Reservation ID " + resid)

    $.ajax({
    method: "DELETE",
    url: "api/reservations/" + resid
    })
    .then(function() {
    console.log("Reservation ID "+ resid)
    location.reload(true)
    });

    })



    })

    $(document).on ("click", ".get-room-info", function (event)  {
      event.preventDefault();
      var roomid = this.id
      console.log("Id from click is " + this.id)
      $("#room-name").empty();
      jQuery.noConflict();

      $.get("/api/rooms/" + roomid, function(roomdata) {

        $("#modal-room-name").text(roomdata.roomName)

        console.log("Room data from link click is " + roomdata)

        var roomDiv=$("<div>");
        roomDiv.addClass("card modal-room-card");
        roomDiv.attr("id", "room");
        roomDiv.attr("value", roomdata.roomID);

        $("#room-name").append(roomDiv);


        var roomImg=$("<img>");
        roomImg.attr("id", "room-image");
        roomImg.attr("src", roomdata.roomURL);
        roomImg.addClass("card-img-top modal-room-photo");

        $("#room").append(roomImg);

        var bodyDiv=$("<div>");
        bodyDiv.addClass("card-body modal-room-card-body");
        bodyDiv.attr("id", "card-body");

        $("#room").append(bodyDiv);


        var roomAddCont = $("<div>")
        roomAddCont.addClass("d-inline-block")
        roomAddCont.attr("id", "roomAddCont")

        var roomAdd=$("<p>")
        roomAdd.html(roomdata.address1 + "<br>" + roomdata.address2 +"<br>" + roomdata.city + " " + roomdata.state_us + " " +roomdata.zip)
         roomAdd.addClass("text-left");

        $("#card-body").append(roomAddCont)

        $("#roomAddCont").append(roomAdd)

        var roomInfo=$("<ul>")
         roomInfo.addClass("list-group list-group-flush")
         roomInfo.attr("id", "roomInfo")

         $("#room").append(roomInfo)

        var roomType=$("<li>");
        roomType.addClass("list-group-item ")
        roomType.text("Type: " + roomdata.roomType.toUpperCase() + "  Rate:  $" + roomdata.hourlyRate+"/hr")

         var roomCapacity=$("<li>");
         roomCapacity.addClass("list-group-item")
         roomCapacity.text("Capacity: " + roomdata.roomCapacity)

        /* var editRoom=$("<button>")
         editRoom.attr("id", roomdata.id)
         editRoom.addClass("update-room");
         editRoom.attr("owner-id", roomdata.roomOwnerID)
         editRoom.attr("roomname", roomdata.roomName)
         editRoom.text("Edit")*/


     $("#roomInfo").append(roomType, roomCapacity)

     $("#show-room-modal").modal("toggle");


/* end get*/
      })

/*end click*/
})




$(document).on ("click", ".update-res", function (event)  {
  console.log("Update link clicked")

  event.preventDefault();
  jQuery.noConflict();
  var resid = this.id
  console.log("Id from click is " + resid)




  $.get("/api/reservations/" + resid).then(function(updatedata) {

  console.log("Room data from link click is " +JSON.stringify(updatedata))

var date = moment(updatedata.start_date).format("YYYY-MM-DD")
var time = moment( updatedata.start_date+ " " +  updatedata.start_time).format("HH:MM")
var text= updatedata.text
var dur = updatedata.duration

var ampm =moment(date + " " +time).format("A")

var hour = time.slice(0,2)
var min = time.slice(3,5)


console.log("Slice time is " + hour + " " + min + " " + ampm)

console.log("Date is " + date)
console.log("Time is " + time)
console.log("Text is " + text)
console.log("Dur is " + dur)

  $("#res-date-input").val(date)
  $("#res-hh-input").val(hour)
  $("#res-mm-input").val(min)
  $("#res-text-input").val(text)
  $("#res-dur-input").val(dur)
  $("#am-pm").text(ampm)

 $("#show-res-modal").modal("toggle");

 $(document).on ("click", "#update-res-btn", function (event)  {
  console.log("Update Button clicked")
  event.preventDefault();

  var resHH= parseInt($("#res-hh-input").val())

 var newDate = $("#res-date-input").val()
 var newTime = $("#res-hh-input").val() + ":00"
 var newDur = $("#res-dur-input").val()
 var newText = $("#res-text-input").val().trim()

 console.log("Old info was " + date+ " " + time+ " " + dur+ " " + text)

 convertedTime=moment(newDate+ " " + newTime).format("HH:MM")


 console.log("New res info being submitted is " + newDate + " " + newTime + " " + newDur + " " + newText)

 if (date===newDate) {
   console.log("Dates match")
 }

 if (time === convertedTime) {
  console.log("Times match")

 }

 var updatedRes = {
  id:resid,
  start_date: newDate,
  start_time: newTime,
  duration: newDur,
  text: newText

 }


 if (date === newDate && time === convertedTime && dur == newDur) {
  updateRes ( updatedRes.id, updatedRes.start_date,updatedRes.start_time,updatedRes.duration,updatedRes.text)

 } else {

  checkConflict()

 }

    function checkConflict () {


        $.get("/api/reservationsbyroomdate/" + updatedata.RoomId +"/" +newDate, function(reservations) {
            console.log("Number of reservations is " + reservations.length)
            if( reservations.length === 0) {
                console.log("No reservation found, go ahead and process")

                updateRes ( updatedRes.id, updatedRes.start_date,updatedRes.start_time,updatedRes.duration,updatedRes.text)


        } else {
            var resHours =[]
            for (z=0; z < newDur; z++) {
                resHours.push(resHH + z)
            }
            console.log("The hours for this reservation are " + resHours)

            for (m=0; m < reservations.length; m++) {
                for( h=8; h < 22; h++ ) {
                var meetingTime = parseInt(moment ((reservations[m].start_date + " " +reservations[m].start_time )).format("H"))
                console.log("Meeting time is " + meetingTime)

                    if (meetingTime === h) {
                    console.log("Meeting found at " + h)

                    var roomBookedhours =[]

                        for (d=0; d < reservations[m].duration; d++) {

                            roomBookedhours.push(h+d)


                    }


                }

            }

            }

            console.log("Rooms booked hours are " + roomBookedhours)

            var conflict=false

            for (y=0; y< resHours.length; y++) {

                checkConflict=roomBookedhours.includes(resHours[y])

                if (checkConflict) {
                    conflict =true
                }

        }

        if (conflict) {
            console.log("There is a meeting conflict")


            $("#meeting-conflict-modal").modal("toggle")
            $(document).on("click","#conflict-close", (function(event) {
                event.preventDefault()


            }))




        } else {
            console.log("No meeting conflict")
            updateRes ( updatedRes.id, updatedRes.start_date,updatedRes.start_time,updatedRes.duration,updatedRes.text)
        }


/* end else*/
        }




    /*end get */
    })






/* end check conflict*/
    }





 function updateRes(id, date, time, dur, text) {
  $.ajax({
    type:"PUT",
    url: "/api/updatereservation/" + id,
    data: {
    id: id,
    start_date: date,
    start_time:time,
    duration:dur,
    text:text

      },
      datatype: 'application/json',
      success: function(result) {
          console.log(result);
          location.reload(false)
          //window.location.replace("?variable=" + thisRoomId);
      },

  });



 }

/* end update button click*/
})

/* end get*/
  })

/*end click*/
})

$(document).on ("click", ".del-room", function (event)  {
  console.log("Delete clicked")
  jQuery.noConflict();
  event.preventDefault();
var roomid = this.id
console.log(this.id);

$("#confirm-res-del-btn").attr("value", roomid)

$("#res-del-info").text("Are you sure you want to delete this room? It will delete all reservations")

$("#confirm-res-del-modal").modal("toggle");


$(document).on ("click", "#confirm-res-del-btn", function (event)  {
  console.log("Confrim Delete clicked")
  event.preventDefault();

/* Get the reservation for the room */

$.get("/api/reservationsbyroom/" + roomid, function(resdata) {

  console.log("Reservation data length is " + resdata.length)

  if (resdata.length !== 0) {

  for (i =0; i< resdata.length; i++) {

    $.ajax({
      method: "DELETE",
      url: "api/reservations/" + resdata[i].id
      })
      .then(function() {
      console.log("Reservation ID deleted was "+ resid)

      });


  }
}

  $.ajax({
    method: "DELETE",
    url: "api/rooms/" + roomid
    })
    .then(function() {
    console.log("Room ID deleted was"+ roomid)

    });


location.reload(true)


//*end get*/
})

})
/*end click*/
})

$(document).on ("click", ".update-room", function (event)  {
  event.preventDefault();
var roomid = this.id

console.log( "Room ID being sent in URL is "+ roomid)

window.location = "/updateroom/?variable=" + roomid;

})

$(document).on ("click", ".review-click", function (event)  {
  console.log("Update link clicked")
  console.log("id is " + this.id)

  event.preventDefault();
  jQuery.noConflict();
  var roomid = this.id
  console.log("Id from click is " + roomid)

$("#submit-review-modal").modal("toggle")

$(document).on("click","#submit-review", (function(event) {
  console.log("Submit review clicked")
  event.preventDefault()


  var reviewMessage =$("#review-message").val()
  var reviewRating =$("input:radio[name='review-rating']:checked").val()


  var reviewData= {
      message: reviewMessage,
      rating: reviewRating,
      roomid: roomid

  }

  $.post("/api/submitreview/", {
      message: reviewData.message,
      rating: reviewData.rating,
      roomid: reviewData.roomid


    }).then(function(data) {

      location.reload(true)
     // window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    })




}))

})

/* get Review Click*/


$(document).on ("click", ".get-review-info", function (event)  {
  event.preventDefault();
  var roomid = this.id

  console.log("Id from click is " + this.id)

  $("#reviews-list").empty()

  jQuery.noConflict();

  $.get("/api/reviews/" + roomid, function(revdata) {

    console.log("Review data is " + JSON.stringify(revdata))

    var i=0

   for (i =0; i< revdata.length; i++) {

      revTR= $("<tr>")
      revTR.attr("id", "reviews-row"+i)

      $("#reviews-list").append(revTR)

      revName =$("<td>")
      revName.text(revdata[i].User.first + " " + revdata[i].User.last)

      revEmail =$("<td>")
      revEmail.text(revdata[i].User.email)

      revPhone =$("<td>")
      revPhone.text(revdata[i].User.phone)

      revRating =$("<td>")
      revRating.text(revdata[i].rating)

      revReview =$("<td>")
      revReview.text(revdata[i].message)


      $('#reviews-row'+i).append(revName, revEmail, revPhone, revRating, revReview)





    }


  })

  $("#show-room-rev-modal").modal("toggle");

})




// GET RES INFO:
    // get-res-info

    $(document).on ("click", ".get-res-info", function (event)  {
      event.preventDefault();
      var roomid = this.id

      console.log("Id from click is " + this.id)
      $("#reservations-list").empty();
      jQuery.noConflict();

      $.get("/api/reservationsbyroom/" + roomid, function(resdata) {

        $("#reservations-list").text(resdata.roomName)

        console.log("Room data from link click is " + JSON.stringify(resdata));

        var resDiv=$("<div>");
        resDiv.addClass("card modal-res-card");
        resDiv.attr("id", "reservation");
        // resDiv.attr("value", "Reservations for this room: ");
        $("#reservations-list").append(resDiv);

        var bodyDiv=$("<div>");
        bodyDiv.addClass("card-body modal-room-card-body");
        bodyDiv.attr("id", "card-body");
        bodyDiv.html("<i>Reservations for this room: </i><br>");
        $("#reservation").append(bodyDiv);

        var resInfo=$("<ul>")
        resInfo.addClass("list-group list-group-flush")
        resInfo.attr("id", "resInfo")
        $("#reservation").append(resInfo)

        var bookingText;
        for (let i = 0;i<resdata.length; i++) {

          $.get("/api/users4owner/" + resdata[i].UserId, function(usrdata) {
            var bookingText2 = [];
            bookingText2 = {first: usrdata.first, last: usrdata.last, phone: usrdata.phone, email: usrdata.email};
            // console.log([{first: usrdata.first, last: usrdata.last, phone: usrdata.phone, email: usrdata.email}])
            // console.log(bookingText2[i]);
            // console.log("resdata: " + resdata[i].id + resdata[i].start_date + resdata[i].start_time + resdata[i].duration);
            var reservationItem=$("<li>");
            reservationItem.addClass("list-group-item")
            reservationItem.attr("id", "item"+i)

            bookingText = "Booked: " + resdata[i].start_date + " at " + resdata[i].start_time + " for " + resdata[i].duration + " hour(s), <i>Booked by: " + bookingText2.first + " " + bookingText2.last + " Phone: " + bookingText2.phone + " Email: " + bookingText2.email + "</i>";
            // console.log(bookingText);
            reservationItem.html(bookingText)
            $("#resInfo").append(reservationItem)
          });


        }


        $("#show-room-res-modal").modal("toggle");

      })
    })







/* end doc*/
})



