    document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.animated');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            });

            elements.forEach(el => observer.observe(el));
        });

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
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location = "about.html";
            }, 2000); 
        });
        
        
        document.querySelector('.js-home').addEventListener('click', () => {
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location = "index.html";
            }, 2000); 
        });
        
        document.querySelector('.js-programs').addEventListener('click', () => {
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location = "programs.html";
            }, 2000); 
        });

        
        document.querySelector('.js-gallery').addEventListener('click', () => {
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location = "gallery.html";
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
        
        