import './App.css'
import Projects from './components/Projects'
import logo from './assets/logo.png'

const skills = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Next.js',
  'React',
  'Node.js',
  'Express.js',
  'Supabase',
  'MongoDB',
  'SQL',
  'REST APIs',
  'DevOps',
  'Google Cloud Platform (GCP)',
  'Docker',
  'CI/CD',
  'Git',
  'n8n',
  'Hugging Face',
  'Machine Learning',
  'XGBoost',
  'scikit-learn',
  'pandas',
  'NumPy',
  'Automation',
]

const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'AI Sales Dr Pte. Ltd.',
    location: 'Singapore (Remote)',
    dates: 'Feb 2026 - May 2026',
    points: [
      'Engineered and maintained scalable full-stack web applications using JavaScript/TypeScript, Next.js, and Node.js.',
      'Designed and integrated robust REST APIs between backend services and Supabase, ensuring data consistency and strong validation.',
      'Orchestrated and deployed backend infrastructure on Google Cloud Platform (GCP), utilizing Docker and establishing automated CI/CD pipelines.',
      'Implemented complex workflow automations using n8n to streamline business processes and optimize backend logic.',
    ],
  },
  {
    role: 'Information Technology Intern',
    company: 'British Management University',
    location: 'Tashkent, Uzbekistan',
    dates: 'Mar 2022 - Jul 2022',
    points: [
      'Developed and managed university web infrastructure using WordPress, improving global site performance and accessibility.',
      'Diagnosed and resolved hardware/software technical disruptions for faculty, ensuring continuous operational uptime.',
    ],
  },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="container" aria-label="Primary navigation">
          <a className="logo-link" href="#about" aria-label="Husan Boymurodov home">
            <img src={logo} alt="HB Logo" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <h1>Hi, I am Husan Boymurodov</h1>
          <p className="tagline">I am a Software Engineer.</p>
          
          <div className="section-copy" style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
            <p>
              I am a final-year Computer Science student at Universiti Malaya specializing in backend systems and 
              full-stack development. I build scalable applications using TypeScript, Next.js, Node.js, and 
              Google Cloud Platform (GCP).
            </p>
            <p>
              Recently, as a Software Engineer Intern at AI Sales Dr, I engineered production APIs, managed cloud 
              infrastructure on GCP, and automated complex workflows with n8n to optimize business processes.
            </p>
            <p>
              I focus on building efficient, high-performance systems and am currently seeking software engineering 
              roles where I can contribute to impactful, well-engineered solutions.
            </p>
          </div>

          <div className="hero-actions">
            <a href="https://github.com/husanboymurodov" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
            <a href="https://www.linkedin.com/in/husanboymurodov/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">Get Resume</a>
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
          <p>&copy; {new Date().getFullYear()} Husan Boymurodov.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
