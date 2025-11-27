import { motion } from 'framer-motion'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      title: 'Nominated for Student Employee of the Year',
      year: '2025',
      description: 'Recognized for outstanding contributions to LMS support and accessibility compliance at Marist University.',
      icon: 'fas fa-trophy'
    },
    {
      title: 'Research Publication',
      year: '2021',
      description: 'BitMedi: An Application to Store Medical Records Efficiently and Securely - Published in the Springer ICECMSN proceedings, focusing on secure digital record management.',
      icon: 'fas fa-book'
    },
    {
      title: 'Cisco ThingQubator Program',
      year: '2020',
      description: 'Ranked among top 12 teams across India in a nationwide Cisco-sponsored innovation challenge. Developed an award-winning health technology solution recognized nationally.',
      icon: 'fas fa-medal'
    },
    {
      title: 'E-Yantra Robotics Competition',
      year: '2018',
      description: 'Secured 1st Runner-up position at a national robotics contest held at IIT Mumbai. Demonstrated strong technical and problem-solving skills on a highly competitive platform.',
      icon: 'fas fa-robot'
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
          Achievements & Recognition
        </motion.h1>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="year">{achievement.year}</p>
                <p>{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements
