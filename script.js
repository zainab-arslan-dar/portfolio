// Projects Data
const projects = [
    {
        name: "CST1340-Bookshop-Website",
        category: "web",
        type: "Web Development",
        language: "HTML/XSL",
        description: "A responsive bookshop website built with XML/XSL and modern web design, demonstrating structured data integration and elegant UI design principles.",
        link: "https://github.com/zainab-arslan-dar/CST1340-Information-in-Organisation-CourseWork1",
        date: "Apr 2026",
    },
    {
        name: "Smart-Vending-Machine",
        category: "python",
        type: "System Design",
        language: "Python",
        description: "An intelligent vending machine with Tkinter GUI, SQLite database, and client-server architecture for real-time inventory and transactions.",
        link: "https://github.com/zainab-arslan-dar/CST1510_CourseWork1_Smart_Vending_Machine",
        date: "Apr 2026",
    },
    {
        name: "Medical-Clinic-Web-App",
        category: "web",
        type: "Secure Web",
        language: "HTML/JS",
        description: "A full-featured medical clinic management system using IndexedDB with CRUD operations for patients, doctors, and appointments.",
        link: "https://github.com/zainab-arslan-dar/CST2572_Secure_Web_Technology_Coursework1",
        date: "Apr 2026",
    },
    {
        name: "Cybersecurity-Awareness-Trivia",
        category: "cyber",
        type: "Cybersecurity",
        language: "HTML/JS",
        description: "An interactive cybersecurity awareness trivia platform designed to educate users about digital security threats and best practices.",
        link: "https://github.com/zainab-arslan-dar/Cybersecurity-Awareness-Trivia",
        date: "Oct 2025",
    },
    {
        name: "M57-Digital-Forensics-Investigation",
        category: "cyber",
        type: "Digital Forensics",
        language: "Report",
        description: "A comprehensive digital forensics case analysis investigating the M57.biz incident with timeline reconstruction and artifact analysis.",
        link: "https://github.com/zainab-arslan-dar/M57-Biz-Digital-Forensics-Case-Report",
        date: "Apr 2026",
    },
    {
        name: "Smart-Home-Security-System",
        category: "iot",
        type: "IoT Security",
        language: "JavaScript",
        description: "An IoT-driven smart home security system with intrusion detection, RFID verification, automated alerts, and cloud connectivity.",
        link: "https://github.com/zainab-arslan-dar/Smart-Home-Security-System-With-Intruder-Detection-IoT",
        date: "Jun 2026",
    },
    {
        name: "Programming-Fundamentals",
        category: "python",
        type: "Programming",
        language: "C/Python",
        description: "Core programming coursework exploring algorithms, data structures, and problem-solving techniques in C and Python.",
        link: "https://github.com/zainab-arslan-dar/CST1500_CourseWork1",
        date: "Sep 2025",
    },
    {
        name: "Smart-Home-Estate-Design",
        category: "cyber",
        type: "Project Management",
        language: "Report",
        description: "A comprehensive smart home estate project focusing on compliance, risk assessment, and secure IoT design across multiple residential types.",
        link: "https://github.com/zainab-arslan-dar/Project-Management-Compliance-Coursework2-Report",
        date: "May 2026",
    },
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

// Create Project Cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.category;
    
    card.innerHTML = `
        <div class="project-header">
            <span class="project-type">${project.type}</span>
            <span class="project-language">${project.language}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="color: var(--text-gray); font-size: 0.9rem;">${project.date}</span>
            <a href="${project.link}" target="_blank" rel="noreferrer" class="project-link">View Project →</a>
        </div>
    `;
    
    return card;
}

// Render Projects
function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    filteredProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        card.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(card);
    });
}

// Filter Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProjects(button.dataset.filter);
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close Mobile Menu on Link Click
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Scroll Trigger Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all scroll elements
document.querySelectorAll('[data-scroll]').forEach(element => {
    observer.observe(element);
});

// Mouse Move Parallax Effect on Hero
document.addEventListener('mousemove', (e) => {
    const hologram = document.getElementById('hologram');
    if (!hologram) return;
    
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    
    if (window.scrollY < window.innerHeight) {
        hologram.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    }
});

// Particle Mouse Follow
const particles = document.querySelectorAll('.bg-particle');
if (particles.length > 0) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 20;
            particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

// Animate Text on Load
window.addEventListener('load', () => {
    const words = document.querySelectorAll('.hero-title .word');
    words.forEach((word, index) => {
        word.style.animationDelay = `${0.2 + index * 0.2}s`;
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize
renderProjects();
