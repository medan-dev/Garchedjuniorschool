document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelectorAll('.hero > div');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


showSlide(currentSlide);

setInterval(nextSlide, 4000);
});
document.querySelector('.js-about').addEventListener('click', () => {
    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Use setTimeout to delay the navigation until the animation completes
    setTimeout(() => {
        window.location = "about.html";
    }, 2000); // Match this duration to your CSS animation duration
});


document.querySelector('.js-contact').addEventListener('click', () => {
    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Use setTimeout to delay the navigation until the animation completes
    setTimeout(() => {
        window.location = "contact.html";
    }, 2000); // Match this duration to your CSS animation duration
});

document.querySelector('.js-gallery').addEventListener('click', () => {
    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Use setTimeout to delay the navigation until the animation completes
    setTimeout(() => {
        window.location = "gallery.html";
    }, 2000); // Match this duration to your CSS animation duration
});

document.querySelector('.js-programs').addEventListener('click', () => {
    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Use setTimeout to delay the navigation until the animation completes
    setTimeout(() => {
        window.location = "programs.html";
    }, 2000); // Match this duration to your CSS animation duration
});

document.querySelector('.js-btn').addEventListener('click', () => {
    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Use setTimeout to delay the navigation until the animation completes
    setTimeout(() => {
        window.location = "index.html";
    }, 2000); // Match this duration to your CSS animation duration
});

    document.getElementById('nav-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

