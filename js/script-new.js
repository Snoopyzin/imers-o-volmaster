// ================================================
// IMERSÃO VOLMASTER - MODERN JAVASCRIPT
// ================================================

// ============================================
// MOBILE NAVIGATION
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
}

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
        navMenu?.classList.remove('active');
        const spans = navToggle?.querySelectorAll('span');
        if (spans) {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    }
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar') || document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
        navbar?.classList.add('scrolled');
        if (navbar) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 4px 20px rgba(14, 165, 233, 0.1)';
        }
    } else {
        navbar?.classList.remove('scrolled');
        if (navbar) {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Hide/show navbar on scroll
    if (navbar && currentScrollY > lastScrollY && currentScrollY > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else if (navbar) {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navbarHeight = navbar?.offsetHeight || 0;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// COUNTDOWN TIMER
// ============================================

function updateCountdown() {
    const eventDate = new Date('2026-09-12T09:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update countdown display
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    
    // Stop countdown when event starts
    if (distance < 0) {
        clearInterval(countdownInterval);
        if (daysEl) daysEl.textContent = '000';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
    }
}

// Initialize countdown
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// ACTIVE NAVIGATION ON SCROLL
// ============================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(highlightNavigation, 10));

// ============================================
// PAGE LOAD ANIMATIONS
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger any additional animations after page load
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 100);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format number with leading zeros
function padNumber(num, size) {
    let s = String(num);
    while (s.length < size) s = '0' + s;
    return s;
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// PRELOADER
// ============================================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 400);
    }
    
    // Initialize Particles
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#FFD700'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#FFD700',
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.3
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
});

// ============================================
// ANIMATED COUNTER
// ============================================

function animateCounter(element, target, duration = 2000) {
    const startTime = performance.now();
    const startValue = 0;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        element.textContent = currentValue + (target >= 100 && element.dataset.target == target ? '%' : '+');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target >= 100 && element.dataset.target == target ? '%' : '+');
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Observe stat numbers
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(num => statsObserver.observe(num));

// ============================================
// TESTIMONIALS SLIDER
// ============================================

class TestimonialsSlider {
    constructor() {
        this.slides = document.querySelectorAll('.testimonial-card');
        this.currentSlide = 0;
        this.prevBtn = document.getElementById('testimonialPrev');
        this.nextBtn = document.getElementById('testimonialNext');
        this.dotsContainer = document.getElementById('testimonialsDots');
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.createDots();
        this.attachEventListeners();
        this.autoplay();
    }
    
    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
        this.dots = document.querySelectorAll('.testimonial-dot');
    }
    
    attachEventListeners() {
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
    }
    
    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }
    
    autoplay() {
        setInterval(() => this.nextSlide(), 5000);
    }
}

// Initialize slider
new TestimonialsSlider();

// ============================================
// FAQ ACCORDION
// ============================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

// Enhanced Intersection Observer for scroll animations
const scrollAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollAnimationObserver.observe(el);
});

// ============================================
// PARALLAX EFFECT
// ============================================

function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shape');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
}

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            parallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
});

// ============================================
// SMOOTH SCROLL TO SECTIONS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '#!') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// GALLERY LIGHTBOX (Simple version)
// ============================================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            // Simple alert for now - can be enhanced with a modal
            window.open(img.src, '_blank');
        }
    });
});

// ============================================
// CUSTOM CURSOR EFFECT
// ============================================

// Only enable custom cursor on non-touch devices
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth cursor follow
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, .benefit-card, .testimonial-card, .gallery-item');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorDot.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorDot.classList.remove('active');
        });
    });
}

// ============================================
// 3D TILT EFFECT ON CARDS
// ============================================

// Only enable tilt effect on non-touch devices
if (!isTouchDevice) {
    const tiltCards = document.querySelectorAll('.benefit-card, .speaker-card, .testimonial-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ============================================
// COUNTDOWN TO EVENT
// ============================================

function updateCountdown() {
    const eventDate = new Date('September 12, 2026 08:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const countdownElement = document.querySelector('.countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-value">${days}</span>
                    <span class="countdown-label">Dias</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${hours}</span>
                    <span class="countdown-label">Horas</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${minutes}</span>
                    <span class="countdown-label">Min</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${seconds}</span>
                    <span class="countdown-label">Seg</span>
                </div>
            `;
        }
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ============================================
// TYPING EFFECT FOR HERO TITLE
// ============================================

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

// Apply typing effect after page load
// COMENTADO: Este efeito estava removendo o HTML do título e quebrando o estilo dourado
/*
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 80);
        }
    }, 2000); // Start after preloader
});
*/

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.innerHTML = '↑';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// RIPPLE EFFECT ON BUTTONS
// ============================================

function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

const buttons = document.querySelectorAll('.cta-button, .btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.addEventListener('click', createRipple);
});

// ============================================
// PARALLAX MOUSE MOVE EFFECT
// ============================================

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.floating-shape').forEach((shape, index) => {
        const speed = (index + 1) * 5;
        const x = (window.innerWidth - e.clientX * speed) / 100;
        const y = (window.innerHeight - e.clientY * speed) / 100;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ============================================
// LOADING ANIMATION FOR BUTTONS
// ============================================

const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            
            // Remove loading state after 2 seconds
            setTimeout(() => {
                this.classList.remove('loading');
            }, 2000);
        }
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🚀 Imersão Volmaster 2026', 'font-size: 20px; font-weight: bold; color: #0ea5e9;');
console.log('%cDesenvolvido com ❤️ pela equipe Volmaster', 'font-size: 12px; color: #999;');
console.log('%c🎨 Design inspirado em Framer & UpSummit', 'font-size: 12px; color: #3b82f6;');
