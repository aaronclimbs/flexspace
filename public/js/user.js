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
  var userId = $('[data-id]').data('id');
  var userUpdateForm = $("form.user");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");
  var firstInput = $("#first-input");
  var lastInput = $("#last-input");
  var address1Input = $("#address1-input");
  var address2Input = $("#address2-input");
  var cityInput = $("#city-input");
  var stateInput = $("#state-input");
  var zipInput = $("#zip-input");
  var phoneInput = $("#phone-input");
  var secQuestionInput = $("#sec-question-input");
  var secAnswerInput = $("#sec-question-answer");



 
  // When the signup button is clicked, we validate the email and password are not blank
  userUpdateForm.on("submit", function(event) {
    $("#loading").fadeIn();

    console.log("Update button clicked");
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      first: firstInput.val().trim(),
      last: lastInput.val().trim(),
      address: address1Input.val().trim(),
      address2: address2Input.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      zip: zipInput.val().trim(),
      phone:phoneInput.val().trim(),
      secQuestion:secQuestionInput.val().trim(),
      secAnswer:secAnswerInput.val().trim(),
    };
    console.log(JSON.stringify(userData));

    // if (!userData.email || !userData.password) {
    //   return;
    // }
    // If we have an email and password, run the signUpUser function
    updateUser(userData.email, userData.password, userData.first, userData.last,userData.address,userData.address2, userData.city,userData.state,userData.zip,userData.phone, userData.secQuestion, userData.secAnswer);
    // emailInput.val("");
    // passwordInput.val("");
    // firstInput.val("");
    // lastInput.val("");
    // address1Input.val("");
    // address2Input.val("");
    // cityInput.val("");
    // stateInput.val("");
    // zipInput.val("");
    // phoneInput.val("");
    // secQuestionInput.val("");
    // secAnswerInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function updateUser(email, password, first, last, address, address2, city, state, zip, phone, secQuestion, secAnswer) {
    console.log("the PUT was attempted")
    console.log(JSON.stringify(userId));
    $.ajax({
        type:"PUT",
        url: "/api/users/" + userId,
        data: {
            email: email,
            password: password,
            first:first,
            last:last,
            address:address,
            address2:address2,
            city:city,
            state:state,
            zip:zip,
            phone:phone,
            secQuestion:secQuestion,
            secAnswer:secAnswer
        },
        datatype: 'application/json',
        success: function(result) {
            console.log(result);
            window.location.replace(result);
        },
        error: handleLoginErr
    });
  }

  function handleLoginErr(err) {
    $("#alert").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  })
  
  