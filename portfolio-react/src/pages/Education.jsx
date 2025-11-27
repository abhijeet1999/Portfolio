import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      specialization: 'Cloud Computing',
      institution: 'Marist University',
      year: '2025',
      gpa: 'GPA: 3.83/4.0',
      icon: 'fas fa-graduation-cap'
    },
    {
      degree: 'Bachelor of Technology',
      specialization: 'Computer Science and Engineering',
      institution: 'APJ Abdul Kalam Technological University',
      year: '2021',
      gpa: 'CGPA: 7.65/10',
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
          Education
        </motion.h1>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="education-icon">
                <i className={edu.icon}></i>
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.specialization}</h4>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
                <p className="gpa">{edu.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
