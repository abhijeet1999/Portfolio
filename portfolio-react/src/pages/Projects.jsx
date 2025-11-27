import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'S.P.A.R (System Processes and Analysis Reporting)',
      description: 'Cross-platform application designed to provide real-time system monitoring and reporting for both desktop and iOS platforms. Developed with a strong emphasis on accessibility, ensuring that all users—including those with disabilities—can effectively use the app. My responsibilities included leading the iOS development, implementing accessibility features (VoiceOver, Dynamic Type), and coordinating user testing.',
      tags: ['iOS Development', 'Accessibility', 'Real-time Monitoring', 'SwiftUI', 'Electron', 'React', 'Spring Boot', 'MySQL'],
      icon: 'fas fa-chart-line',
      thumbnail: '/images/spar-thumb.jpg',
      link: 'https://github.com/abhijeet1999/MSCS_Spring2025_Capping',
      isSpar: true,
      role: 'Lead iOS Developer, Accessibility Lead',
      audience: 'University students, IT staff',
      techStack: 'SwiftUI, Electron, React, Spring Boot, MySQL',
      process: 'Agile, user testing',
      features: [
        'Real-time system metrics and analysis',
        'Accessible UI with VoiceOver and Dynamic Type support',
        'Cross-platform: iOS and desktop (Electron)',
        'Customizable dashboards and reporting',
        'Secure data storage and user authentication'
      ],
      outcomes: [
        'Improved engagement and inclusivity for all users',
        'Demonstrated best practices in accessible app design',
        'Positive feedback from user testing and faculty'
      ],
      videos: [
        {
          title: 'Full Demo (Desktop + iOS)',
          url: 'https://www.youtube.com/embed/vnfTZVheJiA?si=WOXc9_-psMl1cjbl'
        },
        {
          title: 'iOS Demo (YouTube Short)',
          url: 'https://www.youtube.com/embed/_LRdhwF5JxU'
        }
      ],
      gratitude: 'Special thanks to Prof. Anthony Giorgio and Marist University for their support and guidance throughout the project.'
    },
    {
      title: 'Streamlining Gradebook Support for Faculty',
      description: 'Led a comprehensive initiative to resolve faculty Gradebook configuration issues within the LMS. Identified recurring pain points and created streamlined solutions that resolved 99% of issues in a single interaction, dramatically reducing support requests and improving faculty confidence.',
      tags: ['LMS Support', 'Faculty Training', 'Process Optimization'],
      icon: 'fas fa-chart-line',
      stats: [
        { icon: 'fas fa-percentage', text: '99% resolution rate' },
        { icon: 'fas fa-clock', text: 'Single interaction' }
      ]
    },
    {
      title: 'Accessible Reporting & Visualization Tools',
      description: 'Built comprehensive Power Apps solutions for accessibility testing workflow in Brightspace LMS. Created dynamic issue tracking forms and interactive visualization dashboards with Power Automate integration for automated PDF report generation and distribution to 500+ faculty.',
      tags: ['Power Apps', 'Power Automate', 'WCAG Compliance'],
      icon: 'fas fa-universal-access',
      stats: [
        { icon: 'fas fa-users', text: '500+ faculty' },
        { icon: 'fas fa-chart-pie', text: 'Interactive dashboards' }
      ]
    },
    {
      title: 'Digital Education Website – Marist University',
      description: 'Led the design and development of the Digital Education website for Marist University. Collaborated with an interdisciplinary team to deliver a modern, accessible, and user-friendly platform for faculty, staff, and students. Implemented features for Brightspace LMS support, accessibility resources, and faculty development. Ensured full WCAG compliance, mobile-first design, and seamless navigation. Technologies: Liferay 7, HTML5, CSS3, JavaScript, accessibility best practices.',
      tags: ['Liferay 7', 'WCAG 2.1', 'Mobile-First Design', 'Accessibility'],
      icon: 'fas fa-globe',
      thumbnail: '/images/marist-digital-education.jpg',
      link: 'https://my.de.marist.edu/',
      stats: [
        { icon: 'fas fa-file-alt', text: '150+ pages' },
        { icon: 'fas fa-universal-access', text: 'ADA Compliant' }
      ]
    },
    {
      title: 'Thermal Imaging & Mask Fit Detection App',
      description: 'Developed an advanced iOS application integrating thermal imaging with machine learning to analyze mask fit effectiveness. Used FLIR SDK, CoreML, and hybrid UIKit-SwiftUI architecture to deliver real-time health insights with offline data storage.',
      tags: ['iOS Development', 'CoreML', 'Thermal Imaging'],
      icon: 'fas fa-thermometer-half',
      stats: [
        { icon: 'fas fa-mobile-alt', text: 'iOS App' },
        { icon: 'fas fa-brain', text: 'Machine Learning' }
      ]
    },
    {
      title: 'Arabic News & Radio App',
      description: 'Contributed to redesigning a high-traffic news and radio app for Arabic-speaking users at QBurst. Implemented RTL-compatible UI components, user profile features, and modern design patterns, resulting in improved engagement for 100K+ users in the Middle East.',
      tags: ['iOS Development', 'RTL Support', 'UI/UX Design'],
      icon: 'fas fa-newspaper',
      stats: [
        { icon: 'fas fa-download', text: '100K+ downloads' },
        { icon: 'fas fa-globe-americas', text: 'Middle East market' }
      ]
    },
    {
      title: 'BitMedi: Secure Medical Records',
      description: 'Published research on an application to store medical records efficiently and securely, focusing on secure digital record management in healthcare. Published in Springer ICECMSN proceedings.',
      tags: ['Research', 'Security', 'Healthcare'],
      icon: 'fas fa-shield-alt',
      stats: [
        { icon: 'fas fa-book', text: 'Springer Publication' },
        { icon: 'fas fa-award', text: 'ICECMSN Proceedings' }
      ]
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
        
        {/* S.P.A.R Detailed Card */}
        <div className="projects-grid-simple" style={{ marginBottom: '3rem' }}>
          {projects.filter(p => p.isSpar).map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card-simple"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <img src={project.thumbnail} alt="S.P.A.R project thumbnail" className="project-thumb project-thumb-spar" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {project.role && (
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#8E8E93' }}>
                  <p><strong>Role:</strong> {project.role}</p>
                  <p><strong>Audience:</strong> {project.audience}</p>
                  <p><strong>Tech Stack:</strong> {project.techStack}</p>
                  <p><strong>Process:</strong> {project.process}</p>
                </div>
              )}

              {project.features && (
                <div style={{ marginTop: '1rem' }}>
                  <h4>Key Features:</h4>
                  <ul style={{ textAlign: 'left', marginLeft: '1.5rem' }}>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.videos && (
                <div style={{ marginTop: '1.5rem' }}>
                  <h4>Demo Videos:</h4>
                  {project.videos.map((video, idx) => (
                    <div key={idx} style={{ marginTop: '1rem' }}>
                      <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{video.title}</p>
                      <iframe
                        width="100%"
                        height="315"
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ borderRadius: '8px' }}
                      ></iframe>
                    </div>
                  ))}
                </div>
              )}

              {project.outcomes && (
                <div style={{ marginTop: '1rem' }}>
                  <h4>Outcomes:</h4>
                  <ul style={{ textAlign: 'left', marginLeft: '1.5rem' }}>
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.gratitude && (
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#8E8E93' }}>
                  {project.gratitude}
                </p>
              )}

              <div className="project-links" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                <a href={project.link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects in Original Format */}
        <div className="projects-grid">
          {projects.filter(p => !p.isSpar).map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={`${project.title} screenshot`} className="project-screenshot-thumb" />
                ) : (
                  <i className={project.icon}></i>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.stats && (
                  <div className="project-stats">
                    {project.stats.map((stat, idx) => (
                      <span key={idx}>
                        <i className={stat.icon}></i> {stat.text}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <div className="project-links">
                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Live Site</a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
