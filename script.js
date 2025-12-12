// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

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

// ==========================================
// FAQ ACCORDION
// ==========================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ==========================================
// FLOATING CTA SHOW/HIDE ON SCROLL
// ==========================================

const floatingCta = document.getElementById('floatingCta');

window.addEventListener('scroll', () => {
    const contactSection = document.getElementById('contact');
    const contactPosition = contactSection.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    // Hide floating CTA when user reaches contact section
    if (scrollPosition >= contactPosition) {
        floatingCta.style.opacity = '0';
        floatingCta.style.pointerEvents = 'none';
    } else if (window.pageYOffset > 500) {
        floatingCta.style.opacity = '1';
        floatingCta.style.pointerEvents = 'auto';
    } else {
        floatingCta.style.opacity = '0';
        floatingCta.style.pointerEvents = 'none';
    }
});

// ==========================================
// CONTACT FORM SUBMISSION
// ==========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // In a real implementation, you would send this data to a server
        console.log('Form submitted with data:', data);
        
        // Show success message
        alert('Thank you for your consultation request! Scott Barton will contact you within 24 hours. For urgent matters, please call (502) 589-6190 immediately.');
        
        // Reset form
        contactForm.reset();
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// ANIMATE ON SCROLL (Simple Implementation)
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate
const animateElements = document.querySelectorAll('.pain-card, .practice-card, .why-card, .result-card, .testimonial-card, .process-step');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// PHONE NUMBER CLICK TRACKING
// ==========================================

const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone link clicked:', link.href);
        // In a real implementation, you would track this with analytics
    });
});

// ==========================================
// EMERGENCY BANNER ANIMATION
// ==========================================

const emergencyBanner = document.querySelector('.emergency-banner');

if (emergencyBanner) {
    setInterval(() => {
        emergencyBanner.style.transform = 'scale(1.02)';
        setTimeout(() => {
            emergencyBanner.style.transform = 'scale(1)';
        }, 200);
    }, 5000);
    
    emergencyBanner.style.transition = 'transform 0.2s ease';
}

// ==========================================
// PRACTICE AREA CARD TRACKING
// ==========================================

const practiceCtas = document.querySelectorAll('.practice-cta');

practiceCtas.forEach(cta => {
    cta.addEventListener('click', (e) => {
        const practiceCard = e.target.closest('.practice-card');
        const practiceTitle = practiceCard.querySelector('.practice-title').textContent;
        console.log('Practice area CTA clicked:', practiceTitle);
        // In a real implementation, you would track this with analytics
    });
});

// ==========================================
// FORM VALIDATION
// ==========================================

const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#c41e3a';
        } else {
            input.style.borderColor = '#f5f5f5';
        }
    });
    
    input.addEventListener('input', () => {
        if (input.style.borderColor === 'rgb(196, 30, 58)') {
            input.style.borderColor = '#f5f5f5';
        }
    });
});

// ==========================================
// PAGE LOAD ANIMATION
// ==========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// TESTIMONIAL ROTATION (Optional Enhancement)
// ==========================================

const testimonialCards = document.querySelectorAll('.testimonial-card:not(.featured)');
let currentTestimonial = 0;

function highlightTestimonial() {
    testimonialCards.forEach((card, index) => {
        if (index === currentTestimonial) {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        } else {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

// Rotate testimonial highlight every 5 seconds
if (testimonialCards.length > 0) {
    setInterval(highlightTestimonial, 5000);
}

// ==========================================
// CASE RESULTS FILTER (Optional Enhancement)
// ==========================================

// You could add filtering functionality here if you want to filter case results by practice area
// For now, this is a placeholder for future enhancement

// ==========================================
// CONSOLE WELCOME MESSAGE
// ==========================================

console.log('%c🏛️ Barton Law Office - Criminal Defense', 'font-size: 20px; font-weight: bold; color: #1a3a5c;');
console.log('%c23 Years of Fighting for Your Freedom', 'font-size: 14px; color: #8b2635;');
console.log('%cCall (502) 589-6190 for a free consultation', 'font-size: 12px; color: #666;');

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

// Add keyboard navigation support for FAQ
faqQuestions.forEach(question => {
    question.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
    });
});

// Focus management for mobile menu
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            mobileMenuToggle.click();
        }
    });
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Lazy load images (if you add more images later)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==========================================
// PRINT STYLES TRIGGER
// ==========================================

window.addEventListener('beforeprint', () => {
    // Expand all FAQ items for printing
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.add('active');
    });
});

window.addEventListener('afterprint', () => {
    // Collapse all FAQ items after printing
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
});

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.message);
    // In production, you might want to send this to an error tracking service
});

// ==========================================
// INITIALIZE ON DOM READY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ Page initialized successfully');
    
    // Add initial animations
    setTimeout(() => {
        document.querySelector('.hero-title')?.classList.add('animate-in');
        document.querySelector('.hero-subtitle')?.classList.add('animate-in');
    }, 300);
});
