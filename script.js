const projects = [
  {
    name: "CST1340-Information-in-Organisation-CourseWork1",
    category: "web",
    type: "Web Development",
    language: "HTML",
    description:
      "A responsive bookshop website built with XML/XSL and modern web design, demonstrating structured data integration and UI design principles.",
    link: "https://github.com/zainab-arslan-dar/CST1340-Information-in-Organisation-CourseWork1",
    date: "Apr 2026",
  },
  {
    name: "CST1500_CourseWork1",
    category: "python",
    type: "Programming",
    language: "C",
    description:
      "A foundational programming project focused on logic, problem-solving, and core algorithmic thinking in C.",
    link: "https://github.com/zainab-arslan-dar/CST1500_CourseWork1",
    date: "Sep 2025",
  },
  {
    name: "CST1500_Coursework2",
    category: "python",
    type: "Programming",
    language: "Python",
    description:
      "Python-based project exploring applied coding concepts, software structure, and interactive technical problem solving.",
    link: "https://github.com/zainab-arslan-dar/CST1500_Coursework2",
    date: "Apr 2026",
  },
  {
    name: "CST1510_CourseWork1_Smart_Vending_Machine",
    category: "python",
    type: "System Design",
    language: "Python",
    description:
      "A smart vending machine application with Tkinter, SQLite, and client-server architecture for transactional inventory workflows.",
    link: "https://github.com/zainab-arslan-dar/CST1510_CourseWork1_Smart_Vending_Machine",
    date: "Apr 2026",
  },
  {
    name: "CST2572_Secure_Web_Technology_Coursework1",
    category: "web",
    type: "Secure Web",
    language: "HTML",
    description:
      "A medical clinic management web app using IndexedDB and modern CRUD interfaces for patient, doctor, and appointment tracking.",
    link: "https://github.com/zainab-arslan-dar/CST2572_Secure_Web_Technology_Coursework1",
    date: "Apr 2026",
  },
  {
    name: "Cybersecurity-Awareness-Trivia",
    category: "cyber",
    type: "Cybersecurity",
    language: "HTML",
    description:
      "An interactive cybersecurity awareness trivia page designed to teach users about digital safety in a fun, accessible format.",
    link: "https://github.com/zainab-arslan-dar/Cybersecurity-Awareness-Trivia",
    date: "Oct 2025",
  },
  {
    name: "M57-Biz-Digital-Forensics-Case-Report",
    category: "report",
    type: "Digital Forensics",
    language: "Report",
    description:
      "A digital forensics investigation report reconstructing events and artifacts from the M57.biz case with clear evidence analysis.",
    link: "https://github.com/zainab-arslan-dar/M57-Biz-Digital-Forensics-Case-Report",
    date: "Apr 2026",
  },
  {
    name: "Project-Management-Compliance-Coursework2-Report",
    category: "report",
    type: "Compliance",
    language: "Report",
    description:
      "A smart home estate project focusing on risk, compliance, energy efficiency, and secure design in a project management context.",
    link: "https://github.com/zainab-arslan-dar/Project-Management-Compliance-Coursework2-Report",
    date: "May 2026",
  },
  {
    name: "Smart-Home-Security-System-With-Intruder-Detection-IoT",
    category: "iot",
    type: "IoT Security",
    language: "JavaScript",
    description:
      "An IoT-driven smart home security system with intrusion detection, access verification, alert mechanisms, and automation features.",
    link: "https://github.com/zainab-arslan-dar/Smart-Home-Security-System-With-Intruder-Detection-IoT",
    date: "Jun 2026",
  }
];

const grid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.category = project.category;

  card.innerHTML = `
    <div class="project-top">
      <div class="project-meta">
        <span class="project-type">${project.type}</span>
        <span class="project-language">${project.language}</span>
      </div>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
    </div>
    <div class="project-bottom">
      <span class="project-date">${project.date}</span>
      <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">View repo →</a>
    </div>
  `;

  return card;
}

function renderProjects(filter = "all") {
  grid.innerHTML = "";

  const visibleProjects = filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter);

  visibleProjects.forEach((project) => {
    grid.appendChild(createProjectCard(project));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();



