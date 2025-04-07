// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Work Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        workItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Logo animation
gsap.from('.logo', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out'
});

// Nav links animation
gsap.from('.nav-links li', {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5,
    ease: 'power3.out'
});


//         // Hero section animations
//         gsap.from('.hero h1', {
//             duration: 1.5,
//             y: 50,
//             opacity: 0,
//             ease: 'power3.out',
//             delay: 0.8
//         });

//         gsap.from('.hero p', {
//             duration: 1,
//             y: 30,
//             opacity: 0,
//             ease: 'power3.out',
//             delay: 1.3
//         });

//         gsap.from('.cta-buttons', {
//             duration: 1,
//             y: 30,
//             opacity: 0,
//             ease: 'power3.out',
//             delay: 1.6
//         });

//         gsap.from('.scroll-down', {
//             duration: 1,
//             opacity: 0,
//             ease: 'power3.out',
//             delay: 2
//         });

//         // About section animations
//         gsap.from('.about-image', {
//             scrollTrigger: {
//                 trigger: '.about-section',
//                 start: 'top 70%',
//                 toggleActions: 'play none none none'
//             },
//             x: -100,
//             opacity: 0,
//             duration: 1,
//             ease: 'power3.out'
//         });

//         gsap.from('.about-content', {
//             scrollTrigger: {
//                 trigger: '.about-section',
//                 start: 'top 70%',
//                 toggleActions: 'play none none none'
//             },
//             x: 100,
//             opacity: 0,
//             duration: 1,
//             ease: 'power3.out',
//             delay: 0.3
//         });

//         // Work section animations
//         gsap.from('.work-filters', {
//             scrollTrigger: {
//                 trigger: '.work',
//                 start: 'top 80%',
//                 toggleActions: 'play none none none'
//             },
//             y: 50,
//             opacity: 0,
//             duration: 0.8,
//             ease: 'power3.out'
//         });

//         gsap.from('.work-item', {
//             scrollTrigger: {
//                 trigger: '.work',
//                 start: 'top 70%',
//                 toggleActions: 'play none none none'
//             },
//             y: 100,
//             opacity: 0,
//             duration: 0.8,
//             stagger: 0.1,
//             ease: 'power3.out'
//         });

//         // Process section animations
//         gsap.from('.process-step', {
//             scrollTrigger: {
//                 trigger: '.process',
//                 start: 'top 70%',
//                 toggleActions: 'play none none none'
//             },
//             y: 100,
//             opacity: 0,
//             duration: 0.8,
//             stagger: 0.2,
//             ease: 'power3.out'
//         });

//         // Testimonials animations
//         gsap.from('.testimonial-card', {
//             scrollTrigger: {
//                 trigger: '.testimonials',
//                 start: 'top 70%',
//                 toggleActions: 'play none none none'
//             },
//             y: 100,
//             opacity: 0,
//             duration: 0.8,
//             stagger: 0.2,
//             ease: 'power3.out'
//         });

//         // CTA section animation
//         gsap.from('.cta h2', {
//             scrollTrigger: {
//                 trigger: '.cta',
//                 start: 'top 80%',
//                 toggleActions: 'play none none none'
//             },
//             y: 50,
//             opacity: 0,
//             duration: 1,
//             ease: 'power3.out'
//         });

//         gsap.from('.cta .btn', {
//             scrollTrigger: {
//                 trigger: '.cta',
//                 start: 'top 70%',
//                 toggleActions: 'play none none none'
//             },
//             y: 50,
//             opacity: 0,
//             duration: 1,
//             delay: 0.3,
//             ease: 'power3.out'
//         });

//         // Footer animations
//         gsap.from('.footer-about', {
//             scrollTrigger: {
//                 trigger: 'footer',
//                 start: 'top 80%',
//                 toggleActions: 'play none none none'
//             },
//             y: 50,
//             opacity: 0,
//             duration: 0.8,
//             ease: 'power3.out'
//         });

//         gsap.from('.footer-links', {
//             scrollTrigger: {
//                 trigger: 'footer',
//                 start: 'top 70%',
//                 toggleActions: 'play none none none'
//             },
//             y: 50,
//             opacity: 0,
//             duration: 0.8,
//             stagger: 0.2,
//             ease: 'power3.out'
//         });

//         gsap.from('.footer-bottom', {
//             scrollTrigger: {
//                 trigger: 'footer',
//                 start: 'top 60%',
//                 toggleActions: 'play none none none'
//             },
//             y: 50,
//             opacity: 0,
//             duration: 0.8,
//             ease: 'power3.out'
//         });

