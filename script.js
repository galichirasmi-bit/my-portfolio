
// ======================================
// 1. AUTOMATIC COPYRIGHT YEAR
// ======================================

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});


// ======================================
// 2. MOBILE NAVIGATION MENU
// ======================================

const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primary-menu");

if (menuToggle && primaryNav) {

    menuToggle.addEventListener("click", function() {

        const isOpen = primaryNav.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close menu after selecting a navigation link
    primaryNav.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            primaryNav.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


// ======================================
// 3. LIGHT AND DARK MODE
// ======================================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("portfolio-theme") || "light";

    document.documentElement.dataset.theme = savedTheme;

    function updateThemeButton(theme) {

        if (theme === "dark") {

            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    }

    updateThemeButton(savedTheme);

    themeToggle.addEventListener("click", function() {

        const currentTheme =
            document.documentElement.dataset.theme;

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = newTheme;

        localStorage.setItem("portfolio-theme", newTheme);

        updateThemeButton(newTheme);

    });

}


// ======================================
// 4. CONTACT FORM
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const status = document.getElementById("formStatus");

        if (status) {

            status.textContent =
                "Your message has been recorded in this demo. No email has been sent.";

        }

        contactForm.reset();

    });

}
