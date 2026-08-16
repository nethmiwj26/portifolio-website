//
document.addEventListener('DOMContentLoaded', () => {

  initThemeToggle();

  initMobileNav();


  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderCertifications();
  renderResume();
  renderContactInfo();


  initContactForm();
  initProjectModals();
  initScrollSpy();
});

/* Theme Toggle Manager */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);

    themeBtn.innerHTML = newTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  });
}

/* Mobile Nav Toggle */
function initMobileNav() {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });


    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').className = 'fas fa-bars';
      });
    });
  }
}


function renderHero() {
  const data = portfolioData.personalInfo;
  document.getElementById('hero-name').innerText = data.name;
  document.getElementById('hero-headline').innerText = data.headline;
  document.getElementById('hero-bio').innerText = data.shortBio;
  document.getElementById('hero-avatar').src = data.avatar;
  document.getElementById('hero-avatar').alt = data.name;

  if (data.name) {
    document.title = `${data.name} | Software Engineering Portfolio`;
    const logoEl = document.getElementById('nav-logo');
    if (logoEl) {
      const parts = data.name.trim().split(' ');
      const first = parts[0] || '';
      const last = parts.slice(1).join(' ') || '';
      logoEl.innerHTML = `<i class="fas fa-terminal"></i> ${first}<span>${last}</span>`;
    }
  }


  const socialsContainer = document.getElementById('hero-socials');
  socialsContainer.innerHTML = `
    <a href="${data.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
    <a href="${data.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="mailto:${data.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>
  `;
}


function renderAbout() {
  const about = portfolioData.aboutMe;


  document.getElementById('about-background').innerText = about.background;
  document.getElementById('about-goals').innerText = about.careerGoals;


  const focusContainer = document.getElementById('about-focus-tags');
  focusContainer.innerHTML = about.technicalFocus.map(item => `
    <span class="tag"><i class="fas fa-check-circle"></i> ${item}</span>
  `).join('');


  const interestsContainer = document.getElementById('about-interests-tags');
  interestsContainer.innerHTML = about.interests.map(item => `
    <span class="tag"><i class="fas fa-star"></i> ${item}</span>
  `).join('');
}


