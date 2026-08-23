document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       CURRENT YEAR
    ========================================================== */

    const yearElement = document.querySelector(".footer-bottom p");

    if (yearElement) {
        const currentYear = new Date().getFullYear();

        yearElement.innerHTML =
            `&copy; ${currentYear} Dr. Asnakew Bewketu Belete. All rights reserved.`;
    }


    /* =========================================================
       NAVBAR SCROLL EFFECT
    ========================================================== */

    const navbar = document.querySelector(".navbar");

    const handleNavbarScroll = () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    };

    window.addEventListener(
        "scroll",
        handleNavbarScroll,
        { passive: true }
    );

    handleNavbarScroll();


    /* =========================================================
       ACTIVE NAVIGATION LINK
    ========================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    const updateActiveNavigation = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 140;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

            if (target === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    };

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =========================================================
       REVEAL ELEMENTS WHEN SCROLLING
    ========================================================== */

    const revealElements = document.querySelectorAll(
        ".research-card, " +
        ".project-card, " +
        ".skill-group, " +
        ".education-card, " +
        ".publication, " +
        ".timeline-item, " +
        ".stat-card"
    );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =========================================================
       SCROLL TO TOP
    ========================================================== */

    const scrollTopButton =
        document.createElement("button");

    scrollTopButton.type = "button";

    scrollTopButton.className =
        "scroll-top";

    scrollTopButton.setAttribute(
        "aria-label",
        "Scroll to top"
    );

    scrollTopButton.innerHTML =
        '<i class="fas fa-arrow-up"></i>';

    document.body.appendChild(scrollTopButton);


    const updateScrollTopButton = () => {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    };


    window.addEventListener(
        "scroll",
        updateScrollTopButton,
        { passive: true }
    );


    scrollTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =========================================================
       EXTERNAL LINKS
    ========================================================== */

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach(link => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* =========================================================
       CONTACT EMAIL FEEDBACK
    ========================================================== */

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );

    emailLinks.forEach(link => {

        link.addEventListener("click", () => {

            link.classList.add("email-clicked");

            setTimeout(() => {

                link.classList.remove(
                    "email-clicked"
                );

            }, 1000);

        });

    });

});
