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
  'Amazon Web Services (AWS)',
  'Docker',
  'CI/CD',
  'Git',
  'n8n',
  'Hugging Face',
  'Machine Learning',
  'Automation',
  'Clean Coding',
]

const softSkills = [
  'Leadership',
  'Project Management',
  'Public Speaking',
  'Technical Mentoring',
  'Problem Solving',
  'Collaborative Teamwork',
]

const certifications = [
  {
    name: 'Claude Code 101',
    issuer: 'Anthropic Education',
    issued: 'Jun 7, 2026',
    credentialId: 'wnasgdrdx6t3',
    verifyUrl: 'https://verify.skilljar.com/c/wnasgdrdx6t3',
  },
  {
    name: 'IELTS',
    issuer: 'IDP',
    issued: 'Jul 21, 2021',
    score: '7.0',
    credentialId: '011322',
  },
  {
    name: 'A Level Mathematics',
    issuer: 'Cambridge Assessment International Education',
    issued: 'Jun 2021',
    score: 'A(a)',
    credentialId: '0068801252',
  },
]

const press = [
  {
    publication: 'El-Yurt Umidi Foundation',
    title: 'Uzbek Team Wins International Cultural Week at Universiti Malaya',
    description: 'Featured in an El-Yurt Umidi Foundation post recognizing the Uzbek student team\'s first-place win at the International Cultural Week at Universiti Malaya. Competing against 30+ countries, the team — including Husan Boymurodov — won the "Most Creative Menu" award, showcasing Uzbek cuisine, traditions, and hospitality.',
    date: '2024',
    url: 'https://t.me/elyurtumidifoundation/15058',
    language: 'Uzbek',
  },
  {
    publication: 'Spot.uz',
    title: 'Malayziyada o\'qish: Husan Boymurodovning tajribasi',
    description: 'Featured in a Spot.uz news article sharing my journey of studying in Malaysia — covering the application process, scholarship experience, and advice for Uzbek students wanting to pursue education abroad.',
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
      'Design and develop backend modules and features following software engineering principles and best practices.',
      'Write clean, testable code and participate in unit testing, debugging, and code reviews.',
      'Assist in system analysis, technical documentation, and software requirement specifications.',
      'Support the full software development lifecycle (SDLC) from design through deployment.',
      'Collaborate with the engineering team to troubleshoot issues and deliver sprint deliverables on time.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'AI Sales Dr Pte. Ltd.',
    companyUrl: 'https://ai-sales-dr.co/',
    location: 'Kuala Lumpur, Malaysia',
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
    companyUrl: 'https://www.bmu-edu.uz/',
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
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#press">Press</a></li>
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
                  cloud platforms including GCP and AWS.
                </p>
                <p>
                  Currently working as a Software Engineer Intern at Artiselite Sdn Bhd, where I design and develop
                  backend modules, write clean testable code, and support the full SDLC from design through deployment.
                  Previously at AI Sales Dr, I engineered production APIs, managed GCP infrastructure, and automated
                  complex workflows with n8n.
                </p>
                <p>
                  Beyond engineering, I demonstrate leadership by coordinating academic courses, facilitating technical
                  sessions, and mentoring peers. I focus on building efficient, high-performance systems that make a
                  real impact.
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
                <h3><a href="https://www.um.edu.my/" target="_blank" rel="noopener noreferrer" className="inst-link">University of Malaya</a></h3>
                <a href="https://www.topuniversities.com/universities/universiti-malaya-um" target="_blank" rel="noopener noreferrer" className="ranking-badge">
                  <div className="ranking-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 5 1-11L3 11l5 2z"/></svg>
                  </div>
                  <div className="ranking-info">
                    <span className="rank-value">#58 Worldwide</span>
                    <span className="rank-source">QS World Rankings 2026</span>
                  </div>
                </a>
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
                <h3><a href="https://www.bmu-edu.uz/" target="_blank" rel="noopener noreferrer" className="inst-link">British Management University</a></h3>
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
                  <li><strong>A Level Mathematics</strong>: A(a) | <strong>IELTS</strong>: 7.0</li>
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

        <section id="certifications">
          <p className="section-label">Certifications</p>
          <h2>Licenses &amp; Certifications</h2>
          <div className="certs-grid">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.credentialId}>
                <div className="cert-header">
                  <h3>{cert.name}</h3>
                  {cert.issued && <span className="cert-issued">{cert.issued}</span>}
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.score && <p className="cert-id">Score: {cert.score}</p>}
                {cert.credentialId && <p className="cert-id">Credential ID: {cert.credentialId}</p>}
                {cert.verifyUrl && (
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                    Verify credential
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="press">
          <p className="section-label">In the Press</p>
          <h2>Media &amp; Features</h2>
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
                <p className="press-desc">{item.description}</p>
                <span className="press-read">
                  Read article
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact">
          <p className="section-label">Contact</p>
          <h2>Get In Touch</h2>
          <p className="contact-intro">
            Open to collaboration, freelance projects, and connecting with fellow engineers.
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
