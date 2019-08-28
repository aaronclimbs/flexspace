// @ts-nocheck
$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var passwordConfirm = $("input#confirm-password-input");
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
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    const inputs = Array.from(document.querySelectorAll(".form-control"));
    if (
      inputs.filter(input => input.className.includes("is-invalid")).length !==
      0
    ) {
      passwordInput.val("");
      passwordInput.addClass("is-invalid");
      passwordInput.removeClass("is-valid");
      passwordConfirm.val("");
      passwordConfirm.addClass("is-invalid");
      passwordConfirm.removeClass("is-valid");
      const alert = `<div class="alert alert-info alert-dismissible fade show" role="alert">
                      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`;
      document.querySelector("#messages").innerHTML = alert;
      $("body").scrollTop(0);

      return;
    }
    // if (!userData.email || !userData.password) {
    //   return;
    // }
    $("#loading").fadeIn();

    console.log("Signup clicked");
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
    // emailInput.val("");
    passwordInput.val("");
    // firstInput.val("");
    // lastInput.val("");
    // address1Input.val("");
    // address2Input.val("");
    // cityInput.val("");
    // stateInput.val("");
    // zipInput.val("");
    // phoneInput.val("");
    // secQuestionInput.val("");
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
        $("#loading").hide();
        window.location.replace(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#loading").hide();
    $("#alert").text(
      "Password must meet a minimum complexity of 5 characters."
    );
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
    passwordConfirm.classList.add("is-invalid");
  } else {
    passwordConfirm.classList.remove("is-invalid");
    passwordConfirm.classList.add("is-valid");
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  }
});
const loginEmail = document.querySelector("#email-input");
loginEmail.addEventListener("blur", e => {
  fetch(`/api/users/${e.target.value}/check`)
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

const zipInput = document.querySelector("#zip-input");
const stateInput = document.querySelector("#state-input");
const cityInput = document.querySelector("#city-input");
zipInput.addEventListener("blur", e => {
  const zipRegex = RegExp(/\d{5}/);
  if (zipRegex.test(zipInput.value)) {
    const zipRes = fetch(`/api/user/${e.target.value}/check`)
      .then(res => res.json())
      .then(res => {
        if (["DC", "MD", "VA"].includes(res.state)) {
          zipInput.classList.remove("is-invalid");
          zipInput.classList.add("is-valid");
          cityInput.value = res.city;
          stateInput.value = res.state;
        } else {
          zipInput.classList.add("is-invalid");
          zipInput.value = "";
          cityInput.value = "";
          stateInput.value = "";
        }
      });
  } else {
    zipInput.classList.add("is-invalid");
    zipInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
  }
});
