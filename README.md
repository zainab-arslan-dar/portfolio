const projects = [
  {
    name: 'Bookshop Website',
    category: 'web',
    type: 'Web Development',
    language: 'HTML / XSL',
    description: 'Responsive bookshop website built with structured XML/XSL content and a modern interface.',
    link: 'https://github.com/zainab-arslan-dar/CST1340-Information-in-Organisation-CourseWork1',
    date: 'Apr 2026'
  },
  {
    name: 'Smart Vending Machine',
    category: 'python',
    type: 'System Design',
    language: 'Python',
    description: 'Interactive vending system with Tkinter, SQLite, and a client-server design.',
    link: 'https://github.com/zainab-arslan-dar/CST1510_CourseWork1_Smart_Vending_Machine',
    date: 'Apr 2026'
  },
  {
    name: 'Medical Clinic App',
    category: 'web',
    type: 'Secure Web',
    language: 'HTML / JS',
    description: 'IndexedDB-powered medical clinic management application with CRUD operations.',
    link: 'https://github.com/zainab-arslan-dar/CST2572_Secure_Web_Technology_Coursework1',
    date: 'Apr 2026'
  },
  {
    name: 'Cybersecurity Awareness Trivia',
    category: 'cyber',
    type: 'Cybersecurity',
    language: 'HTML / JS',
    description: 'Interactive learning project focused on digital safety and cyber awareness topics.',
    link: 'https://github.com/zainab-arslan-dar/Cybersecurity-Awareness-Trivia',
    date: 'Oct 2025'
  },
  {
    name: 'Digital Forensics Case Report',
    category: 'cyber',
    type: 'Digital Forensics',
    language: 'Report',
    description: 'Evidence-based investigation and timeline reconstruction of a digital case study.',
    link: 'https://github.com/zainab-arslan-dar/M57-Biz-Digital-Forensics-Case-Report',
    date: 'Apr 2026'
  },
  {
    name: 'Smart Home Security System',
    category: 'iot',
    type: 'IoT Security',
    language: 'JavaScript',
    description: 'IoT-based home monitoring system with intruder detection and alert automation.',
    link: 'https://github.com/zainab-arslan-dar/Smart-Home-Security-System-With-Intruder-Detection-IoT',
    date: 'Jun 2026'
  }
];

const grid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  card.innerHTML = `
    <div class="project-header">
      <span class="project-type">${project.type}</span>
      <span class="project-language">${project.language}</span>
    </div>
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <div class="project-footer">
      <span class="project-date">${project.date}</span>
      <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">View →</a>
    </div>
  `;

  return card;
}

function renderProjects(filter = 'all') {
  if (!grid) return;
  grid.innerHTML = '';

  const visible = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  visible.forEach((project) => {
    grid.appendChild(createProjectCard(project));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});

const scrollEls = document.querySelectorAll('[data-scroll]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

scrollEls.forEach((el) => observer.observe(el));

renderProjects();

