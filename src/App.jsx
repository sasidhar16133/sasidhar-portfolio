import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpen, Briefcase, Database, Mail, Shield, Sparkles, Phone, X } from "lucide-react";

const metrics = [
  { value: "4,500+", label: "Enterprise tenants" },
  { value: "100M+", label: "Records processed annually" },
  { value: "3.5 mos", label: "Time-to-market reduced" },
  { value: "80%", label: "Client migration enabled" },
];

const focusAreas = [
  {
    icon: Shield,
    title: "Identity & Authentication",
    text: "IAM, SSO, passwordless login, session flows, governance, and secure enterprise access experiences.",
  },
  {
    icon: Database,
    title: "Data Management Systems",
    text: "DMS, metadata discovery, document processing, classification, secure ingestion, and governance-aware data flows.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Platforms",
    text: "Platform capabilities across APIs, integrations, compliance, cloud infrastructure, and scalable SaaS foundations.",
  },
  {
    icon: Sparkles,
    title: "FinTech & Analytics",
    text: "Banking and wealth platforms, churn analytics, pricing strategy, and data-led decision systems.",
  },
];

const experience = [
  {
    role: "Product Manager — Platform, Identity & Data Systems",
    company: "iCIMS",
    companyLogo: "/logos/companies/icims.png",
    period: "Aug 2025 – Present",
    points: [
      "Own product areas spanning IAM, authentication, DMS, document and metadata flows, and enterprise platform capabilities.",
      "Improved login success by 25% and reduced friction by 40% through authentication and access experience improvements.",
      "Led platform improvements across metadata extraction and data systems processing 100M+ records annually.",
      "Built privacy, consent, and compliance-aware controls aligned with GDPR, CCPA, and CPRA frameworks.",
    ],
  },
  {
    role: "Full Stack Developer → Product Owner — Banking & Wealth Platforms",
    company: "Virtusa / Citi",
    companyLogo: "/logos/companies/virtusa.jpeg",
    secondaryLogo: "/logos/companies/citi.jpg",
    period: "May 2022 – Apr 2024",
    points: [
      "Started as a Full Stack Developer building banking workflows and later transitioned into Product Owner responsibilities.",
      "Worked on banking and wealth management products spanning payments, transaction workflows, and omnichannel platform experiences.",
      "Helped unify regional platforms into a global ecosystem, improving migration, operational efficiency, and UX consistency.",
      "Reduced time-to-market by 3.5 months and delivered significant cost savings through workflow and platform optimization.",
    ],
  },
];

