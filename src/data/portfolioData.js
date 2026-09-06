export const personalInfo = {
  name: "Harish R",
  role: "Java Full Stack Developer",
  location: "Bangalore, India",
  phone: "9361291061",
  email: "hariranganathanvk@gmail.com",
  socials: {
    github: "https://github.com/Harish-1306",
    linkedin: "https://www.linkedin.com/in/harish-r-395116332/",
    leetcode: "https://leetcode.com/u/WSxp3yAkdq/"
  },
  summary: "Java Full Stack Developer with hands-on experience developing enterprise applications using Java, Spring Boot, REST APIs, JPA/Hibernate, SQL, and React. Experienced in business logic, workflow-driven applications, database operations, API integrations, scheduled processing, and testing.",
  roles: [
    "Java Full Stack Developer",
    "Java Backend Developer",
    "Spring Boot Developer",
    "Full Stack Developer"
  ]
};

export const experiences = [
  {
    role: "Probationary Junior Developer",
    company: "QuGates Technologies Pvt Ltd",
    location: "Bangalore, India",
    period: "Apr 2026 – Present",
    active: true,
    bullets: [
      "Develop enterprise applications using Java, Spring Boot, Spring Data JPA, Hibernate, REST APIs, MySQL, and React.",
      "Implement business logic, validations, database operations, API integrations, and workflow-driven application features.",
      "Contribute across development, debugging, testing, and end-to-end feature implementation while collaborating with the development team."
    ],
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "MySQL", "React"]
  },
  {
    role: "Software Development Intern",
    company: "QuGates Technologies Pvt Ltd",
    location: "Bangalore, India",
    period: "Dec 15, 2025 – Mar 2026",
    active: false,
    bullets: [
      "Contributed to the development of the company’s flagship product within the SDRT department, supporting frontend, backend, REST API, database, and testing activities.",
      "Assisted senior engineers in bug fixes, code refactoring, and integration testing across core service layers.",
      "Participated in daily standups, code reviews, and feature delivery milestones."
    ],
    tags: ["Java", "REST APIs", "SQL", "Frontend & Backend", "Testing & QA"]
  }
];

