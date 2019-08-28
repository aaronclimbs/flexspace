$(document).ready(function() { 

    $(document).on("click","#submit-review", (function(event) { 
        console.log("Submit review clicked")
        event.preventDefault()


        var reviewMessage =$("#review-message").val()
        var reviewRating =$("#review-rating").val()
        
        
        var reviewData= {
            message: reviewMessage,
            rating: reviewRating
        
        }
        
        $.post("/api/submitreview/", {
            message: reviewData.message,
            rating: reviewData.rating,
        
        
          }).then(function(data) {
           // window.location.replace(data);
            // If there's an error, handle it by throwing up a bootstrap alert
          })




    }))




})



       




