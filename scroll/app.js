//  date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// mobile links functionality
const container = document.querySelector('.links-container');
const menu = document.querySelector('.nav-toggle');
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = container.getBoundingClientRect().height;

    if (containerHeight === 0) {
        container.style.height = `${linksHeight}px`;
    } else {
        container.style.height = 0;
    }
});

// Scroll functionality
const nav = document.getElementById('nav');
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// Smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Navigate to specific spot 
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        // Recalculate container height for mobile menu
        const containerHeight = container.getBoundingClientRect().height;
        const navHeight = nav.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains('fixed-nav');

        // Calculate position
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }

        // Scroll to the calculated position
        window.scrollTo({
            left: 0,
            top: position,
        });

        // Close the mobile menu
        container.style.height = 0;
    });
});
