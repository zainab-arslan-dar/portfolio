// Mobile menu
const burger=document.getElementById('burger'), menu=document.getElementById('mobileMenu');
burger.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

// Scroll-spy nav
const links=document.querySelectorAll('.nav-links a');
const sections=document.querySelectorAll('section[id]');
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+e.target.id));
    }
  });
},{rootMargin:'-45% 0px -50% 0px'});
sections.forEach(s=>io.observe(s));

// Hero network graphic
(function(){
  const nodePositions=[[200,200],[120,120],[280,120],[320,220],[250,320],[130,300],[80,200],[200,80],[200,320]];
  const linesG=document.getElementById('netLines');
  const nodesG=document.getElementById('netNodes');
  const core=[200,200];
  nodePositions.forEach((p,i)=>{
    if(i===0) return;
    const line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',core[0]); line.setAttribute('y1',core[1]);
    line.setAttribute('x2',p[0]); line.setAttribute('y2',p[1]);
    line.setAttribute('class', i%2===0 ? 'net-line pulse' : 'net-line');
    linesG.appendChild(line);
  });
  nodePositions.forEach((p,i)=>{
    const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx',p[0]); c.setAttribute('cy',p[1]);
    c.setAttribute('r', i===0?9:5);
    c.setAttribute('class', i===0 ? 'net-node core' : 'net-node');
    nodesG.appendChild(c);
  });
})();

// Project data + render
const projectsData=[
  {title:'M57-Biz Digital Forensics Case Report',description:'Digital forensics investigation of the M57.biz case, including timeline reconstruction, artifact analysis (LNK, Prefetch), and evidence-based incident reporting.',type:'forensics',language:'Markdown',link:'https://github.com/zainab-arslan-dar/M57-Biz-Digital-Forensics-Case-Report'},
  {title:'Smart Home Security System With Intruder Detection IoT',description:'Intelligent home monitoring system using IoT. Detects intrusions, verifies access with RFID, and triggers alarms, OLED alerts, and a servo door with cloud connectivity.',type:'security',language:'JavaScript',link:'https://github.com/zainab-arslan-dar/Smart-Home-Security-System-With-Intruder-Detection-IoT'},
  {title:'Project Management & Compliance Coursework Report',description:'Smart home estate design project for a Project Management & Compliance Cybersecurity module, integrating IoT solutions across family and warden-assisted homes.',type:'security',language:'Documentation',link:'https://github.com/zainab-arslan-dar/Project-Management-Compliance-Coursework2-Report'},
  {title:'Secure Medical Clinic Web Application',description:'Full-featured medical clinic web app using IndexedDB for offline storage, with multiple stores (patients, doctors, admins, appointments, records) and secure role management.',type:'development',language:'HTML',link:'https://github.com/zainab-arslan-dar/CST2572_Secure_Web_Technology_Coursework1'},
  {title:'Smart Vending Machine Application',description:'Smart vending machine project with a Tkinter GUI, SQLite database, and client-server architecture enabling browsing, cart management, inventory tracking, and transaction history.',type:'development',language:'Python',link:'https://github.com/zainab-arslan-dar/CST1510_CourseWork1_Smart_Vending_Machine'},
  {title:'XML/XSL Bookshop Web Application',description:'Responsive bookshop website built for the CST1340 Web Development module, demonstrating XML and XSL front-end rendering techniques.',type:'development',language:'HTML',link:'https://github.com/zainab-arslan-dar/CST1340-Information-in-Organisation-CourseWork1'}
];
const grid=document.getElementById('projectsGrid');
function renderProjects(filter){
  grid.innerHTML='';
  const list = filter==='all' ? projectsData : projectsData.filter(p=>p.type===filter);
  list.forEach(p=>{
    const card=document.createElement('div');
    card.className='project-card';
    card.innerHTML=`<div class="project-top"><span class="chip">${p.type}</span><span class="lang">${p.language}</span></div>
      <h3>${p.title}</h3><p>${p.description}</p>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link">View repository <i class="fas fa-arrow-right"></i></a>`;
    card.addEventListener('mousemove',(e)=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX-r.left)+'px');
      card.style.setProperty('--my', (e.clientY-r.top)+'px');
    });
    grid.appendChild(card);
  });
}
renderProjects('all');
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// Contact form (client-side only)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formMsg').textContent = "Thanks — I'll get back to you soon.";
  this.reset();
});
