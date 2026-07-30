// =============================
// Smooth Scroll for Navigation
// =============================

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// =============================
// Active Navigation Link
// =============================

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =============================
// Typing Effect
// =============================

const roles = [
    "AI & Data Science Student",
    "Software Developer",
    "Machine Learning Enthusiast",
    "Power BI Developer",
    "Python Programmer"
];

let roleIndex = 0;
let charIndex = 0;

const roleText = document.querySelector(".hero-text h3");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        roleText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(deleteEffect, 1500);

    }

}

function deleteEffect() {

    if (charIndex > 0) {

        roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

roleText.textContent = "";

typeEffect();


// =============================
// Fade Animation
// =============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

const elements = document.querySelectorAll(
    ".card, .skill, .project-card, .about, .contact-box"
);

elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.7s ease";

    observer.observe(element);

});


// =============================
// Back To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "white";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px rgba(0,0,0,.3)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =============================
// Welcome Message
// =============================

window.addEventListener("load", () => {

    console.log("Welcome to Udhaya Surya's Portfolio!");

});
