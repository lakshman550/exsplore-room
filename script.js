/* =========================================================
   EX'S PLORE ROOM
   INTERACTIVE EFFECTS
========================================================= */


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".gaming-card, .game-card, .physical-card, .food-card, .offer-card, .menu-list, .contact-card, .student-offer, .gallery-item"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================================
   CARD TILT EFFECT
   Desktop only
========================================================= */

const tiltCards = document.querySelectorAll(
    ".gaming-card, .physical-card"
);

if (window.innerWidth > 900) {

    tiltCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2.5;

            const rotateY =
                ((x - centerX) / centerX) * 2.5;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

}


/* =========================================================
   IMAGE LOAD CHECK
========================================================= */

document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("error", () => {

        console.warn(
            "Image could not be loaded:",
            image.getAttribute("src")
        );

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const footerYear = document.querySelector("footer small");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} EX'S PLORE ROOM. ALL RIGHTS RESERVED.`;

}