// ==========================================================================
// Navigation & Scroll Effects
// ==========================================================================

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==========================================================================
// Smooth Scroll with Offset
// ==========================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================================================
// Intersection Observer for Animations
// ==========================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animateElements = document.querySelectorAll('.skill-category, .project-card, .certificate-card, .education-card, .experience-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    observer.observe(el);
});

// ==========================================================================
// Project Cards Tilt Effect (Subtle)
// ==========================================================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================================================
// Typing Effect for Hero Title (Optional)
// ==========================================================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment below to enable typing effect
// window.addEventListener('load', function() {
//     const heroTitle = document.querySelector('.gradient-text');
//     if (heroTitle) {
//         const text = heroTitle.textContent;
//         typeWriter(heroTitle, text, 80);
//     }
// });

// ==========================================================================
// Active Navigation Link Highlighting
// ==========================================================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ==========================================================================
// Skill Tags Interaction
// ==========================================================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// ==========================================================================
// Console Message (Easter Egg)
// ==========================================================================

console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cLooking at the code? Feel free to reach out!', 'font-size: 14px; color: #718096;');
console.log('%c📧 sonalsavanth23@lpu.in', 'font-size: 14px; color: #667eea;');

// ==========================================================================
// Loading Animation
// ==========================================================================

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================================================
// Parallax Effect on Hero Section
// ==========================================================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ==========================================================================
// Copy Email to Clipboard
// ==========================================================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const email = this.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            // Show a brief notification (you can customize this)
            const originalText = this.textContent;
            this.textContent = '✓ Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    });
});

// ==========================================================================
// Dark Mode Toggle (Optional - Uncomment to enable)
// ==========================================================================

// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//     localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
// }

// // Check for saved dark mode preference
// if (localStorage.getItem('darkMode') === 'true') {
//     document.body.classList.add('dark-mode');
// }

// // Add dark mode button to navbar (you'll need to add the HTML element)
// const darkModeToggle = document.getElementById('darkModeToggle');
// if (darkModeToggle) {
//     darkModeToggle.addEventListener('click', toggleDarkMode);
// }