const projects = [
  {
    title: "Identity & Data Platform",
    tag: "Flagship · iCIMS",
    text: "Enterprise product work spanning authentication, DMS, metadata extraction, document processing, governance, and scalable platform architecture.",
    image: "/images/projects/identity-data-platform.png",
    chips: ["IAM", "DMS", "Governance", "Metadata"],
    problem: "Enterprise hiring platforms faced fragmented authentication, inconsistent data governance, and scalability challenges across millions of users.",
    insight: "Improving authentication reliability and structuring enterprise data pipelines would directly impact adoption, compliance, and operational efficiency.",
    solution: "Led development of passwordless authentication, SSO, and scalable data systems including DMS, metadata extraction, and governance-aware workflows.",
    impact: [
      "Improved login success rate by 25%",
      "Reduced authentication friction by 40%",
      "Processed 100M+ records annually",
      "Strengthened GDPR and CCPA aligned data governance",
    ],
  },
  {
    title: "Banking & Wealth Platform Transformation",
    tag: "FinTech",
    text: "Built and improved banking and wealth experiences across payments, workflow automation, migration, and customer-facing transaction journeys.",
    image: "/images/projects/banking-wealth-platform.png",
    chips: ["Payments", "Migration", "UX", "Automation"],
    problem: "Legacy banking systems created fragmented journeys across payments, transactions, and wealth workflows.",
    insight: "Unifying workflows and improving system interoperability could significantly improve user experience and reduce operational inefficiencies.",
    solution: "Worked across full-stack development and product ownership to improve transaction flows, support migration, and standardize user journeys.",
    impact: [
      "Reduced time-to-market by 3.5 months",
      "Improved transaction efficiency and UX consistency",
      "Supported scalable migration to a unified platform architecture",
    ],
  },
  {
    title: "Telecom Churn Prediction",
    tag: "ML / Retention",
    text: "Built a churn prediction and retention strategy lens focused on high-value users, lifecycle signals, and proactive intervention opportunities.",
    image: "/images/projects/telecom-churn.png",
    chips: ["ML", "Retention", "Segmentation", "Analytics"],
    problem: "High customer churn impacted revenue, with limited visibility into early churn signals.",
    insight: "Behavioral patterns and lifecycle signals could predict churn early enough to support proactive retention actions.",
    solution: "Built ML-based churn analysis and segmented users by risk to support targeted retention planning.",
    impact: [
      "Achieved 85% model accuracy",
      "Improved retention decision-making",
      "Enabled proactive lifecycle management",
    ],
  },
  {
    title: "Airbnb Revenue Optimization",
    tag: "Marketplace / Pricing",
    text: "Analyzed demand, room-type, neighborhood, and pricing patterns to inform acquisition, UX, and supply strategy for NYC listings.",
    image: "/images/projects/airbnb-optimization.png",
    chips: ["Marketplace", "Pricing", "Demand", "UX"],
    problem: "Hosts and operators lacked pricing intelligence across neighborhoods, room types, and demand patterns.",
    insight: "Pricing inefficiencies and neighborhood-level differences directly affected occupancy and revenue potential.",
    solution: "Analyzed listing demand, pricing trends, room-type preferences, and location dynamics to recommend optimization opportunities.",
    impact: [
      "Improved revenue optimization thinking",
      "Identified high-performing neighborhoods and pricing bands",
      "Enabled data-driven supply and pricing decisions",
    ],
  },
  {
    title: "Stock Portfolio Optimization",
    tag: "Finance / Analytics",
    text: "Evaluated sector-level risk-return profiles and built investor-specific portfolio recommendations benchmarked against the S&P 500.",
    image: "/images/projects/stock-portfolio.png",
    chips: ["Finance", "Risk", "Returns", "Portfolio"],
    problem: "Investors lacked structured insights to balance risk and returns across sectors and time horizons.",
    insight: "Combining risk-return metrics with benchmark comparisons could improve portfolio decision-making quality.",
    solution: "Built analytical models and dashboards to evaluate stock performance and construct investor-specific portfolios.",
    impact: [
      "Improved portfolio performance by 12%",
      "Benchmarked portfolios against the S&P 500",
      "Enabled more data-driven investment strategies",
    ],
  },
];

const skillGroups = [
  {
    title: "Product",
    skills: ["Product Strategy", "Roadmapping", "GTM", "Experimentation", "Wireframing"],
  },
  {
    title: "Platform",
    skills: ["IAM", "Authentication", "DMS", "APIs & Integrations", "Enterprise SaaS"],
  },
];

const toolGroups = [
  {
    title: "Tech",
    tools: [
      { name: "AWS", icon: "/logos/tools/aws.png" },
      { name: "SQL", icon: "/logos/tools/mysql.png" },
      { name: "Java", icon: "/logos/tools/java.webp" },
      { name: "C/C++", icon: "/logos/tools/cpp.png" },
      { name: "React", icon: "/logos/tools/react.png" },
      { name: "Spring Boot", icon: "/logos/tools/springboot.png" },
    ],
  },
  {
    title: "AI / Data",
    tools: [
      { name: "Machine Learning", icon: "/logos/tools/ml.jpg" },
      { name: "Python", icon: "/logos/tools/python.jpeg" },
      { name: "NLP", icon: "/logos/tools/nlp.gif" },
      { name: "Analytics", icon: "/logos/tools/analytics.webp" },
    ],
  },
];

