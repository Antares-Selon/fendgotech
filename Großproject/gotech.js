/*"use strict";*/
const mobileNav = document.querySelector(".mobileNav");
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");

let navIsVisible = false;
function menuButtonClickhandler() {
  if (!navIsVisible) {
    mobileNav.classList.add("visible");
    document.body.style.overflow = "hidden";
    navIsVisible = true;
  } else {
    mobileNav.classList.remove("visible");
    document.body.style.overflow = "auto";
    navIsVisible = false;
  }
}

closeButton.onclick = menuButtonClickhandler;
menuButton.onclick = menuButtonClickhandler;

const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", function() {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", function(event) {
  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
}

const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const firstName = document.getElementById("firstName");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("form-submit-button");

function submitForm(event) {
  event.preventDefault();
  alert(
    `Name: ${nameInput.value},Last Name ${firstName.value}, Email: ${emailInput.value}, Message: ${messageInput.value},`
  );
}

submitButton.addEventListener("click", submitForm);
