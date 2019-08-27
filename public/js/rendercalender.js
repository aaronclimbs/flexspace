$(document).ready(function () { 
  




    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }


    console.log($.urlParam('variable'))

    var urlRoomID=$.urlParam('variable')

    console.log("Room ID is " + urlRoomID)
   

var searchDate= moment().format("YYYY-MM-DD")


$.get("/api/rooms/" + urlRoomID , function(roomInfo) {
    $("#cal-room-name").text(roomInfo.roomName)



$("#res-date-input").val(searchDate)

generateDay()

popCalender (roomInfo.id, searchDate)

console.log("Today is " + searchDate)
console.log("Room id is " + roomInfo.id)

    
function popCalender () {

    $.get("/api/reservationsbyroomdate/" + roomInfo.id +"/" +searchDate, function(reservations) {
        console.log("Number of reservations is " + reservations.length)
        if( reservations.length !== 0) {

        for (m=0; m < reservations.length; m++) {
            for( h=8; h < 22; h++ ) {
            var meetingTime = parseInt(moment ((reservations[m].start_date + " " +reservations[m].start_time )).format("H"))
            console.log("Meeting time is " + meetingTime)
        
                if (meetingTime === h) {
                console.log("Meeting found at " + h)
                $("#meeting-details"+h).text("Reserved")
        
                    for (d=0; d < reservations[m].duration; d++) {
        
                    $("#meeting-details"+(h+d)).css("background-color", "#D0F0C0")
                }

               
            }
        
        }
        
        }

    }else { 
        $("#reservation-render").empty()
        generateDay()}
   

})
/*end pop cal*/
}

function generateDay () {
    var resDay=  moment(searchDate).format( "dddd")
    var resDisplayDate=moment(searchDate).format( "MMMM Do YYYY")
    var resDate=moment(searchDate).format( "YYYY/MM/DD")
    $("#res-header").text(resDay + " "+ resDisplayDate)

    /*if (reservations.length === 0) {
     var resStart =0
    } else {
    var resStart = moment((reservations[0].start_date + " " +reservations[0].start_time)).format( "HH")

    }
    console.log("converted date day is " + resDay)
    console.log("converted date time is " + resStart)*/
 
    var resDiv=$("<div>");
     resDiv.addClass("card reservation-card");
     resDiv.attr("id", "res-day");

     $("#reservation-render").append(resDiv);

     var bodyDiv=$("<div>");
     bodyDiv.addClass("card-body res-card-body");
     bodyDiv.attr("id", "res-body");

$("#reservation-render").append(bodyDiv);

for (a=8; a < 12; a++) {

var timeContainer =$("<div>")
timeContainer.addClass("row")
timeContainer.attr("id", "hour-div"+a)
bodyDiv.append(timeContainer)
 
var timeDiv =$("<div>")
    timeDiv.addClass("hour-block col-md-2")
    timeDiv.attr("id", "hour"+a)
    timeDiv.text(a+":00 am")
   
   
    var detailsDiv =$("<div>")
    detailsDiv.addClass("meeting-details col-md-10 ")
    detailsDiv.attr("id", "meeting-details"+a)
    
    timeContainer.append(timeDiv, detailsDiv)
    

}

for (p=12; p < 22; p++) {

console.log("Date is " + resDate)
var convertedTime = moment(resDate+" "+ p +":00").format( "h")

var timeContainer =$("<div>")
timeContainer.addClass("row")
timeContainer.attr("id", "hour-div"+p)
bodyDiv.append(timeContainer)
 
var timeDiv =$("<div>")
    timeDiv.addClass("hour-block col-md-2")
    timeDiv.attr("id", "hour"+p)
    timeDiv.text(convertedTime+":00 pm")
   
   
    var detailsDiv =$("<div>")
    detailsDiv.addClass("meeting-details col-md-10 ")
    detailsDiv.attr("id", "meeting-details"+p)
    
    timeContainer.append(timeDiv, detailsDiv)


   
}

/*end gen day function*/
}


$(document).on("click","#upd-search", (function(event) {
event.preventDefault()

    searchDate=$("#res-date-input").val()

    console.log("New searchdate is " + searchDate + " and room ID is" + roomInfo.id)

    $("#reservation-render").empty()
    generateDay()
    popCalender(roomInfo.id, searchDate)

}))





$(document).on ("click", "#res-now", function (event)  {
    event.preventDefault();
    jQuery.noConflict();

    var resHH= parseInt($("#res-hh-input").val()) 

    var resDate = $("#res-date-input").val();   
    var resTime = $("#res-hh-input").val() + ":00"
    var resDur = $("#res-dur-input").val();  
    var resText = $("#res-text-input").val(); 

    console.log("Res-now clicked with values available " + roomInfo.id,resDate,resTime,resDur, resText)

    checkConflict()

    function checkConflict () {

        
        $.get("/api/reservationsbyroomdate/" + roomInfo.id +"/" +resDate, function(reservations) {
            console.log("Number of reservations is " + reservations.length)
            if( reservations.length === 0) {
                console.log("No reservation found, go ahead and process")

                procssRes()
    
    
        } else {
            var resHours =[]
            for (z=0; z < resDur; z++) {
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
            location.reload(true)
            
            }))
          

            

        } else {
            console.log("No meeting conflict")
            procssRes()
        }


/* end else*/
        }


        
       
    /*end get */
    })






/* end check conflict*/
    }

  function procssRes ()  {
    
    console.log("Res time is " + resTime)

    var resData = {
        resDate: resDate,
        resTime: resTime,
        resDur: resDur,
        resText: resText,
        roomID: roomInfo.id

    }

    console.log("reservation data is " + resData.resDate + " " + resData.resTime+ " " + resData.resDur+ " " + resData.roomID + " " + resData.resText)

    addRes( resData.resDate, resData.resTime, resData.resText, resData.resDur, resData.roomID)

    function addRes(resDate, resTime, resText, resDur, roomID) {
        $.post("/api/reservations", {
          resDate: resDate,
          resTime: resTime,
          resDur: resDur,
          resText:resText,
          roomID: roomID
          
          
          
    
        }).then(function(data) {
       location.reload(true)
        })
      }    


  /*end processRes*/  
  }

    







/* end res-now click */
})


})
/*end doc*/

})
