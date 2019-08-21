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

    $("#roomInfo" +i).append(roomType, roomCapacity)
      
      var bookDiv=$("<div>");
      bookDiv.addClass("card-body")
      bookDiv.attr("id", "book"+i)

      $("#room"+ i).append(bookDiv)
       

       var bookRoom=$("<button>")
       bookRoom.attr("id", roomSearch[i].roomID)
       bookRoom.addClass("bookme");
       bookRoom.attr("owner-id", roomSearch[i].roomOwnerID)
       bookRoom.attr("roomname", roomSearch[i].roomName)
       bookRoom.text("Check Availability")

 $("#book"+i).append(bookRoom)


}
        
});
      
})





});