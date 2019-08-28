

$(document).ready(function() {
  // Getting references to our form and inputs
  $("#logout").hide()
  $("#myDashboard").hide();

  var loginForm = $("form.login");
  var emailInput = $("input#email-login");
  var passwordInput = $("input#password-login");

 

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();

    $("#loading").fadeIn();
   

    var opts = {
      lines: 12, // The number of lines to draw
      length: 7, // The length of each line
      width: 4, // The line thickness
      radius: 10, // The radius of the inner circle
      color: '#072752', // #rgb or #rrggbb
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false // Whether to use hardware acceleration
  };
  var target = document.getElementById('loading');
  var spinner = new Spinner(opts).spin(target);
   

    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
   // emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(handleLoginErr);
  }



  function handleLoginErr(err) {
    $("#loading").hide();
    console.log("erro is" + JSON.stringify(err))
    console.log(err.responseJSON)
    var error=JSON.stringify(err)
 
   $("#error-info").text("Login failure! Please check your email address and password");
   
  }


});
