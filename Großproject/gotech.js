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

const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", function() {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", function(event) {
  if (email.validity.valid) {
    showError();

    event.preventDefault();
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

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  /*if (
    name.value.length > 0 &&
    firstName.value.length > 0 &&
    email.value.length > 3 &&
    email.value.includes("@") &&
    message.value.length > 0
  ) {
    openModal(event);
  } else {
    customerInputs.forEach(btn => btn.classList.add("error"));
    alert(
      "Please make sure that you filled in all the required fields. Thank you!"
    );
  }*/
});
