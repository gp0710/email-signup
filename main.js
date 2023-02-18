const emailInput = document.querySelector("input#email");
const submit = document.querySelector("input[type='submit']")
const form = document.querySelector("#email-submit");
const error = document.querySelector("#error");
const errorMessage = document.querySelector("#error-message");

//See if input matches regEx for emails
const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


form.addEventListener("submit", (e) => {
    //Prevent refresh on submit
    e.preventDefault();
    if (emailInput.value == "") {
        error.style.visibility = "hidden";
    } else if (emailInput.value !== regEx) {
        error.classList.add("visible");
        errorMessage.style.visibility = " visible";
    }
})