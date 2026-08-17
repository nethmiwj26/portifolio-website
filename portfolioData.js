//
const portfolioData = {
  personalInfo: {
    name: "Nethmi Wijesinghe",
    headline: "IT Undergraduate | Building Toward Cloud & DevOps",
    shortBio: "Full-stack developer in training with a growing focus on cloud infrastructure, DevOps practices, and cybersecurity — I like understanding how systems are built, deployed, and kept secure, not just how they work.",
    location: "Colombo, Sri Lanka / Remote",
    email: "nethmiwijesingheia26@gmail.com",
    github: "https://github.com/nethmiwj26",
    linkedin: "https://www.linkedin.com/in/nethmi-i-wijesinghe-68b794348",
    avatar: "assets/myphoto_portifolio.jpeg",
    resumeUrl: ""
  },

  aboutMe: {
    background: "I am an Information Technology undergraduate at the University of Kelaniya, driven by a passion for building reliable, scalable software systems. My journey began with basic web applications and has grown into hands-on work across full-stack development, database design, and systems architecture — with a growing focus on how software is deployed, secured, and scaled in production.",
    careerGoals: "My objective is to join an innovative technology company as a Graduate Software Engineer with a focus on DevOps, cloud architecture, and cybersecurity — contributing to high-scale, secure infrastructure, learning from experienced engineers, and growing into a specialist in cloud-native and security-conscious systems.",
    interests: ["Cloud Architecture & DevOps", "Cybersecurity & Secure Systems Design", "Artificial Intelligence & ML", "Open Source Contributing", "Competitive Programming"],
    technicalFocus: ["Full-Stack Web Engineering", "Cloud Infrastructure & CI/CD Pipelines", "RESTful API Design", "Database Design & Systems Architecture"]
  },

  skills: [
    {
      category: "Programming Languages", icon: "code", items: [
        { name: "JavaScript / TypeScript", level: 78 },
        { name: "Java", level: 60 },
        { name: "C", level: 55 },
        { name: "SQL", level: 80 },
        { name: "HTML5 / CSS3", level: 65 }
      ]
    },
    {
      category: "Frameworks & Libraries", icon: "layer-group", items: [
        { name: "React.js", level: 75 },
        { name: "Node.js & Express", level: 60 },
        { name: "Redux Toolkit", level: 55 },
        { name: "Tailwind CSS / Material UI", level: 60 }
      ]
    },
    {
      category: "Databases", icon: "database", items: [
        { name: "MySQL", level: 80 },
        { name: "Database Design & ER Modeling", level: 78 }
      ]
    },
    {
      category: "Tools & Methodologies", icon: "wrench", items: [
        { name: "Git & GitHub", level: 55 },
        { name: "Linux / Shell Scripting", level: 55 }
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "TaskPulse - Team Task Management App",
      category: "Full Stack",
      featured: true,
      image: "assets/image.png",
      description: "A collaborative task management platform with authentication, workspaces, and task/kanban tracking, built as a team project for the Web Application Development module.",
      technologies: ["Node.js", "Express", "Prisma", "MySQL", "Socket.IO"],
      githubUrl: "https://github.com/Arankan05/task-management-system",
      liveDemoUrl: "",
      contribution: "Served as QA/Testing lead: wrote and ran test cases, tracked dependency vulnerabilities via npm audit, and collaborated on Git workflows within the team codebase."
    },

    {
      id: "proj-2",
      title: "TRACS - Translation Request & Client Management System",
      category: "System Design",
      featured: false,
      image: "assets/tracs_mockup.png",
      description: "A system design concept for managing a licensed translator's office - covering client tracking, deadline alerts, payment records, and document delivery - based on first-hand office experience. Design phase only, not yet implemented.",
      technologies: ["React (planned)", "Node.js (planned)", "Express (planned)", "MySQL (planned)"],
      githubUrl: "",
      liveDemoUrl: "",
      contribution: "Designed the system from real operational pain points: defined core features, data flow, and problem-to-feature mapping for deadline management, document retrieval, and client notifications."
    },

    {
      id: "proj-3",
      title: "DevPortfolio - Personal Developer Portfolio",
      category: "Frontend & Web",
      featured: true,
      image: "assets/image copy.png",
      description: "A modern, responsive single-page developer portfolio featuring a glassmorphic dark/light design system, dynamic skill category filters, project details modal, and complete PPD II assessment compliance.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git / GitHub", "Netlify"],
      githubUrl: "https://github.com/nethmiwj26/portifolio-website",
      liveDemoUrl: "https://sage-sunburst-19f482.netlify.app",
      contribution: "Sole Developer: Architected and built the full-stack static web application, engineered the dynamic JavaScript DOM renderer, designed custom glassmorphism CSS, and configured automated CI/CD deployment on Netlify."
    }
  ],

  education: [
    {
      institution: "University of Kelaniya",
      degree: "B.Sc. (Hons) in Information Technology",
      period: "2025 - Present (Expected 2029)",
      location: "Kelaniya, Sri Lanka",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Architecture",
        "Web Application Development",
        "Cloud Computing",
        "Artificial Intelligence"
      ]
    },
    {
      institution: "Sujatha Vidyalaya, Matara",
      degree: "G.C.E. Advanced Level - Science Stream",
      period: "2013 - 2022",
      location: "Matara, Sri Lanka",
      gpa: "2 A's, 1 C (Physics, Chemistry, Biology)",
      coursework: []
    }
  ],


  experience: [
    {
      role: "Translation & Document Support Assistant",
      company: "Private Translator's Office",
      period: "Sep 2024 - Dec 2024",
      type: "Part-Time",
      location: "On-Site",
      description: "Worked five days a week supporting the day-to-day operations of a licensed translator's office, handling document workflows outside of direct client communication.",
      keyDeliverables: [
        "Assisted with document organization, tracking, and administrative workflows for translation requests.",
        "Gained first-hand insight into deadline management and document retrieval challenges, which directly informed the design of TRACS, a translation office management system built as a personal project."
      ]
    },
    {
      role: "Editorial Coordinator",
      company: "IMSSA - Exposition Magazine",
      period: "Ongoing",
      type: "Leadership",
      location: "On-Campus",
      description: "Serve as Editorial Coordinator for Exposition Magazine, the publication of the Industrial Management Science Students' Association (IMSSA).",
      keyDeliverables: [
        "Coordinate writers and manage content timelines across magazine issues, from planning through final submission.",
        "Write original content and proofread/edit contributor pieces for grammar, tense consistency, and style standards.",
        "Reviewed and refined published pieces, including the annual success report, ensuring accuracy and consistency across sections."
      ]
    },
    {
      role: "QA & Testing (Team Project)",
      company: "University - Web Application Development Module",
      period: "Coursework Project, 2025",
      type: "Academic",
      location: "On-Campus",
      description: "Contributed as QA/Testing lead on TaskPulse, a team-built task management application, as the final project for the Web Application Development module. Presented in June 2025.",
      keyDeliverables: [
        "Worked hands-on with Git in a team setting for the first time, including resolving merge conflicts on a Node.js/Express/Prisma/MySQL/Socket.IO codebase.",
        "Ran npm audit checks to identify dependency vulnerabilities and logged them as tracked bugs for the team."
      ]
    }
  ],

  certifications: [
  ],

  achievements: [

  ]
};
