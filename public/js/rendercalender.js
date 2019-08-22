$(document).ready(function () { 
   
var resStart=0
var calTime=0
    var reservations = [
        {"roomID": 1, "roomName": "Large Room 1", "startDate": "2020/08/20 09:00", "duration": 3, "description": "Client Meeting 1" },
        {"roomID": 1, "roomName": "Large Room 1", "startDate": "2020/08/20 16:00", "duration": 2, "description": "Client Meeting 2" },
        
        ]
        
        var resDay=  moment(reservations[0].startDate).format( "dddd")
        var resDisplayDate=moment(reservations[0].startDate).format( "MMMM Do YYYY")
        var resDate=moment(reservations[0].startDate).format( "YYYY/MM/DD")
        var resStart = moment(reservations[0].startDate).format( "HH")
        
        
        console.log("converted date day is " + resDay)
        console.log("converted date time is " + resStart)
        

            
      
  
         var resDiv=$("<div>");
         resDiv.addClass("card reservation-card");
         resDiv.attr("id", "res-day");
         resDiv.attr("value", reservations[0].roomID);
  
         $("#reservation-render").append(resDiv);

         var resHeader=$("<div>")
         resHeader.addClass("card-header")
         resHeader.attr("id", "res-header")
         resHeader.text(resDay + " "+ resDisplayDate)

         $("#res-day").append(resHeader);

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

/* Process array */

for (m=0; m < reservations.length; m++) {
    for( h=8; h < 22; h++ ) {
        var meetingTime = parseInt(moment (reservations[m].startDate).format("H"))
        console.log("Meeting time is " + meetingTime)

        if (meetingTime === h) {
            console.log("Meeting found at " + h)
            $("#meeting-details"+h).text(reservations[m].description)

            for (d=0; d < reservations[m].duration; d++) {

                $("#meeting-details"+(h+d)).css("background-color", "#D0F0C0")
            }


           
        }

    }

}






})

    

   


  

     
  
  

  
  
    
  
  
    
  
  
  
  

  
  
  
  
