window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.opacity = '0';
        document.querySelector('.loader-wrapper').style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.display = 'none';
            document.querySelector('.main-content').classList.add('visible');
            document.body.style.overflow = 'auto';
            
            // Initialize sections animation
            const sections = document.querySelectorAll('section');
            const observerOptions = {
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        }, 500);
    }, 2000); // Show loader for 2 seconds
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Menü öğelerine tıklandığında menüyü kapat
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});