//         // Custom cursor (optional)
//         const cursor = document.createElement('div');
//         cursor.classList.add('custom-cursor');
//         document.body.appendChild(cursor);

//         document.addEventListener('mousemove', (e) => {
//             gsap.to(cursor, {
//                 x: e.clientX,
//                 y: e.clientY,
//                 duration: 0.3,
//                 ease: 'power2.out'
//             });
//         });

//         document.querySelectorAll('a, button, .work-item').forEach(element => {
//             element.addEventListener('mouseenter', () => {
//                 cursor.classList.add('cursor-hover');
//             });
//             element.addEventListener('mouseleave', () => {
//                 cursor.classList.remove('cursor-hover');
//             });
//         });

//         // Add cursor styles
//         const style = document.createElement('style');
//         style.textContent = `
//             .custom-cursor {
//                 position: fixed;
//                 width: 20px;
//                 height: 20px;
//                 border-radius: 50%;
//                 background: rgba(0, 255, 178, 0.5);
//                 pointer-events: none;
//                 z-index: 9999;
//                 transform: translate(-50%, -50%);
//                 mix-blend-mode: difference;
//                 transition: transform 0.1s ease;
//             }
//             .cursor-hover {
//                 transform: translate(-50%, -50%) scale(1.5);
//                 background: rgba(162, 89, 255, 0.7);
//             }
//         `;
//         document.head.appendChild(style);

//         // Smooth scroll for anchor links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const target = document.querySelector(this.getAttribute('href'));
//                 if (target) {
//                     window.scrollTo({
//                         top: target.offsetTop - 80,
//                         behavior: 'smooth'
//                     });
//                 }
//             });
//         });

//         // Preloader animation
//         window.addEventListener('load', () => {
//             const preloader = document.createElement('div');
//             preloader.className = 'preloader';
//             preloader.innerHTML = `
//                 <div class="preloader-content">
//                     <div class="preloader-spinner"></div>
//                     <div class="preloader-logo">Loop<span>Studio</span></div>
//                 </div>
//             `;
//             document.body.prepend(preloader);

//             // Add preloader styles
//             const preloaderStyle = document.createElement('style');
//             preloaderStyle.textContent = `
//                 .preloader {
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     background: var(--bg-dark);
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     z-index: 99999;
//                     transition: opacity 0.8s ease, visibility 0.8s ease;
//                 }
//                 .preloader-content {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                 }
//                 .preloader-logo {
//                     font-size: 2rem;
//                     font-weight: 700;
//                     color: var(--text-light);
//                     margin-top: 2rem;
//                 }
//                 .preloader-logo span {
//                     color: var(--accent-green);
//                 }
//                 .preloader-spinner {
//                     width: 50px;
//                     height: 50px;
//                     border: 3px solid rgba(255, 255, 255, 0.1);
//                     border-radius: 50%;
//                     border-top-color: var(--accent-green);
//                     animation: spin 1s ease-in-out infinite;
//                 }
//                 @keyframes spin {
//                     to { transform: rotate(360deg); }
//                 }
//             `;
//             document.head.appendChild(preloaderStyle);

//             // Hide preloader after everything is loaded
//             setTimeout(() => {
//                 gsap.to('.preloader', {
//                     opacity: 0,
//                     visibility: 'hidden',
//                     duration: 0.8,
//                     ease: 'power2.inOut',
//                     onComplete: () => {
//                         document.body.removeChild(preloader);
//                         document.head.removeChild(preloaderStyle);
//                     }
//                 });
//             }, 1500);
//         });

//         // Animate gradient background on scroll
//         const hero = document.querySelector('.hero');
//         document.addEventListener('scroll', () => {
//             const scrollPosition = window.scrollY;
//             const opacity = 1 - Math.min(scrollPosition / 500, 0.8);
//             hero.style.opacity = opacity;
//         });

//         // Text reveal animation for hero heading
//         const heroHeading = document.querySelector('.hero h1');
//         const letters = heroHeading.textContent.split('');
//         heroHeading.textContent = '';

//         letters.forEach((letter, i) => {
//             const span = document.createElement('span');
//             span.textContent = letter;
//             span.style.display = 'inline-block';
//             span.style.opacity = '0';
//             span.style.transform = 'translateY(20px)';
//             heroHeading.appendChild(span);
    
//             gsap.to(span, {
//                 duration: 0.8,
//                 opacity: 1,
//                 y: 0,
//                 delay: 0.8 + (i * 0.03),
//                 ease: 'power3.out'
//             });
//         });