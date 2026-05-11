const projects = [
  {
    name: 'FitHub Sports Platform',
    role: 'Full Stack Developer',
    period: 'Mar 2025 - Jun 2025',
    description:
      'Co-engineered a sports and fitness web application in a 4-person Agile team using MERN stack principles.',
    details: [
      'Architected RESTful API backend services with Node.js and MongoDB.',
      'Supported secure user authentication and database-backed application workflows.',
    ],
    tags: ['Node.js', 'MongoDB', 'REST API', 'Agile'],
  },
  {
    name: 'Delivery Time Prediction Model',
    role: 'Data Scientist',
    period: 'Mar 2025 - Jun 2025',
    description:
      'Developed a machine learning pipeline to estimate e-commerce delivery times from logistics data.',
    details: [
      'Used Python, scikit-learn, pandas, and NumPy for modeling and preprocessing.',
      'Performed EDA on traffic density, order volume, and delivery-related variables.',
    ],
    tags: ['Python', 'scikit-learn', 'EDA', 'Regression'],
  },
  {
    name: 'Customer Churn Prediction Model',
    role: 'Data Scientist',
    period: 'Mar 2024 - Jun 2024',
    description:
      'Built a classification model to identify at-risk telecom customers and support retention analysis.',
    details: [
      'Cleaned and prepared large-scale datasets before model training.',
      'Trained and evaluated Logistic Regression and XGBoost classification models.',
    ],
    tags: ['Python', 'Classification', 'XGBoost', 'Data Cleaning'],
  },
]

const Projects = () => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <article key={project.name} className="project-card">
          <div className="project-topline">
            <span>{project.role}</span>
            <span>{project.period}</span>
          </div>
          <h3 className="project-title">{project.name}</h3>
          <p className="project-desc">{project.description}</p>
          <ul className="project-details">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="project-tags" aria-label={`${project.name} technologies`}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default Projects
