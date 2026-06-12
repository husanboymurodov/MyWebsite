import './App.css'
import Projects from './components/Projects'
import profileImg from './assets/profile.jpg'



const press = [
  {
    publication: 'El-Yurt Umidi Foundation',
    title: 'Uzbek Team Wins International Cultural Week at Universiti Malaya',
    date: 'Nov 5, 2025',
    url: 'https://t.me/elyurtumidifoundation/15058',
    language: 'Uzbek',
  },
  {
    publication: 'Spot.uz',
    title: 'Malayziyada o\'qish: Husan Boymurodovning tajribasi',
    date: 'Dec 31, 2023',
    url: 'https://www.spot.uz/oz/2023/12/31/study-in-malaysia/',
    language: 'Uzbek',
  },
]

const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'Artiselite Sdn. Bhd.',
    companyUrl: 'https://www.artiselite.net/',
    location: 'Kuala Lumpur, Malaysia',
    dates: 'May 2026 - Present',
    points: [
      'Building ITSM modules — incident management, service catalogue, approval workflows, and a self-service portal — on FastAPI, SvelteKit, and PostgreSQL',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'AI Sales Dr Pte. Ltd.',
    companyUrl: 'https://ai-sales-dr.co/',
    location: 'Kuala Lumpur, Malaysia',
    dates: 'Feb 2026 - May 2026',
    points: [
      'Owned the full-stack TypeScript/Next.js, Python/FastAPI, and Supabase/PostgreSQL codebase',
      'Assisted in optimizing n8n automation workflows',
    ],
  },
  {
    role: 'Information Technology Intern',
    company: 'British Management University',
    companyUrl: 'https://www.bmu-edu.uz/',
    location: 'Tashkent, Uzbekistan',
    dates: 'Mar 2022 - Jul 2022',
    points: [
      'Improved and maintained the university website using WordPress',
      'Volunteered at administrative meetings on IT and communications',
      'Helped faculty with printers, laptops, and other multimedia devices',
    ],
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
            <li><a href="#press">Press</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="about">
          <div className="about-content">
            <div className="about-text">
              <h1>Hi, I'm Husan Boymurodov</h1>
              <p className="tagline">Currently an SWE intern.</p>

              <div className="section-copy" style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
                <p>
                  I work across the full stack — Python and TypeScript mostly, with Next.js, FastAPI, Node.js,
                  Supabase, and PostgreSQL. More of a Python person. Also do some GCP infrastructure and the
                  occasional n8n workflow, though I prefer just writing code.
                </p>
              </div>

              <div className="about-actions">
                <a href="https://github.com/husanboymurodov" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
                <a href="https://www.linkedin.com/in/husanboymurodov/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
                <a href="https://t.me/HusanBoymurodov" target="_blank" rel="noopener noreferrer" className="btn-secondary">Telegram</a>
                <a href="https://wa.me/601161337608" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">Résumé</a>
              </div>
            </div>
            
            <div className="about-image-container">
              <img src={profileImg} alt="Husan Boymurodov" className="about-image" />
            </div>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          
          <div className="education-timeline">
            {/* University of Malaya */}
            <div className="education-item section-grid">
              <div>
                <h3><a href="https://www.um.edu.my/" target="_blank" rel="noopener noreferrer" className="inst-link">University of Malaya</a></h3>
              </div>
              <div className="education-card">
                <div className="education-card-header">
                  <h4>Bachelor of Computer Science, Information Systems</h4>
                  <span>2023 - 2026</span>
                </div>
                <ul>
                  <li>CGPA: 3.26</li>
                  <li>Extracurriculars: Gold Medalist, 2025 MIQ Taekwondo Championship, Lightweight 18-35</li>
                </ul>
              </div>
            </div>

            {/* BMU */}
            <div className="education-item section-grid" style={{ marginTop: '2rem' }}>
              <div>
                <h3><a href="https://www.bmu-edu.uz/" target="_blank" rel="noopener noreferrer" className="inst-link">British Management University</a></h3>
              </div>
              <div className="education-card">
                <div className="education-card-header">
                  <h4>Foundation Diploma, Business</h4>
                  <span>2021 - 2022</span>
                </div>
                <ul>
                  <li>CGPA: 3.85 — Silver stipend awarded for Academic Merit</li>
                  <li>Extracurriculars: Toastmasters club public speaker</li>
                </ul>
              </div>
            </div>

            {/* Presidential School */}
            <div className="education-item section-grid" style={{ marginTop: '2rem' }}>
              <div>
                <h3>Presidential School in Tashkent</h3>
              </div>
              <div className="education-card">
                <div className="education-card-header">
                  <h4>High School Diploma, AS & A Levels</h4>
                  <span>2019 - 2021</span>
                </div>
                <ul>
                  <li>Studied STEAM curriculum. Enjoyed Math, History and Literature</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <div className="timeline-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <p>
                      {item.companyUrl
                        ? <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="inst-link">{item.company}</a>
                        : item.company
                      } | {item.location}
                    </p>
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
          <h2>Projects</h2>
          <Projects />
        </section>


        <section id="press">
          <h2>Press</h2>
          <div className="press-grid">
            {press.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="press-card"
              >
                <div className="press-header">
                  <span className="press-pub">{item.publication}</span>
                  <span className="press-meta">
                    {item.date}
                    {item.language && <span className="press-lang">{item.language}</span>}
                  </span>
                </div>
                <h3 className="press-title">{item.title}</h3>
                <span className="press-read">
                  Read article
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="mailto:husayin2003@gmail.com">Email</a>
            <a href="https://wa.me/601161337608" target="_blank" rel="noopener noreferrer">WhatsApp</a>
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