const certifications = [
  { name: "Enterprise Product Management Fundamentals — Microsoft", logo: "/logos/certifications/microsoft.png" },
  { name: "Database Management Essentials — University of Colorado System", logo: "/logos/certifications/colorado.jpeg" },
  { name: "Software Development Processes and Methodologies — University of Minnesota", logo: "/logos/certifications/minnesota.webp" },
  { name: "Oracle Certified Associate, Java SE 8 Programmer", logo: "/logos/certifications/oracle.png" },
  { name: "Angular Certification L1 / Junior Angular Developer", logo: "/logos/certifications/angular.svg" },
];

const education = [
  { school: "Indian School of Business", logo: "/logos/education/isb.jpeg", detail: "PGP in Management" },
  { school: "IIIT Bangalore", logo: "/logos/education/iiitb.png", detail: "Executive Program in Data Science" },
  { school: "GITAM", logo: "/logos/education/gitam.jpeg", detail: "B.Tech in Computer Science" },
];

const publication = {
  title: "Using Decision Trees to Predict Concrete Compressive Strength",
  subtitle: "Published in IJIEMR",
  text: "Applied machine learning techniques to analyze 1,000+ concrete mix samples for strength prediction, demonstrating analytical rigor and research depth.",
};

const achievements = [
  "Spot Award — Top 10 out of 10,000 employees",
  "Gem Award — Q2 FY24",
];

