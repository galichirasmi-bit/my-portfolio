
// Update the copyright year automatically
const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});


// Handle contact form submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const status = document.getElementById("formStatus");

        status.textContent =
            "Your message has been recorded in this demo. No email has been sent.";

        contactForm.reset();

    });

}
