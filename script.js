// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Projects Data
const projectsData = [
    {
        title: 'Penetration Testing Suite',
        description: 'A comprehensive security testing toolkit for vulnerability assessment and penetration testing.',
        type: 'security',
        date: '2024',
        link: '#'
    },
    {
        title: 'Digital Forensics Analyzer',
        description: 'Advanced tool for collecting, preserving, and analyzing digital evidence from various sources.',
        type: 'forensics',
        date: '2024',
        link: '#'
    },
    {
        title: 'Secure Chat Application',
        description: 'End-to-end encrypted messaging application with zero-knowledge architecture.',
        type: 'development',
        date: '2024',
        link: '#'
    },
    {
        title: 'Network Traffic Monitor',
        description: 'Real-time network analysis tool for detecting anomalies and suspicious activities.',
        type: 'security',
        date: '2023',
        link: '#'
    },
    {
        title: 'File Integrity Checker',
        description: 'Advanced file hashing and integrity verification system for forensic analysis.',
        type: 'forensics',
        date: '2023',
        link: '#'
    },
    {
        title: 'Secure Password Manager',
        description: 'Military-grade password management solution with biometric authentication.',
        type: 'development',
        date: '2023',
        link: '#'
    }
];

// Render Projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.type === filter);

    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.innerHTML = `
            <div class="project-header">
                <span class="project-type">${project.type}</span>
                <span class="project-language">GitHub</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-footer">
                <span class="project-date">${project.date}</span>
                <a href="${project.link}" class="project-link">
                    View Project
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// Initial render
renderProjects();

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.about, .projects, .contact').forEach(section => {
    observer.observe(section);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name') || contactForm.querySelector('input[type="text"]').value,
            email: formData.get('email') || contactForm.querySelector('input[type="email"]').value,
            message: formData.get('message') || contactForm.querySelector('textarea').value
        };

        // Show success message (in production, this would send to a backend)
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.textContent = '✓ Message Sent!';
        submitButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
        }, 3000);

        console.log('Form submitted:', data);
    });
}

// Navbar transparency on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(0, 132, 255, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(0, 132, 255, 0.2)';
    }
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-cyan)';
        } else {
            link.style.color = 'var(--text-light)';
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

// Add interactive glow effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--glow-x', `${x}px`);
        button.style.setProperty('--glow-y', `${y}px`);
    });
});

// Animate numbers on page load
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Fetch GitHub repositories
async function fetchGitHubProjects() {
    try {
        const response = await fetch('https://api.github.com/users/zainab-arslan-dar/repos?sort=updated&per_page=6');
        const repos = await response.json();

        // You can use this data to dynamically update the projects
        console.log('GitHub Repos:', repos);
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Fetch GitHub projects on load
    fetchGitHubProjects();

    // Add staggered animation to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add scroll reveal to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        observer.observe(card);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    }
});

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swiped left
    }
    if (touchEndX > touchStartX + 50) {
        // Swiped right
    }
}

// Performance optimization - lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('Portfolio loaded successfully! 🚀');
