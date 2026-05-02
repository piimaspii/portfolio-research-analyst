/* ==================== VITE & TYPED.JS FIX ==================== */
// Kita inisialisasi Typed.js dengan sedikit delay agar elemen HTML siap
setTimeout(() => {
    const typed = new Typed('.multiple-text', {
        strings: ['Geopolitical Risk Analyst', 'Macro-Economic Researcher', 'Investment Strategist', 'Data-Driven Tool Builder'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
}, 500);

/* ==================== SCROLL REVEAL ==================== */
const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out-cubic',
    delay: 200
});

sr.reveal('.home-content', { origin: 'left' });
sr.reveal('.home-image', { origin: 'right', delay: 400 });
sr.reveal('.section-title, .about-image, .about-text, .service-box, .insight-card, .contact-card', { origin: 'bottom', interval: 150 });
sr.reveal('.timeline-item', { origin: 'left', interval: 200 });

/* ==================== NAVBAR & SCROLL HANDLING ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ==================== INTERACTIVE EFFECTS (CURSOR, MAGNETIC, ETC) ==================== */

// Magnetic effect for buttons
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

// Parallax effect for blobs
const blobs = document.querySelectorAll('.blob');
window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        blob.style.transform = `translate(${(x - 0.5) * speed}px, ${(y - 0.5) * speed}px)`;
    });
});

// Custom Cursor (Hanya di Desktop)
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
    `;
    document.head.appendChild(cursorStyle);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactive = document.querySelectorAll('a, button, .social-link, .portfolio-box, .service-box');
    interactive.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

/* ==================== FORM HANDLING ==================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you, Muhammad Rizki will get back to you soon!');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}
