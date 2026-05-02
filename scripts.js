document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.home-content', {
        delay: 200,
        distance: '50px',
        origin: 'left',
        duration: 1000,
        easing: 'ease-out-cubic'
    });

    ScrollReveal().reveal('.home-image', {
        delay: 400,
        distance: '50px',
        origin: 'right',
        duration: 1000,
        easing: 'ease-out-cubic'
    });

    ScrollReveal().reveal('.section-title', {
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        duration: 800,
        easing: 'ease-out-cubic'
    });

    ScrollReveal().reveal('.about-image, .about-text', {
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        duration: 800,
        interval: 200,
        easing: 'ease-out-cubic'
    });

    ScrollReveal().reveal('.service-box', {
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        duration: 800,
        interval: 150,
        easing: 'ease-out-cubic'
    });

    ScrollReveal().reveal('.insight-card', {
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        duration: 800,
        interval: 150,
        easing: 'ease-out-cubic'
    });

    ScrollReveal().reveal('.contact-card', {
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        duration: 800,
        interval: 150,
        easing: 'ease-out-cubic'
    });

    ScrollReveal().reveal('.timeline-item', {
        delay: 200,
        distance: '30px',
        origin: 'left',
        duration: 800,
        interval: 200,
        easing: 'ease-out-cubic'
    });

    // Toggle menu icon
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Active nav links and scroll handling
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        // Header scroll effect
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active nav links
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });

        // Remove toggle icon and navbar when clicking navbar link (scroll)
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // Typed.js initialization
    // Ganti bagian Typed lo jadi begini:
setTimeout(() => {
    const typed = new Typed('.multiple-text', {
        strings: ['Geopolitical Risk Analyst', 'Macro-Economic Researcher', 'Investment Strategist', 'Data-Driven Tool Builder'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
}, 500); // Nunggu 0.5 detik biar aman
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Portfolio filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioBoxes.forEach(box => {
                const category = box.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    box.style.display = 'block';
                    setTimeout(() => {
                        box.style.opacity = '1';
                        box.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    box.style.opacity = '0';
                    box.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        box.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to skill bars
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const progress = item.querySelector('.progress');
            progress.style.width = progress.style.width; // Trigger animation
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate progress bars when visible
                if (entry.target.classList.contains('skills')) {
                    const progressBars = entry.target.querySelectorAll('.progress');
                    progressBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add magnetic effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // Add parallax effect to background blobs
    const blobs = document.querySelectorAll('.blob');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Add typing effect to console
    console.log('%c Welcome to Muhammad Rizki\'s Portfolio! ', 'background: linear-gradient(135deg, #00f0ff, #7c3aed); color: #080808; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 5px;');
    console.log('%c Macro-Economic Intelligence & Geopolitical Risk Analyst ', 'color: #00f0ff; font-size: 14px;');

    // Add click effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add loading animation removal
    window.addEventListener('load', () => {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => loading.remove(), 500);
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on escape
        if (e.key === 'Escape') {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });

    // Add current year to footer
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }

    // Add smooth reveal on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Add counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                const suffix = target.textContent.includes('+') ? '+' : '';
                let currentValue = 0;
                const increment = finalValue / 30;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + suffix;
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(currentValue) + suffix;
                    }
                }, 30);
                
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => counterObserver.observe(stat));
});

// Add preloader functionality
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Add custom cursor effect (optional enhancement)
if (window.matchMedia('(hover: hover)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #00f0ff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 0.1s, border-color 0.3s, background-color 0.3s;
            mix-blend-mode: difference;
        }
        
        .custom-cursor.hover {
            transform: translate(-50%, -50%) scale(1.5);
            background-color: rgba(0, 240, 255, 0.2);
            border-color: #7c3aed;
        }
        
        a, button, .social-link, .portfolio-box, .service-box, .contact-card {
            cursor: none;
        }
    `;
    document.head.appendChild(cursorStyle);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .social-link, .portfolio-box, .service-box, .contact-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}
