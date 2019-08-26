$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page






    $.get("/api/user_data").then(function(userdata) {
    
      $(".member-name").text(userdata.first);
      //$("#logMsg").text("Logged In").css("display", "unset");
      $("#login").css("display", "none");
      $("#signup").css("display", "none");
      $("#features").css("display", "none");
  
  

 $.get("/api/reservations/" , function(resdata) {

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

  $.get("/api/rooms/" , function(roomdata) {
  var i=0;
    
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
      roomResCount.attr("id", "room-res-count"+i)
      roomResCount.text(element.Reservations.length)

      roomDel=$("<td>")
    roomDel.addClass("del-room")
    roomDel.html('<i class="fa fa-trash" ></i>')
    roomDel.attr("id", element.id)
  
    roomUpdate=$("<td>")
    roomUpdate.addClass("update-room")
    roomUpdate.html('<i class="fa fa-pen" ></i>')
    roomUpdate.attr("id", element.id)
      
  
      rowDiv.append(roomImg, roomName, roomLoc, roomResCount, roomDel, roomUpdate)
  
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
  var resid = this.id
  console.log("Id from click is " + resid)
 
 
 
 
  $.get("/api/reservations/" + resid).then(function(updatedata) {

  console.log("Room data from link click is " +JSON.stringify(updatedata))

var date = moment(updatedata.start_date).format("YYYY-MM-DD")
var time =updatedata.start_time
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

 var newDate = $("#res-date-input").val()
 var newTime = $("#res-hh-input").val() + ":" +$("#res-mm-input").val()
 var newDur = $("#res-dur-input").val()
 var newText = $("#res-text-input").val().trim()

 console.log("New res info being submitted is " + newDate + " " + newTime + " " + newDur + " " + newText) 

 var updatedRes = {
  id:resid,
  start_date: newDate,
  start_time: newTime,
  duration: newDur,
  text: newText

 }

 updateRes ( updatedRes.id, updatedRes.start_date,updatedRes.start_time,updatedRes.duration,updatedRes.text)

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
  event.preventDefault();
var roomid = this.id 
console.log(this.id);


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
/*end click*/
})

$(document).on ("click", ".update-room", function (event)  {
  event.preventDefault();
var roomid = this.id

console.log( "Room ID being sent in URL is "+ roomid)

window.location = "/updateroom/?variable=" + roomid;

})
 
/* end doc*/
})