export const projects = [
  {
    id: "pms",
    title: "Performance Management System (PMS)",
    category: "enterprise",
    categoryLabel: "QuGates Technologies • Enterprise HR Tech",
    badge: "Enterprise Flagship",
    icon: "chart-line",
    summary: "Enterprise performance management platform for goal setting, KPI evaluation, achievement calculation, and approval workflows.",
    features: [
      "Developed modules for business goals, strategies, KPIs, formulas, employee goals, competencies, self-assessments, and performance reviews using Java, Spring Boot, JPA/Hibernate, React, and MySQL.",
      "Implemented and contributed to metric resolution, achievement calculations, approval workflows, authentication and authorization, notifications, caching, and scheduled processing."
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "OpenFeign", "React", "MySQL", "Caching", "Scheduled Processing"],
    specs: {
      overview: "Enterprise performance management platform designed to align corporate goals with individual employee milestones, featuring goal cascading, automated rating calculations, and approval workflows.",
      architecture: "Spring Boot layered architecture with JPA/Hibernate persistence, OpenFeign client integrations, Caffeine caching, scheduled cron tasks, and MySQL database.",
      modules: [
        { name: "Strategy & Goal Cascading", desc: "Top-level corporate OKRs cascade into department KPIs and individual employee commitments." },
        { name: "Formula & Metric Resolution", desc: "Dynamic mathematical computation of performance achievement against complex weighted formulas." },
        { name: "Multi-Tier Approval Engine", desc: "Flexible approval hierarchies with support for out-of-office delegation, role-based checks, and escalation paths." },
        { name: "Scheduled Processing & Caching", desc: "Background scheduled processing for evaluation cycle cutoffs, reminder triggers, and in-memory Caffeine caching." }
      ]
    }
  },
  {
    id: "recruitment",
    title: "Recruitment & Manpower Management System",
    category: "enterprise",
    categoryLabel: "QuGates Technologies • Talent Acquisition",
    badge: "Enterprise Flagship",
    icon: "users",
    summary: "End-to-end recruitment lifecycle and manpower budgeting engine managing organizational headcount, job profiles, applicant tracking, and hiring metrics.",
    features: [
      "Developed manpower planning, job profiles, job openings, candidate management, recruitment workflows, interviews, assessments, and hiring modules using Spring Boot, JPA, REST APIs, and MySQL.",
      "Implemented DTO validation, pagination, status-based workflows, recruitment reporting, and cost-per-hire analysis."
    ],
    techStack: ["Spring Boot", "Spring Data JPA", "REST APIs", "DTO Validation", "MySQL", "Pagination & Sorting"],
    specs: {
      overview: "Comprehensive human capital planning system enabling leadership to budget headcount, open requisition tickets, process candidate pipelines, and track recruitment velocity.",
      architecture: "Layered Spring Boot REST architecture with custom DTO validators, JPA pagination/sorting, and MySQL persistence.",
      modules: [
        { name: "Manpower Budgeting", desc: "Enforces department-level headcount limits and budgetary approvals before requisitions open." },
        { name: "Candidate Pipeline Tracker", desc: "Multi-stage pipeline tracking applicants from initial screening through panel interviews to offer rollout." },
        { name: "Decoupled REST Services", desc: "Robust API layer with comprehensive error handling, Bean validation, and paginated responses." },
        { name: "Recruitment Intelligence", desc: "Automated calculations for cost-per-hire, channel conversion rates, and time-to-fill analytics." }
      ]
    }
  },
  {
    id: "incentive",
    title: "Incentive Management System",
    category: "enterprise",
    categoryLabel: "QuGates Technologies • Incentive Management",
    badge: "Enterprise Flagship",
    icon: "coins",
    summary: "Enterprise incentive management platform handling incentive plans, employee assignments, target calculations, payout processing, and payroll reconciliation.",
    features: [
      "Developed incentive structures, plans, employee assignments, targets, formulas, calculations, distributions, and payout modules using Java, Spring Boot, JPA, REST APIs, and MySQL.",
      "Worked on incentive ledger processing, scheduled synchronization, validation, audit handling, metric resolution, and payroll reconciliation."
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "MySQL",
      "Scheduled Processing",
      "Audit Handling"
    ],
    specs: {
      overview: "Enterprise incentive platform handling incentive plans, target calculations, payout processing, and scheduled reconciliation with payroll processing.",
      architecture: "Spring Boot service layer with JPA persistence, scheduled synchronization routines, audit handling, and MySQL database.",
      modules: [
        {
          name: "Incentive Plans & Calculations",
          desc: "Configurable incentive structures supporting target-based calculations and payout processing."
        },
        {
          name: "Incentive Ledger Processing",
          desc: "Structured ledger processing for incentive calculations, adjustments, and approved payout records."
        },
        {
          name: "Audit Trail",
          desc: "Audit handling for incentive processing, calculation changes, adjustments, and approvals."
        },
        {
          name: "Payroll Reconciliation",
          desc: "Scheduled synchronization and reconciliation of approved incentive payouts with payroll processing."
        }
      ]
    }
  },
  {
    id: "cmp",
    title: "Course Registry Portal",
    category: "fullstack",
    categoryLabel: "Academic & Open Source",
    badge: "Full Stack",
    image: "asset/cmp.png",
    icon: "graduation-cap",
    summary: "Full-stack course management platform built with Spring Boot and PostgreSQL, featuring student enrollment, cataloging, and admin CRUD controls.",
    features: [
      "REST API architecture with clean service-repository separation.",
      "Student enrollment workflows and real-time seat availability.",
      "Administrative dashboard for course catalog management."
    ],
    techStack: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Harish-1306/Course-management-Portal"
  },
  {
    id: "bms",
    title: "Bank Management System",
    category: "core",
    categoryLabel: "Core Java • OOP Architecture",
    badge: "Core Java",
    image: "asset/Bank Management.png",
    icon: "building-columns",
    summary: "Object-oriented Java application modeling core banking transactions: account creation, transaction logs, PIN validation, and balance ledgers.",
    features: [
      "Strict OOP encapsulation, inheritance hierarchies, and custom exceptions.",
      "Transaction audit history, balance computation, and withdrawal locks.",
      "Interactive command-line user interface."
    ],
    techStack: ["Core Java", "OOP Design", "Exception Handling", "Collections Framework"],
    github: "https://github.com/Harish-1306/Bank_management_System"
  },
  {
    id: "glove",
    title: "Smart Glove for Patients",
    category: "core",
    categoryLabel: "Hardware & Assistive Tech",
    badge: "IoT & Embedded",
    image: "asset/smart glove.webp",
    icon: "hand",
    summary: "Wearable assistive device utilizing Arduino UNO, Raspberry Pi Pico, and flex sensors to translate sign gestures into audible speech and visual text.",
    features: [
      "Sensor calibration algorithm for real-time finger flexure recognition.",
      "Dual language output: English and Tamil speech synthesis with LCD display.",
      "Portable and lightweight circuit architecture."
    ],
    techStack: ["Embedded C", "Arduino UNO", "Raspberry Pi Pico", "Flex Sensors", "Hardware"]
  }
];

