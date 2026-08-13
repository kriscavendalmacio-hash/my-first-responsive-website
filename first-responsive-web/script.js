const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // adjust for fixed header
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


const popups = document.querySelectorAll('.popup');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, 400); // delay
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.2
});

popups.forEach(popup => observer.observe(popup));