// mobileNav
"use strict";
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
// Formular

const emailError = document.querySelector("#email + span.error");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const firstName = document.getElementById("firstName");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("form-submit-button");

email.addEventListener("input", function() {
  if (!email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
}

function submitForm(event) {
  event.preventDefault();
  alert(
    `Name: ${nameInput.value},Last Name ${firstName.value}, Email: ${emailInput.value}, Message: ${messageInput.value},`
  );
}

submitButton.addEventListener("click", submitForm);
/*
submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  form.addEventListener("submit", function(event) {
    if (!email.validity.valid) {
      showError();
  
      event.preventDefault();
    }
  });*/
