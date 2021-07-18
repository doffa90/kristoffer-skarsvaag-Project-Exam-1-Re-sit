const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#MailFirstName");
const firstNameError = document.querySelector("#firstName-error");

const lastName = document.querySelector("#MailLastName");
const lastNameError = document.querySelector("#lastName-error");

const email = document.querySelector("#InputEmailList");
const emailError = document.querySelector("#email-error");



function validateForm() {
    event.preventDefault();

    if (checkLength(firstName.value, 1) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }



    console.log("hello");

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}