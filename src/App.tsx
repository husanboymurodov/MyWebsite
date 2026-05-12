import './App.css'
import Projects from './components/Projects'
import logo from './assets/logo.png'

const skills = [
  'Python',
  'TypeScript',
  'Node.js',
  'React',
  'REST APIs',
  'Supabase',
  'MongoDB',
  'SQL',
  'scikit-learn',
  'pandas',
  'NumPy',
  'Git',
  'GCP',
  'CI/CD',
  'n8n',
  'Tableau',
  'Power BI',
]

const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'AI Sales DR',
    location: 'Kuala Lumpur, Malaysia',
    dates: 'Feb 2026 - May 2026',
    points: [
      'Built production frontend and backend features with TypeScript and Python for a web application environment.',
      'Improved backend automation workflows in n8n by restructuring logic nodes and removing redundant API calls.',
      'Enhanced API integrations between backend services and Supabase with stronger validation and data consistency.',
      'Resolved application bugs and regressions while supporting Git, GCP, staging, and deployment workflows.',
    ],
  },
  {
    role: 'Information Technology Intern',
    company: 'British Management University',
    location: 'Tashkent, Uzbekistan',
    dates: 'Mar 2022 - Jul 2022',
    points: [
      'Managed WordPress-based web infrastructure and improved usability for university web operations.',
      'Diagnosed software and hardware issues for faculty and staff, reducing day-to-day technical disruptions.',
    ],
  },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="container" aria-label="Primary navigation">
          <a className="logo-link" href="#hero" aria-label="Husan Boymurodov home">
            <img src={logo} alt="HB Logo" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <p className="eyebrow">Available for internship and junior software engineering roles from May 2026</p>
          <h1>Husan Boymurodov</h1>
          <p className="tagline">
            Computer Science student and software engineer intern building full-stack web applications,
            backend automation, API integrations, and machine learning solutions.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href="#projects" className="btn-secondary">View Projects</a>
          </div>
          <dl className="hero-stats" aria-label="Profile highlights">
            <div>
              <dt>Degree</dt>
              <dd>Bachelor of Computer Science</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Information Systems</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Kuala Lumpur, Malaysia</dd>
            </div>
          </dl>
        </section>

        <section id="about" className="section-grid">
          <div>
            <p className="section-label">Profile</p>
            <h2>Software engineering with data and automation depth</h2>
          </div>
          <div className="section-copy">
            <p>
              I am a Computer Science student at the University of Malaya with hands-on internship
              experience across production web features, backend workflow automation, API integrations,
              database-backed applications, and applied machine learning projects.
            </p>
            <p>
              My current focus is full-stack development using TypeScript, Python, Node.js, React,
              Supabase, MongoDB, and cloud deployment workflows.
            </p>
          </div>
        </section>

        <section id="experience">
          <p className="section-label">Experience</p>
          <h2>Professional Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <div className="timeline-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company} | {item.location}</p>
                  </div>
                  <span>{item.dates}</span>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <p className="section-label">Projects</p>
          <h2>Selected Projects</h2>
          <Projects />
        </section>

        <section id="skills">
          <p className="section-label">Technical Skills</p>
          <h2>Tools and Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="education" className="section-grid">
          <div>
            <p className="section-label">Education</p>
            <h2>University of Malaya</h2>
          </div>
          <div className="education-card">
            <h3>Bachelor of Computer Science, Information Systems</h3>
            <p>2023 - 2026 | CGPA: 3.26 / 4.00</p>
            <ul>
              <li>Data Science Digital Race participant, focused on ML model development and feature engineering.</li>
              <li>Gold medalist, 2025 MIQ Championship Taekwondo Sparring, Lightweight 18-35 category.</li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <p className="section-label">Contact</p>
          <h2>Get In Touch</h2>
          <p className="contact-intro">
            Open to software engineering internships, full-stack development roles, data projects,
            and automation work from May 2026.
          </p>
          <div className="contact-links">
            <a href="mailto:s2175387@siswa.um.edu.my">University Email</a>
            <a href="mailto:husayin2003@gmail.com">Personal Email</a>
            <a href="tel:+601161337608">Phone</a>
            <a href="https://www.linkedin.com/in/husanboymurodov/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/husanboymurodov" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Husan Boymurodov. Built with React and TypeScript.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
