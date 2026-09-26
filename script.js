// Projects Data
const projectsData = [
    {
        title: 'Penetration Testing Suite',
        description: 'A comprehensive security testing toolkit for vulnerability assessment and penetration testing.',
        type: 'security',
        link: 'https://github.com/zainab-arslan-dar/project1'
    },
    {
        title: 'Digital Forensics Analyzer',
        description: 'Advanced tool for collecting, preserving, and analyzing digital evidence from various sources.',
        type: 'forensics',
        link: 'https://github.com/zainab-arslan-dar/project2'
    },
    {
        title: 'Secure Chat Application',
        description: 'End-to-end encrypted messaging application with zero-knowledge architecture.',
        type: 'development',
        link: 'https://github.com/zainab-arslan-dar/project3'
    },
    {
        title: 'Network Traffic Monitor',
        description: 'Real-time network analysis tool for detecting anomalies and suspicious activities.',
        type: 'security',
        link: 'https://github.com/zainab-arslan-dar/project4'
    },
    {
        title: 'File Integrity Checker',
        description: 'Advanced file hashing and integrity verification system for forensic analysis.',
        type: 'forensics',
        link: 'https://github.com/zainab-arslan-dar/project5'
    },
    {
        title: 'Secure Password Manager',
        description: 'Military-grade password management solution with biometric authentication.',
        type: 'development',
        link: 'https://github.com/zainab-arslan-dar/project6'
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
                <a href="${project.link}" target="_blank" class="project-link">
                    View Project
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}
