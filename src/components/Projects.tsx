const projects = [
  {
    name: 'MyWebsite – Software Engineer Portfolio',
    role: 'Full Stack Developer',
    period: '2026',
    description: 'A modern, high-performance portfolio website built to showcase engineering projects and professional experience.',
    details: [
      'Developed a responsive, accessible frontend using React 19 and TypeScript.',
      'Implemented a sleek dark theme with CSS variables and smooth interactive animations.',
      'Configured containerized deployment using Docker and Google Cloud Run with automated CI/CD.',
      'Optimized site for SEO and performance, achieving near-perfect scores on Lighthouse.'
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Docker', 'Google Cloud Run', 'CSS'],
    links: [
      { url: 'https://github.com/husanboymurodov/MyWebsite', label: 'GitHub' },
      { url: 'https://boymurodov.com', label: 'Live App' }
    ]
  },
  {
    name: 'FitHub – Full-Stack Fitness Tracker',
    role: 'Full Stack Developer',
    period: '2024 - 2025',
    description: 'A comprehensive health and wellness platform designed to help users track workouts, plan nutrition, and monitor long-term progress.',
    details: [
      'Developed a robust MVC application using Express.js and MongoDB.',
      'Integrated Chart.js to visualize fitness trends and progress metrics.',
      'Leveraged TheMealDB API to enable real-time meal discovery.',
      'Implemented secure session-based authentication using bcrypt.',
      'Containerized with Docker and established automated CI/CD via Google Cloud Build.'
    ],
    tags: ['Node.js', 'MongoDB', 'Bootstrap 5', 'Chart.js', 'Docker', 'Google Cloud Run'],
    links: [
      { url: 'https://github.com/muhammadariffahmi/fithub', label: 'GitHub' },
      { url: 'https://fithub-app-745483922277.asia-southeast1.run.app', label: 'Live App' }
    ]
  },
  {
    name: 'OrderSmart – ML Delivery Predictor',
    role: 'Machine Learning Engineer',
    period: '2024 - 2025',
    description: 'A machine learning-powered predictive analytics dashboard that forecasts food delivery performance based on environmental and logistical factors.',
    details: [
      'Engineered and trained an XGBoost model to predict delivery delays.',
      'Analyzed weather conditions, traffic levels, and distance to optimize outcomes.',
      'Built a responsive, user-friendly interface using Gradio for real-time predictions.',
      'Generated historical performance infographics using Pandas and Matplotlib.',
      'Deployed the model and interface to Hugging Face Spaces for public access.'
    ],
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Gradio', 'Hugging Face'],
    links: [
      { url: 'https://huggingface.co/spaces/husanboymurodov/delivery-predictor/tree/main', label: 'HF Code' },
      { url: 'https://husanboymurodov-delivery-predictor.hf.space/', label: 'Live App' }
    ]
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
    links: [
      { url: 'https://huggingface.co/spaces/husanboymurodov/customer-churn-predictor/tree/main', label: 'HF Code' },
      { url: 'https://husanboymurodov-customer-churn-predictor.hf.space/', label: 'Live App' }
    ]
  },
]

const Projects = () => {
  return (
    <div className="projects-grid">
      {projects.map((project) => {
        const projectSlug = project.name.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
        return (
          <article key={project.name} id={projectSlug} className="project-card">
            <div className="project-topline">
              <span>{project.role}</span>
              <span>{project.period}</span>
            </div>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <ul className="project-details">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            
            <div className="project-tags" aria-label={`${project.name} technologies`}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="project-links">
                {project.links.map(link => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    {link.label === 'GitHub' ? (
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    )}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default Projects