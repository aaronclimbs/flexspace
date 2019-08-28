$(document).ready(function () {

  var query ={} 

$(document).on ("click", ".bookme", function (event)  {
   


$("#bookRoomID").text("Room ID: " + this.id)
$("#bookRoomName").html("Room Name: " + $(this).attr("roomname"))

$("#book-modal").modal("toggle");


});

$(document).on ("click", "#search-btn", function (event)  {
    event.preventDefault();
    $("#results").empty();
    roomState=$("#state-select option:selected").attr("state");
  roomType=$("#type-select option:selected").attr("type");

  console.log("Search clicked")



  query = {
      "state":roomState,
      "type":roomType
  }

 

  console.log("Query is " + query.state + " " + query.type)

  $.get("/api/allrooms/" + query.state +"/" + query.type, function(data) {
    console.log("Rooms", data);
    roomSearch = data;



  
console.log("room data is " + JSON.stringify(roomSearch))



for (i=0; i < roomSearch.length; i++) {
    var itemNum=parseInt(i + 1);
    console.log("Item num at beg of loop is "+ itemNum)
/*dom push*/
       var roomDiv=$("<div>");
       roomDiv.addClass("card room-card");
       roomDiv.attr("id", "room"+i);
       roomDiv.attr("value", roomSearch[i].roomID);

       $("#results").append(roomDiv);


       var roomImg=$("<img>");
       roomImg.attr("id", "room-image"+i);
       roomImg.attr("src", roomSearch[i].roomURL);
       roomImg.addClass("card-img-top roomPhoto");

       $("#room"+i).append(roomImg);

       var bodyDiv=$("<div>");
       bodyDiv.addClass("card-body room-card-body");
       bodyDiv.attr("id", "card-body"+i);

       $("#room"+i).append(bodyDiv);

       var titleH5=$("<h6>");
       titleH5.addClass("card-title");
       titleH5.attr("id", "bodydiv"+i);
       titleH5.text(roomSearch[i].roomName)

       var roomAddCont = $("<div>")
       roomAddCont.addClass("d-inline-block")
       roomAddCont.attr("id", "roomAddCont"+i)

       var roomAdd=$("<p>")
       roomAdd.html(roomSearch[i].address1 + "<br>" + roomSearch[i].address2 +"<br>" + roomSearch[i].city + " " + roomSearch[i].state_us + " " +roomSearch[i].zip)
        roomAdd.addClass("text-left");
        
       $("#card-body"+ i).append(titleH5,roomAddCont)

       $("#roomAddCont"+ i).append(roomAdd)

       var roomInfo=$("<ul>")
        roomInfo.addClass("list-group list-group-flush")
        roomInfo.attr("id", "roomInfo"+i)

        $("#room"+ i).append(roomInfo)

       var roomType=$("<li>");
       roomType.addClass("list-group-item ")
       roomType.text("Type: " + roomSearch[i].roomType.toUpperCase() + "  Rate:  $" + roomSearch[i].hourlyRate+"/hr")

        var roomCapacity=$("<li>");
        roomCapacity.addClass("list-group-item")
        roomCapacity.text("Capacity: " + roomSearch[i].roomCapacity)

        var roomReview=$("<li>");
        roomReview.addClass("list-group-item room-review")
       
        roomReview.attr("id", roomSearch[i].id)
        roomReview.html('<a href="#" id="'+roomSearch[i].id+'">Reviews')

    $("#roomInfo" +i).append(roomType, roomCapacity, roomReview)
      
      var bookDiv=$("<div>");
      bookDiv.addClass("card-body")
      bookDiv.attr("id", "book"+i)

      $("#room"+ i).append(bookDiv)
       

       var bookRoom=$("<button>")
       bookRoom.attr("id", roomSearch[i].id)
       bookRoom.addClass("check-room");
       bookRoom.attr("owner-id", roomSearch[i].roomOwnerID)
       bookRoom.attr("roomname", roomSearch[i].roomName)
       bookRoom.text("Check Availability")

 $("#book"+i).append(bookRoom)


}
        
});
      
})

$(document).on ("click", ".check-room", function (event)  {
    event.preventDefault();
var roomid = this.id

console.log( "Room ID being sent in URL is "+ roomid)

window.location = "/rendercalender/?variable=" + roomid;

})

$(document).on ("click", ".room-review", function (event)  {
  event.preventDefault();
  var roomid = this.id
  
  console.log("Id from click is " + this.id)

  jQuery.noConflict();
  $("#reviews-list").empty()
 
  $.get("/api/reviews/" + roomid, function(revdata) {

    console.log("Review data is " + JSON.stringify(revdata))

    var i=0

   for (i =0; i< revdata.length; i++) {

      revTR= $("<tr>")
      revTR.attr("id", "reviews-row"+i)

      $("#reviews-list").append(revTR)

      revName =$("<td>")
      revName.text(revdata[i].User.first + " gave this room a rating of " + revdata[i].rating + " with a comment of " + revdata[i].message)

      


      $('#reviews-row'+i).append(revName)





    }
  

  })

  $("#show-room-rev-modal").modal("toggle");

})








});