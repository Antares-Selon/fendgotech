'use strict';
const mobileNav = document.querySelector(".mobileNav");
const menuButton = document.querySelector(".menu-button");
const closeButton =document.querySelector(".close-button");

let navIsVisible = false;
function menuButtonClickhandler(){
    if (!navIsVisible) {
        mobileNav.classList.add("visible");
        document.body.style.overflow = "hidden";
        navIsVisible = true;
    }else{
        mobileNav.classList.remove("visible");
        document.body.style.overflow = "auto"
        navIsVisible = false;
    }
}

closeButton.onclick =menuButtonClickhandler;
menuButton.onclick = menuButtonClickhandler;

const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("form-submit-button");

function submitForm(event) {
    event.preventDefault();
    alert(`Name: ${nameInput.value}, Email: ${emailInput.value}, Message: ${messageInput.value},`);
}

submitButton.addEventListener("click", submitForm);