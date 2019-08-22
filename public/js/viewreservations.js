

$(document).ready(function () {

    var query ={} 
  
  // $(document).on ("click", ".bookme", function (event)  {
     
  
  
  // $("#bookRoomID").text("Room ID: " + this.id)
  // $("#bookRoomName").html("Room Name: " + $(this).attr("roomname"))
  
  // $("#book-modal").modal("toggle");
  
  
  // });
  
  $(document).on ("click", "#search-btn2", function (event)  {
      event.preventDefault();
      $("#results").empty();
      roomState=$("#state-select option:selected").attr("state");
      roomType=$("#type-select option:selected").attr("type");
      startDatePre=$("#startDate").val();
      endDatePre=$("#endDate").val();
      startDate = moment(startDatePre).format('YYYY-MM-DDTHH:mm:ss');
      endDate = moment(endDatePre).format('YYYY-MM-DDTHH:mm:ss');

      startDate += '.000Z';
      endDate += '.000Z';
      // endDate = moment(endDatePre).format('YYYY-MM-DD HH:mm:ss'); with TIME
    console.log("Search clicked")
  
  console.log(startDatePre);
  console.log(endDatePre);
  console.log(startDate);
  console.log(endDate);
  
    query = {
        "state":roomState,
        "type":roomType,
        "start":startDate,
        "end":endDate
    }
  
    if(!startDate) {
      query.start = "2019-01-08T14:00:00"
    }
    if(!endDate) {
      query.end = "2022-01-08T14:00:00"
    }
   
  
    console.log("Query is " + query.start + " " + query.end)
  
    $.get("/api/allreservations/" + query.state +"/" + query.type + "/" + query.start +"/" + query.end, function(data) {
      console.log("Reservations", data);
      resSearch = data;
      for (i=0; i < resSearch.length; i++) {
            var itemNum=parseInt(i + 1);
            console.log("Item num at beg of loop is "+ itemNum)
        /*dom push*/
          var roomDiv=$("<div>");
          roomDiv.addClass("card room-card");
          roomDiv.attr("id", "room"+i);
          roomDiv.attr("value", resSearch[i].Room.roomID);
    
          $("#results").append(roomDiv);
    
          var roomImg=$("<img>");
          roomImg.attr("id", "room-image"+i);
          roomImg.attr("src", resSearch[i].Room.roomURL);
          roomImg.addClass("card-img-top roomPhoto");
    
          $("#room"+i).append(roomImg);
    
          var bodyDiv=$("<div>");
          bodyDiv.addClass("card-body room-card-body");
          bodyDiv.attr("id", "card-body"+i);
    
          $("#room"+i).append(bodyDiv);
    
          var titleH5=$("<h6>");
          titleH5.addClass("card-title");
          titleH5.attr("id", "bodydiv"+i);
          titleH5.text(resSearch[i].Room.roomName)
    
          var roomAddCont = $("<div>")
          roomAddCont.addClass("d-inline-block")
          roomAddCont.attr("id", "roomAddCont"+i)
    
          var roomAdd=$("<p>")
          roomAdd.html(resSearch[i].Room.address1 + "<br>" + resSearch[i].Room.address2 +"<br>" + resSearch[i].Room.city + " " + resSearch[i].Room.state_us + " " +resSearch[i].Room.zip)
            roomAdd.addClass("text-left");
            
          $("#card-body"+ i).append(titleH5,roomAddCont)
    
          $("#roomAddCont"+ i).append(roomAdd)
    
          var roomInfo=$("<ul>")
          roomInfo.addClass("list-group list-group-flush")
          roomInfo.attr("id", "roomInfo"+i)
  
          $("#room"+ i).append(roomInfo)
  
          var roomType=$("<li>");
          roomType.addClass("list-group-item ")
          roomType.text("Type: " + resSearch[i].Room.roomType.toUpperCase() + "  Rate:  $" + resSearch[i].Room.hourlyRate+"/hr")
          var roomCapacity=$("<li>");
          roomCapacity.addClass("list-group-item")
          roomCapacity.text("Capacity: " + resSearch[i].Room.roomCapacity)
          var resDiv1=$("<div>");
          resDiv1.addClass("list-group-item");
          resDiv1.text("Booking Start: " + resSearch[i].start);
          var resDiv2=$("<div>");
          resDiv2.addClass("list-group-item");
          resDiv2.text("Booking End: " + resSearch[i].end);
          var resDiv3=$("<div>");
          resDiv3.addClass("list-group-item");
          resDiv3.text("Notes: " + resSearch[i].text);
          var owner=$("<div>");
          owner.addClass("list-group-item");
          owner.text("Contact Name: " + resSearch[i].Room.User.first);
          var phone=$("<div>");
          phone.addClass("list-group-item");
          phone.text("Phone: " + resSearch[i].Room.User.phone);
          $("#roomInfo" +i).append(roomType, roomCapacity, resDiv1, resDiv2, resDiv3, owner, phone)  
    }
          
  });

  


  })
  
  
  
  
  
  });