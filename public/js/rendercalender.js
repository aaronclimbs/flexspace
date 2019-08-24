$(document).ready(function () { 


    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    console.log($.urlParam('variable'))

    var urlRoomID=$.urlParam('variable')
   
var resStart=0
var today= "2019-08-28"



$.get("/api/rooms/" + urlRoomID , function(roomInfo) {
    $("#cal-room-name").text(roomInfo.roomName)

})

console.log("Today is " + today)
console.log("Room id is " + urlRoomID)

$.get("/api/reservationsbyroomdate/" + urlRoomID +"/" +today, function(reservations) {
console.log("Number of reservations is " + reservations.length)
if( reservations.length === 0) {
    console.log("No data")
    generateDay()
} else {
    

    generateDay()


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


}

function generateDay () {
    var resDay=  moment(today).format( "dddd")
    var resDisplayDate=moment(today).format( "MMMM Do YYYY")
    var resDate=moment(today).format( "YYYY/MM/DD")
    $("#res-header").text(resDay + " "+ resDisplayDate)

    if (reservations.length === 0) {
     var resStart =0
    } else {
    var resStart = moment((reservations[0].start_date + " " +reservations[0].start_time)).format( "HH")
    }
    
    console.log("converted date day is " + resDay)
    console.log("converted date time is " + resStart)
    

        
  

     var resDiv=$("<div>");
     resDiv.addClass("card reservation-card");
     resDiv.attr("id", "res-day");
     //resDiv.attr("value", reservations[0].roomId);

     $("#reservation-render").append(resDiv);

     /*var resHeader=$("<div>")
     resHeader.addClass("card-header")
     resHeader.attr("id", "res-header")*/
     

     /*$("#res-day").append(resHeader);*/

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


}



})


  


        
       






})
