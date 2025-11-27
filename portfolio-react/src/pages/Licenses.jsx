import { motion } from 'framer-motion'
import './Licenses.css'

const Licenses = () => {
  const licenses = [
    {
      title: 'Foundations of Learning Management Systems (LMS)',
      issuer: 'LinkedIn Learning',
      issued: 'Issued Jun 2025',
      skills: 'Skills: Learning Management Systems',
      link: 'https://www.linkedin.com/in/abhijeetcherungottil/',
      icon: 'fab fa-linkedin'
    },
    {
      title: 'Become a Teacher',
      issuer: 'LinkedIn Learning',
      issued: 'Issued May 2025',
      skills: 'Skills: Teaching',
      link: 'https://www.linkedin.com/in/abhijeetcherungottil/',
      icon: 'fab fa-linkedin'
    },
    {
      title: 'Tips for Using AI as an Instructional Designer',
      issuer: 'LinkedIn Learning',
      issued: 'Issued May 2025',
      skills: 'Skills: Instructional Design, Artificial Intelligence for Business',
      link: 'https://www.linkedin.com/in/abhijeetcherungottil/',
      icon: 'fab fa-linkedin'
    },
    {
      title: 'Emerging Leaders Program Certificate',
      issuer: 'Marist University',
      issued: 'Issued Apr 2025',
      skills: 'Skills: Leadership',
      link: 'https://www.linkedin.com/in/abhijeetcherungottil/',
      icon: 'fas fa-university'
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
          Licenses & Certifications
        </motion.h1>
        
        <div className="licenses-list">
          {licenses.map((license, index) => (
            <motion.div
              key={license.title}
              className="license-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <span className="license-icon">
                <i className={license.icon}></i>
              </span>
              <div className="license-content">
                <h3>{license.title}</h3>
                <p className="issuer">{license.issuer} &bull; {license.issued}</p>
                <p className="skills">{license.skills}</p>
                <a 
                  href={license.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="license-link"
                >
                  Show credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Licenses
