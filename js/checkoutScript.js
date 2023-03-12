const form = document.querySelector("#checkoutForm");
const card = document.querySelector("#card");
const cardError = document.querySelector("#cardError");
const cardname = document.querySelector("#cardname");
const cardnameError = document.querySelector("#cardnameError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");
const expiration = document.querySelector("#expiration");
const expirationError = document.querySelector("#expirationError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(card.value, 0) === true) {
        cardError.style.display = "none";
    } else {
        cardError.style.display = "block";
    }

    if (checkLength(cardname.value, 0) === true) {
        cardnameError.style.display = "none";
    } else {
        cardnameError.style.display = "block";
    }

    if (checkLength(cvc.value, 0) === true) {
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
    }

    if (checkLength(expiration.value, 0) === true) {
        expirationError.style.display = "none";
    } else {
        expirationError.style.display = "block";
    }

    console.log("hello");
}

checkoutForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