function renderSkills() {
  const skillsData = portfolioData.skills;
  const tabsContainer = document.getElementById('skills-tabs');
  const gridContainer = document.getElementById('skills-grid');


  const categories = ["All", ...skillsData.map(s => s.category)];
  tabsContainer.innerHTML = categories.map((cat, idx) => `
    <button class="skill-tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');


  const renderSkillCards = (filterCategory = "All") => {
    const filteredSkills = filterCategory === "All"
      ? skillsData
      : skillsData.filter(s => s.category === filterCategory);

    gridContainer.innerHTML = filteredSkills.map(group => `
      <div class="skill-category-card">
        <h3 class="skill-cat-title">
          <i class="fas fa-${group.icon}"></i> ${group.category}
        </h3>
        <div class="skill-items">
          ${group.items.map(skill => `
            <div class="skill-item">
              <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  };

  renderSkillCards("All");


  tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('skill-tab-btn')) {
      tabsContainer.querySelectorAll('.skill-tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-category');
      renderSkillCards(cat);
    }
  });
}


function renderProjects() {
  const projects = portfolioData.projects;
  const gridContainer = document.getElementById('projects-grid');

  gridContainer.innerHTML = projects.map(proj => `
    <div class="project-card" data-id="${proj.id}">
      <div class="project-img-wrapper">
        <img src="${proj.image}" alt="${proj.title}" loading="lazy">
        <span class="project-category-badge">${proj.category}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tech">
          ${proj.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${proj.githubUrl && proj.githubUrl.trim() !== '' ? proj.githubUrl : portfolioData.personalInfo.github}" target="_blank" class="btn btn-secondary btn-sm">
            <i class="fab fa-github"></i> Code
          </a>
          ${proj.liveDemoUrl ? `
            <a href="${proj.liveDemoUrl}" target="_blank" class="btn btn-primary btn-sm">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          ` : ''}
          <button class="btn btn-secondary btn-sm view-project-btn" data-id="${proj.id}">
            <i class="fas fa-info-circle"></i> Details
          </button>
        </div>
      </div>
    </div>
  `).join('');
}


function renderTimeline() {
  const education = portfolioData.education;
  const experience = portfolioData.experience;


  const eduContainer = document.getElementById('education-timeline');
  eduContainer.innerHTML = education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-icon"><i class="fas fa-graduation-cap"></i></div>
      <div class="timeline-content">
        <span class="timeline-period">${edu.period}</span>
        <h3 class="timeline-title">${edu.degree}</h3>
        <div class="timeline-subtitle">${edu.institution} • ${edu.location}</div>
        ${edu.gpa ? `<p class="timeline-desc"><strong>Grade/GPA:</strong> ${edu.gpa}</p>` : ''}
        ${edu.achievements && edu.achievements.length ? `
          <ul class="timeline-bullets">
            ${edu.achievements.map(a => `<li>${a}</li>`).join('')}
          </ul>
        ` : ''}
        ${edu.coursework && edu.coursework.length ? `
          <div style="margin-top: 0.75rem;">
            <strong style="font-size: 0.85rem; color: var(--text-primary);">Relevant Coursework:</strong>
            <div class="tag-cloud" style="margin-top: 0.35rem;">
              ${edu.coursework.map(c => `<span class="tech-pill">${c}</span>`).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');


  const expContainer = document.getElementById('experience-timeline');
  expContainer.innerHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-icon"><i class="fas fa-briefcase"></i></div>
      <div class="timeline-content">
        <span class="timeline-period">${exp.period} • ${exp.type}</span>
        <h3 class="timeline-title">${exp.role}</h3>
        <div class="timeline-subtitle">${exp.company} • ${exp.location}</div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-bullets">
          ${exp.keyDeliverables.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}


function renderCertifications() {
  const certs = portfolioData.certifications;
  const achievements = portfolioData.achievements;
  const container = document.getElementById('certs-achievements-grid');

  const certCards = certs.map(c => `
    <div class="cert-card">
      <div class="cert-badge-icon"><i class="fas fa-certificate"></i></div>
      <div class="cert-info">
        <h4>${c.title}</h4>
        <div class="cert-issuer">${c.issuer} (${c.date})</div>
        <div class="cert-id">Credential ID: ${c.credentialId}</div>
      </div>
    </div>
  `).join('');

  const achCards = achievements.map(a => `
    <div class="cert-card">
      <div class="cert-badge-icon" style="background: rgba(6, 182, 212, 0.15); color: var(--accent-secondary);">
        <i class="fas fa-trophy"></i>
      </div>
      <div class="cert-info">
        <h4>${a.title}</h4>
        <div class="cert-issuer">${a.issuer} • ${a.date}</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem;">${a.description}</p>
      </div>
    </div>
  `).join('');

  container.innerHTML = certCards + achCards;
}


function renderResume() {
  const info = portfolioData.personalInfo;
  document.getElementById('download-resume-btn').href = info.resumeUrl;
}


function renderContactInfo() {
  const info = portfolioData.personalInfo;
  const list = document.getElementById('contact-info-list');

  list.innerHTML = `
    <div class="contact-info-card">
      <div class="contact-info-icon"><i class="fas fa-envelope"></i></div>
      <div class="contact-info-text">
        <label>Email Address</label>
        <a href="mailto:${info.email}">${info.email}</a>
      </div>
    </div>
    <div class="contact-info-card">
      <div class="contact-info-icon"><i class="fas fa-map-marker-alt"></i></div>
      <div class="contact-info-text">
        <label>Location</label>
        <p>${info.location}</p>
      </div>
    </div>
    <div class="contact-info-card">
      <div class="contact-info-icon"><i class="fab fa-linkedin"></i></div>
      <div class="contact-info-text">
        <label>LinkedIn Profile</label>
        <a href="${info.linkedin}" target="_blank">${info.linkedin ? info.linkedin.replace(/^https?:\/\/(www\.)?/, '') : 'LinkedIn'}</a>
      </div>
    </div>
    <div class="contact-info-card">
      <div class="contact-info-icon"><i class="fab fa-github"></i></div>
      <div class="contact-info-text">
        <label>GitHub Profile</label>
        <a href="${info.github}" target="_blank">${info.github ? info.github.replace(/^https?:\/\/(www\.)?/, '') : 'GitHub'}</a>
      </div>
    </div>
  `;
}


function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.className = 'form-status success';
      status.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. I will get back to you shortly.';
      form.reset();

      setTimeout(() => {
        status.style.display = 'none';
      }, 5000);
    });
  }
}


function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-project-details');
  const closeBtn = document.getElementById('modal-close-btn');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.view-project-btn')) {
      const projId = e.target.closest('.view-project-btn').getAttribute('data-id');
      const proj = portfolioData.projects.find(p => p.id === projId);

      if (proj) {
        modalBody.innerHTML = `
          <div style="margin-bottom: 1.5rem; text-align: center;">
            <img src="${proj.image}" alt="${proj.title}" style="border-radius: 12px; width: 100%; max-height: 300px; object-fit: cover; border: 1px solid var(--border-glow);">
          </div>
          <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${proj.title}</h2>
          <div style="color: var(--accent-secondary); font-weight: 700; margin-bottom: 1rem;">${proj.category} Project</div>
          <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${proj.description}</p>
          
          <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--text-primary);">Individual Contribution & Architecture:</h4>
            <p style="color: var(--text-muted); font-size: 0.95rem;">${proj.contribution}</p>
          </div>

          <div style="margin-bottom: 2rem;">
            <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--text-primary);">Technologies Used:</h4>
            <div class="project-tech">
              ${proj.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
            </div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${proj.githubUrl && proj.githubUrl.trim() !== '' ? proj.githubUrl : portfolioData.personalInfo.github}" target="_blank" class="btn btn-secondary">
              <i class="fab fa-github"></i> View GitHub Repository
            </a>
            ${proj.liveDemoUrl ? `
              <a href="${proj.liveDemoUrl}" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i> Launch Live Application
              </a>
            ` : ''}
          </div>
        `;

        modal.classList.add('active');
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}


function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
