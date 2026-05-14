import './App.css'
import Projects from './components/Projects'
import profileImg from './assets/profile.jpg'

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
  'Automation',
]

const softSkills = [
  'Leadership',
  'Project Management',
  'Public Speaking',
  'Technical Mentoring',
  'Problem Solving',
  'Collaborative Teamwork',
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
      'Volunteered at administrative meetings on IT and communications, providing technical insights for institutional planning.',
      'Provided multimedia support for faculty, including setup and troubleshooting of laptops, printers, and presentation devices.',
    ],
  },
]

const volunteering = [
  {
    role: 'Student Facilitator',
    organization: '“El-Yurt Umidi” Foundation',
    location: 'Tashkent, Uzbekistan',
    dates: 'Sep 2025',
    description: 'Assisted in welcoming and orienting newly awarded scholarship recipients. Facilitated registration, guided introductory sessions, and ensured smooth logistical communication between staff and participants.',
  },
  {
    role: 'Mini Incubator Program Participant',
    organization: 'Shine Club INCEIF',
    location: 'Kuala Lumpur, Malaysia',
    dates: 'Oct 2024 - Dec 2024',
    description: 'Completed an intensive program on the startup ecosystem and venture capital. Gained practical exposure to early-stage financing, market validation, and investment strategy through expert-led workshops.',
  },
  {
    role: 'Multimedia & Technology Volunteer',
    organization: 'UMISA (UM International Students\' Association)',
    location: 'Kuala Lumpur, Malaysia',
    dates: 'Oct 2024',
    description: 'Supported the Multimedia and Technology department during the "Walking Tales" orientation event, helping first-year international students adapt to the university environment.',
  },
  {
    role: 'Technical Support Volunteer',
    organization: 'British Management University (Various Events)',
    location: 'Tashkent, Uzbekistan',
    dates: 'Apr 2022 - Jun 2022',
    description: 'Provided help desk and technical assistance for major international events including the Digital Inclusiveness Seminar (Jeonbuk National University/KOICA), BMU Model United Nations, Career Day (supporting Beeline, Deloitte, Artel), and the WAGE Program.',
  },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="container" aria-label="Primary navigation">
          <a className="logo" href="#about" aria-label="Husan Boymurodov home">HB</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#volunteering">Volunteering</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="about">
          <div className="about-content">
            <div className="about-text">
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
                  Beyond engineering, I have demonstrated leadership by coordinating multiple academic courses, 
                  facilitating technical sessions and mentoring peers.
                </p>
                <p>
                  I focus on building efficient, high-performance systems and am currently seeking software engineering 
                  roles where I can contribute to impactful, well-engineered solutions.
                </p>
              </div>

              <div className="about-actions">
                <a href="https://github.com/husanboymurodov" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
                <a href="https://www.linkedin.com/in/husanboymurodov/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
                <a href="https://t.me/HusanBoymurodov" target="_blank" rel="noopener noreferrer" className="btn-secondary">Telegram</a>
                <a href="https://wa.me/601161337608" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">Get Resume</a>
              </div>
            </div>
            
            <div className="about-image-container">
              <img src={profileImg} alt="Husan Boymurodov" className="about-image" />
            </div>
          </div>
        </section>

        <section id="education">
          <p className="section-label">Education</p>
          <h2>Academic Journey</h2>
          
          <div className="education-timeline">
            {/* University of Malaya */}
            <div className="education-item section-grid">
              <div>
                <h3>University of Malaya</h3>
                <div className="ranking-badge">
                  <div className="ranking-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 5 1-11L3 11l5 2z"/></svg>
                  </div>
                  <div className="ranking-info">
                    <span className="rank-value">#58 Worldwide</span>
                    <span className="rank-source">QS World Rankings 2026</span>
                  </div>
                </div>
                <div className="scholarship-tag">
                  <span className="star-icon">★</span>
                  <span>EYUF Scholarship Holder</span>
                </div>
              </div>
              <div className="education-card">
                <div className="education-card-header">
                  <h4>Bachelor of Computer Science, Information Systems</h4>
                  <span>2023 - 2026</span>
                </div>
                <p className="education-grade">Current CGPA: 3.26 / 4.00</p>
                <ul>
                  <li><strong>El-Yurt Umidi Foundation (EYUF) Scholar</strong>: Awarded a prestigious full scholarship for undergraduate studies abroad.</li>
                  <li>Data Science Digital Race participant, focused on ML model development and feature engineering.</li>
                  <li>Gold medalist, 2025 MIQ Championship Taekwondo Sparring, Lightweight 18-35 category.</li>
                </ul>
              </div>
            </div>

            {/* BMU */}
            <div className="education-item section-grid" style={{ marginTop: '2rem' }}>
              <div>
                <h3>British Management University</h3>
                <div className="scholarship-tag">
                  <span className="star-icon">★</span>
                  <span>Full Scholarship</span>
                </div>
              </div>
              <div className="education-card">
                <div className="education-card-header">
                  <h4>Information Technology</h4>
                  <span>2021 - 2022</span>
                </div>
                <ul>
                  <li><strong>Full Scholarship</strong>: Awarded a maximum merit-based scholarship (50%) combined with a full need-based scholarship for the remaining portion.</li>
                  <li><strong>Silver Medalist</strong>: Recognized for outstanding academic performance during the first academic year.</li>
                </ul>
              </div>
            </div>

            {/* Presidential School */}
            <div className="education-item section-grid" style={{ marginTop: '2rem' }}>
              <div>
                <h3>Presidential School in Tashkent</h3>
                <div className="scholarship-tag" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-color)', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
                  <span className="star-icon">★</span>
                  <span>Silver Medalist</span>
                </div>
              </div>
              <div className="education-card">
                <div className="education-card-header">
                  <h4>High School Diploma, AS & A Levels</h4>
                  <span>2019 - 2021</span>
                </div>
                <p className="education-grade">Grade: 5.0 / 5.0</p>
                <ul>
                  <li><strong>Pioneer Graduate</strong>: One of the first graduates of the prestigious Presidential School in Tashkent.</li>
                  <li><strong>STEAM Curriculum</strong>: Intensive study of Science, Technology, Engineering, Arts, and Mathematics following Cambridge standards.</li>
                  <li><strong>Silver Medalist</strong>: Awarded a Silver Medal upon graduation for exceptional academic achievement.</li>
                  <li>Journalism Club Volunteer: Contributed to school publications and media activities.</li>
                </ul>
              </div>
            </div>
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

        <section id="volunteering">
          <p className="section-label">Volunteering & Leadership</p>
          <h2>Community Involvement</h2>
          <div className="volunteering-grid">
            {volunteering.map((item) => (
              <div className="volunteer-card" key={`${item.role}-${item.organization}`}>
                <div className="volunteer-header">
                  <h3>{item.role}</h3>
                  <span className="volunteer-dates">{item.dates}</span>
                </div>
                <p className="volunteer-org">{item.organization} | {item.location}</p>
                <p className="volunteer-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <p className="section-label">Technical Skills</p>
          <h2>Tools and Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>{skill}</span>
            ))}
          </div>

          <p className="section-label" style={{ marginTop: '3rem' }}>Core Strengths</p>
          <h2>Soft Skills</h2>
          <div className="skills-grid">
            {softSkills.map((skill) => (
              <span className="skill-chip" key={skill}>{skill}</span>
            ))}
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
            <a href="mailto:husayin2003@gmail.com">Email</a>
            <a href="tel:+601161337608">Phone</a>
            <a href="https://wa.me/601161337608" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.linkedin.com/in/husanboymurodov/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/husanboymurodov" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://t.me/HusanBoymurodov" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Husan Boymurodov</p>
        </div>
      </footer>
    </div>
  )
}

export default App
