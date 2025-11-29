const feedbackBtn = document.getElementById("feedback-btn");
const firstName = document.getElementById("fname-input");
const lastName = document.getElementById("lname-input");
const email = document.getElementById("email-input");
const feedbackMsg = document.getElementById("feedback-input");
const feedbackForm = document.getElementById("feedback-form");

// Contact us feature
feedbackForm.addEventListener("submit", event => {
    if (!firstName.value || !lastName.value || !email.value || !feedbackMsg.value) {
        event.preventDefault()
        event.stopPropagation()
    } else {
        localStorage.setItem("firstName", firstName.value);
        localStorage.setItem("lastName", lastName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("feedback", feedbackMsg.value);
        alert("Thank you for your message");
    }

});