export const skillCategories = [
  {
    title: "Backend Engineering",
    icon: "server",
    badge: "Core Stack",
    skills: [
      { name: "Spring Boot", featured: true },
      { name: "Spring Data JPA", featured: true },
      { name: "Hibernate ORM", featured: true },
      { name: "REST APIs", featured: true },
      { name: "OpenFeign", featured: true },
      { name: "API Integration", featured: false }
    ]
  },
  {
    title: "Programming Languages",
    icon: "code",
    badge: "Languages",
    skills: [
      { name: "Java (Core & Advanced)", featured: true },
      { name: "SQL", featured: true },
      { name: "JavaScript (ES6+)", featured: true }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "desktop",
    badge: "UI Layer",
    skills: [
      { name: "React", featured: true },
      { name: "HTML5", featured: true },
      { name: "CSS3", featured: true }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "database",
    badge: "Data Layer",
    skills: [
      { name: "MySQL", featured: true },
      { name: "PostgreSQL", featured: true }
    ]
  },
  {
    title: "Core & Enterprise Logic",
    icon: "gears",
    badge: "Domain Logic",
    skills: [
      { name: "Business Logic", featured: true },
      { name: "Workflow & Approval Systems", featured: true },
      { name: "Authentication & Authorization", featured: true },
      { name: "DTO Validation", featured: false },
      { name: "Pagination & Sorting", featured: false },
      { name: "Scheduled Processing", featured: false },
      { name: "Caching", featured: false }
    ]
  },
  {
    title: "Developer Tools",
    icon: "screwdriver-wrench",
    badge: "Tooling",
    skills: [
      { name: "Git Version Control", featured: true },
      { name: "GitHub", featured: true },
      { name: "IntelliJ IDEA", featured: true },
      { name: "VS Code", featured: false },
      { name: "Postman API Client", featured: false }
    ]
  }
];

export const educationList = [
  {
    degree: "B.E. in Electronics & Communication Engineering",
    institution: "Government College of Engineering, Dharmapuri",
    period: "2021 – 2025",
    grade: "CGPA: 7.52 / 10.0",
    desc: "Rigorous coursework in algorithms, computer networks, microprocessor systems, and software engineering. Served as Team Lead responsible for task coordination and delivery."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Jayam Vidhyalaya Matric Higher Secondary School, Dodampatty",
    period: "2020 – 2021",
    grade: "Percentage: 91.5%",
    desc: "Major in Mathematics, Physics, Chemistry, and Computer Science with high academic standing."
  }
];

export const certifications = [
  {
    title: "Java Full Stack Certification",
    institution: "JSpiders, Marathahalli, Bangalore",
    period: "2025",
    grade: "Certified Full Stack",
    desc: "Comprehensive full-time training in Core Java, Collections, Multithreading, Spring Boot, Hibernate ORM, SQL database architecture, and REST API development."
  },
  {
    title: "Embedded Systems Certification",
    institution: "Vector India, Chennai",
    period: "Summer 2024",
    grade: "Completed",
    desc: "Practical training and development with Embedded C, microcontrollers, IoT sensor integration, circuit design, and hardware-software communication protocols."
  }
];
