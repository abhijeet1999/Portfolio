import { useState } from 'react'
import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const [activeNode, setActiveNode] = useState(null)

  const experiences = [
    {
      title: 'LMS Quality Assurance Tester',
      company: 'Marist University - Digital Education',
      period: 'Sept 2024 – Present',
      location: 'New York, USA',
      details: [
        'Resolved recurring gradebook and faculty workflow issues, reducing support requests by 99%.',
        'Improved accessibility compliance across courses, enabling faster adoption of inclusive practices.',
        'Automated accessibility audits for all departments, cutting manual effort by 70%.',
        'Reconstructed 140+ web pages in Liferay 7, emphasizing mobile-first and ADA-compliant design.',
        'Adapted over 20 video-based courses for inclusive viewing using Panopto and Zoom integrations.',
        'Instituted a digital badging initiative using Credly, certifying skills in Emerging Leadership.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'QBurst Technology',
      period: 'Aug 2021 – Jul 2024',
      location: 'Remote',
      details: [
        'Developed scalable iOS applications using UIKit and Swift, achieving 100M+ downloads.',
        'Led cross-functional coordination, reducing development time by 15%, which enabled faster release cycles.',
        'Enhanced app usability, resulting in higher engagement and improved app store ratings.'
      ]
    },
    {
      title: 'Junior Software Developer (Intern)',
      company: 'Atlanto-Axial Healthtech Solutions Pvt Ltd',
      period: 'May 2021 - Aug 2021',
      location: 'Palakkad, India',
      details: [
        'Helped to Build a MVP for the company.',
        'Technology Stack: Flutter'
      ]
    },
    {
      title: 'Intern',
      company: 'Neuroplex',
      period: 'Jun 2019 - Jul 2019',
      location: 'Techopark, India',
      details: [
        'Worked on Image processing and Convolution Neural Network',
        'Face recognition using Dlib Library',
        'Case study of YOLO and how to implement it using Darknet'
      ]
    }
  ]

  return (
    <div className="page experience-page">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h1>
        
        <div className="experience-plant">
          {experiences.map((exp, index) => (
            <div key={index} className={`exp-root ${activeNode === index ? 'active' : ''}`}>
              <motion.button
                className={`exp-node ${activeNode === index ? 'active' : ''}`}
                onClick={() => setActiveNode(activeNode === index ? null : index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {exp.title}
              </motion.button>
              
              {activeNode === index && (
                <motion.div
                  className="exp-details-root"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-period">{exp.period}</p>
                  <p className="exp-location">{exp.location}</p>
                  <ul className="exp-details-list">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
