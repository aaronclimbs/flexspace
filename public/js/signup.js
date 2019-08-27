$(document).ready(function() {
  $("#logout").hide();
  $("#myDashboard").hide();
  // Getting references to our form and input
  var signupBtn = $(".signup-btn");
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstInput = $("input#first-input");
  var lastInput = $("input#last-input");
  var address1Input = $("input#address1-input");
  var address2Input = $("input#address2-input");
  var cityInput = $("input#city-input");
  var stateInput = $("#state-input");
  var zipInput = $("input#zip-input");
  var phoneInput = $("input#phone-input");
  var secQuestionInput = $("#sec-question-input");
  var secAnswerInput = $("input#sec-question-answer");

  // When the signup button is clicked, we validate the email and password are not blank
  signupBtn.on("click", function(event) {
    const inputs = Array.from(document.querySelectorAll(".form-control"));
    if (!!inputs.filter(input => input.classList.includes("is-invalid"))) {
      event.preventDefault();
      event.stopPropogation();
      return false;
    }
    // if (!userData.email || !userData.password) {
    //   return;
    // }
    $("#loading").fadeIn();

    console.log("Signup clicked");
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
      phone: phoneInput.val().trim(),
      secQuestion: secQuestionInput.val().trim(),
      secAnswer: secAnswerInput.val().trim()
    };

    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.email,
      userData.password,
      userData.first,
      userData.last,
      userData.address,
      userData.address2,
      userData.city,
      userData.state,
      userData.zip,
      userData.phone,
      userData.secQuestion,
      userData.secAnswer
    );
    emailInput.val("");
    passwordInput.val("");
    firstInput.val("");
    lastInput.val("");
    address1Input.val("");
    address2Input.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
    phoneInput.val("");
    secQuestionInput.val("");
    secAnswerInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(
    email,
    password,
    first,
    last,
    address,
    address2,
    city,
    state,
    zip,
    phone,
    secQuestion,
    secAnswer
  ) {
    $.post("/api/signup", {
      email: email,
      password: password,
      first: first,
      last: last,
      address: address,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      secQuestion: secQuestion,
      secAnswer: secAnswer
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

var strength = {
  0: "Worst",
  1: "Bad",
  2: "Weak",
  3: "Good",
  4: "Strong"
};

const passwordConfirm = document.querySelector("#confirm-password-input");
var password = document.getElementById("password-input");
var meter = document.getElementById("password-strength-meter");
var text = document.getElementById("password-strength-text");

password.addEventListener("input", function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score];
  } else {
    text.innerHTML = "";
  }
});

passwordConfirm.addEventListener("blur", e => {
  if (password.value !== passwordConfirm.value || !password.value) {
    console.log("Passwords do not match!");
    passwordConfirm.classList.add("is-invalid");
  } else {
    console.log("Passwords match!");
    passwordConfirm.classList.remove("is-invalid");
    passwordConfirm.classList.add("is-valid");
  }
});
const loginEmail = document.querySelector("#email-input");
loginEmail.addEventListener("blur", e => {
  fetch(`/api/users/login/${e.target.value}`)
    .then(data => data.json())
    .then(data => {
      if (data.match == false) {
        loginEmail.classList.add("is-valid");
        loginEmail.classList.remove("is-invalid");
      } else {
        loginEmail.classList.remove("is-valid");
        loginEmail.classList.add("is-invalid");
      }
    });
});
