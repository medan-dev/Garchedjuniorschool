$(document).ready(function() {
    $('.services-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    // Initialize Slick Slider for Testimonials
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true
    });
});
    document.querySelector('.js-home').addEventListener('click', () => {
        // Add the fade-out class to the body
        document.body.classList.add('fade-out');
    
        // Use setTimeout to delay the navigation until the animation completes
        setTimeout(() => {
            window.location = "index.html";
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
    
    document.querySelector('.js-program').addEventListener('click', () => {
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
    
    