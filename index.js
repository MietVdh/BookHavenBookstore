'use strict'

const newsletterBtn = document.getElementById("newsletter-btn");
const newsletterEmail = document.getElementById("newsletter-email");
const newsletterForm = document.getElementById("newsletter-form");

// Subscribe feature

newsletterForm.addEventListener('submit', event => {
    if (!newsletterEmail.value) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        alert("Thank you for subscribing");
      }
});
