document.querySelector('.js-home').addEventListener('click', () => {
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location = "index.html";
    }, 2000); 
});

document.querySelector('.js-about').addEventListener('click', () => {
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location = "about.html";
    }, 2000); 
});

document.querySelector('.js-contact').addEventListener('click', () => {
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location = "contact.html";
    }, 2000); 
});

document.querySelector('.js-programs').addEventListener('click', () => {
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location = "programs.html";
    }, 2000); 
});

document.querySelector('.js-btn').addEventListener('click', () => {
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location = "index.html";
    }, 2000); 
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