function AnimatedBackground() {
  return (
    <div className="ambient-bg">
      <motion.div className="orb orb-a" animate={{ x: [0, 40, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="orb orb-b" animate={{ x: [0, -30, 0], y: [0, 25, 0], scale: [1, 1.05, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="orb orb-c" animate={{ x: [0, -20, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <div className="bg-gradient" />
      <div className="bg-grid" />
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className="project-visual">
      <img src={project.image} alt={project.title} />
      <div className="project-visual-overlay" />
    </div>
  );
}

function StoryBlock({ title, children }) {
  return (
    <div className="story-block">
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}

function FloatingProfileBackground() {
  return (
    <div className="profile-ambient">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`profile-dot ${i % 3 === 0 ? "cyan" : i % 3 === 1 ? "sky" : "violet"}`}
          initial={{ x: 20 + (i * 26) % 220, y: 18 + (i * 19) % 140 }}
          animate={{
            x: [20 + (i * 26) % 220, 35 + (i * 31) % 220, 15 + (i * 24) % 220, 20 + (i * 26) % 220],
            y: [18 + (i * 19) % 140, 30 + (i * 23) % 140, 12 + (i * 17) % 140, 18 + (i * 19) % 140],
            opacity: [0.25, 0.85, 0.4, 0.25],
          }}
          transition={{ duration: 7 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.22 }}
        />
      ))}
      <svg className="profile-lines" viewBox="0 0 320 220" fill="none">
        <path d="M38 40 C80 64, 120 54, 152 94" stroke="rgba(103,232,249,0.22)" strokeWidth="1" />
        <path d="M92 148 C126 128, 170 122, 216 154" stroke="rgba(167,139,250,0.18)" strokeWidth="1" />
        <path d="M206 54 C236 78, 256 98, 286 118" stroke="rgba(56,189,248,0.18)" strokeWidth="1" />
      </svg>
      <motion.div className="profile-glow glow-a" animate={{ x: [0, 18, 0], y: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="profile-glow glow-b" animate={{ x: [0, -12, 0], y: [0, 14, 0], opacity: [0.22, 0.4, 0.22] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const typingWords = ["Product Manager", "Platform PM", "Identity & Data PM", "Enterprise SaaS PM"];
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const isComplete = typedText === currentWord;
    const isEmpty = typedText === "";

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (!isComplete) setTypedText(currentWord.slice(0, typedText.length + 1));
        else setIsDeleting(true);
      } else {
        if (!isEmpty) setTypedText(currentWord.slice(0, typedText.length - 1));
        else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, isDeleting ? 45 : isComplete ? 1200 : 90);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <div className="page-shell">
      <AnimatedBackground />
      <div className="page-content">
        <nav className="top-nav">
          <div>
            <div className="brand">A V Sasidhar</div>
            <div className="brand-sub">Product Manager Portfolio</div>
          </div>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#credentials">Credentials</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-card">
          <div className="hero-grid">
            <div>
              <div className="typing-pill">
                <span>{typedText}</span>
                <span className="typing-caret" />
              </div>
              <h1>Building enterprise identity, data, and platform systems with measurable business impact.</h1>
              <p className="hero-copy">
                Product Manager with experience across HRTech and FinTech, focused on IAM, DMS, enterprise platform capabilities,
                and analytics-led product thinking. I work at the intersection of user experience, technical depth, and business outcomes.
              </p>
              <div className="hero-actions">
                <a href="https://www.linkedin.com/in/sasidhar-ayalavarapu-729116173/" target="_blank" rel="noreferrer" className="btn btn-primary">
                  View LinkedIn <ArrowUpRight size={16} />
                </a>
                <a href="https://drive.google.com/file/d/1i5QQAp83_pdPmfh_WFDJhY4DsCN6N4vv/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  Open Resume <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="snapshot-card">
              <FloatingProfileBackground />
              <div className="snapshot-header">
                <div className="profile-photo-wrap">
                  <div className="profile-photo-glow" />
                  <img src="/images/profile/profile.png" alt="A V Sasidhar" className="profile-photo" />
                </div>
                <div>
                  <div className="profile-name">A V Sasidhar</div>
                  <div className="profile-sub">Platform, Identity & Data Systems</div>
                </div>
              </div>
              <div className="eyebrow">Quick Snapshot</div>
              <div className="snapshot-list">
                {[
                  ["Current role", "Platform, Identity & Data Systems at iCIMS"],
                  ["Prior domain", "Banking & Wealth Management Platforms"],
                  ["Strengths", "IAM, DMS, Enterprise SaaS, FinTech, Analytics"],
                  ["Contact", "davsasidhar@gmail.com | 7702489741"],
                ].map(([label, value]) => (
                  <div key={label} className="snapshot-item">
                    <div className="snapshot-label">{label}</div>
                    <div className="snapshot-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-grid">
          {metrics.map((metric) => (
            <motion.div key={metric.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </motion.div>
          ))}
        </section>

        <section className="content-section">
          <SectionTitle eyebrow="What I Build" title="Core areas of work" subtitle="Positioned around the capabilities that differentiate my profile most strongly: identity, data systems, platform thinking, and analytics-led problem solving." />
          <div className="focus-grid">
            {focusAreas.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="focus-card">
                  <div className="focus-icon"><Icon size={20} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="experience" className="stack-section">
          <SectionTitle eyebrow="Experience" title="Professional journey" />
          <div className="stack">
            {experience.map((item) => (
              <div key={item.role} className="panel-card">
                <div className="job-head">
                  <div>
                    <h3>{item.role}</h3>
                    <div className="company-row">
                      <img src={item.companyLogo} alt={item.company} className="mini-logo" />
                      <span>{item.company}</span>
                      {item.secondaryLogo ? <img src={item.secondaryLogo} alt="secondary company" className="mini-logo secondary" /> : null}
                    </div>
                  </div>
                  <div className="pill">{item.period}</div>
                </div>
                <ul className="bullet-list">
                  {item.points.map((point) => (
                    <li key={point}><span className="dot" /> <span>{point}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="stack-section tight-top">
          <SectionTitle eyebrow="Selected Projects" title="Case-study led portfolio" />
          <div className="stack">
            {projects.map((project) => (
              <button key={project.title} type="button" onClick={() => setActiveProject(project)} className="project-card">
                <div className="project-grid">
                  <div className="project-image-wrap">
                    <ProjectVisual project={project} />
                  </div>
                  <div className="project-copy">
                    <div className="tag">{project.tag}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-text">{project.text}</p>
                    <div className="chip-row">
                      {project.chips.map((chip) => (
                        <span key={chip} className="chip">{chip}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="stack-section tight-top">
          <SectionTitle eyebrow="Publications" title="Research & publications" />
          <div className="publication-card">
            <h3>{publication.title}</h3>
            <div className="publication-subtitle">{publication.subtitle}</div>
            <p>{publication.text}</p>
          </div>
        </section>

        <section id="skills" className="skills-credentials">
          <div className="tools-panel">
            <SectionTitle eyebrow="Skills" title="Tools & capabilities" />
            <div className="stack compact">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <div className="group-title">{group.title}</div>
                  <div className="chip-row">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-chip">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
              {toolGroups.map((group) => (
                <div key={group.title} className="tool-group">
                  <div className="tool-group-title">{group.title}</div>
                  <div className="tool-grid">
                    {group.tools.map((tool) => (
                      <div key={tool.name} className="tool">
                        <img src={tool.icon} alt={tool.name} className="tool-icon" />
                        <span className="tool-name">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="credentials" className="panel-card panel-accent">
            <SectionTitle eyebrow="Credentials" title="Education, certifications & recognition" />
            <div className="credential-grid">
              <div className="sub-card center-card">
                <div className="sub-icon"><BookOpen size={20} /></div>
                <h3>Education</h3>
                <div className="education-list">
                  {education.map((item) => (
                    <div key={item.school} className="logo-row">
                      <img src={item.logo} alt={item.school} className="mini-logo big" />
                      <div>
                        <div className="logo-row-title">{item.school}</div>
                        <div className="logo-row-sub">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sub-card">
                <div className="sub-icon"><Award size={20} /></div>
                <h3>Achievements</h3>
                <ul className="achievement-list">
                  {achievements.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>

            <div className="sub-card wide">
              <div className="group-title">Certifications</div>
              <div className="cert-grid">
                {certifications.map((item) => (
                  <div key={item.name} className="cert-card">
                    <img src={item.logo} alt={item.name} className="cert-logo" />
                    <div>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AnimatePresence>
          {activeProject ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-backdrop" onClick={() => setActiveProject(null)}>
              <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }} transition={{ duration: 0.2 }} className="modal-card" onClick={(e) => e.stopPropagation()}>
                <div className="modal-close-row">
                  <button type="button" onClick={() => setActiveProject(null)} className="modal-close"><X size={22} /></button>
                </div>
                <div className="modal-inner">
                  <div className="modal-grid">
                    <div className="modal-image-wrap">
                      <ProjectVisual project={activeProject} />
                    </div>
                    <div className="modal-copy-wrap">
                      <div className="tag">{activeProject.tag}</div>
                      <h3 className="modal-title">{activeProject.title}</h3>
                      <div className="chip-row">
                        {activeProject.chips.map((chip) => (
                          <span key={chip} className="chip large">{chip}</span>
                        ))}
                      </div>
                      <StoryBlock title="Problem">{activeProject.problem}</StoryBlock>
                      <StoryBlock title="Insight">{activeProject.insight}</StoryBlock>
                      <StoryBlock title="Solution">{activeProject.solution}</StoryBlock>
                      <StoryBlock title="Impact">
                        <ul className="impact-list">
                          {activeProject.impact.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </StoryBlock>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <section id="contact" className="contact-section">
          <h2>Contact</h2>
          <div className="contact-list">
            <a href="mailto:davsasidhar@gmail.com"><Mail size={16} /> davsasidhar@gmail.com</a>
            <a href="tel:7702489741"><Phone size={16} /> 7702489741</a>
            <a href="https://www.linkedin.com/in/sasidhar-ayalavarapu-729116173/" target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> LinkedIn Profile</a>
          </div>
        </section>
      </div>
    </div>
  );
}