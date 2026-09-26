// Projects Data
const projectsData = [
    {
        title: 'M57-Biz Digital Forensics Case Report',
        description: 'Digital forensics investigation of the M57.biz case, including timeline reconstruction, artifact analysis (LNK, Prefetch), and evidence-based incident reporting.',
        type: 'forensics',
        language: 'Markdown',
        link: 'https://github.com/zainab-arslan-dar/M57-Biz-Digital-Forensics-Case-Report'
    },
    {
        title: 'Smart Home Security System With Intruder Detection IoT',
        description: 'Intelligent Home Monitoring System using IoT. Detects intrusions, verifies access with RFID, and triggers alarms, OLED alerts, and a servo door with cloud connectivity.',
        type: 'security',
        language: 'JavaScript',
        link: 'https://github.com/zainab-arslan-dar/Smart-Home-Security-System-With-Intruder-Detection-IoT'
    },
    {
        title: 'Project Management & Compliance Coursework Report',
        description: 'Smart Home estate design project developed for a Project Management & Compliance Cybersecurity module, integrating IoT solutions across family and warden-assisted homes.',
        type: 'security',
        language: 'Documentation',
        link: 'https://github.com/zainab-arslan-dar/Project-Management-Compliance-Coursework2-Report'
    },
    {
        title: 'Secure Medical Clinic Web Application',
        description: 'Full-featured Medical Clinic Web Application using IndexedDB for offline storage. Supports multiple stores (patients, doctors, admins, appointments, medical records) with secure role management.',
        type: 'development',
        language: 'HTML',
        link: 'https://github.com/zainab-arslan-dar/CST2572_Secure_Web_Technology_Coursework1'
    },
    {
        title: 'Smart Vending Machine Application',
        description: 'Smart Vending Machine project with a Tkinter GUI, SQLite database, and client-server architecture enabling product browsing, cart management, inventory tracking, and transaction history.',
        type: 'development',
        language: 'Python',
        link: 'https://github.com/zainab-arslan-dar/CST1510_CourseWork1_Smart_Vending_Machine'
    },
    {
        title: 'XML/XSL Bookshop Web Application',
        description: 'Responsive bookshop website developed as part of the CST1340 Web Development module, demonstrating integration of XML and XSL front-end rendering techniques.',
        type: 'development',
        language: 'HTML',
        link: 'https://github.com/zainab-arslan-dar/CST1340-Information-in-Organisation-CourseWork1'
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
                <span class="project-language">${project.language}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-footer">
                <a href="${project.link}" target="_blank" class="project-link" rel="noopener noreferrer">
                    View Repository
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}
