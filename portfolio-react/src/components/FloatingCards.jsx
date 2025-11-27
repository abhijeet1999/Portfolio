import { motion } from 'framer-motion'
import './FloatingCards.css'

const FloatingCards = () => {
  const cards = [
    {
      icon: 'fab fa-swift',
      text: 'iOS Development',
      position: { top: '10%', left: '10%' },
      delay: 0
    },
    {
      icon: 'fas fa-graduation-cap',
      text: 'Instructional Design',
      position: { top: '50%', right: '10%' },
      delay: 2
    },
    {
      icon: 'fas fa-universal-access',
      text: 'Accessibility',
      position: { bottom: '20%', left: '20%' },
      delay: 4
    }
  ]

  return (
    <div className="floating-cards-container">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="floating-card"
          style={card.position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              delay: card.delay,
              ease: 'easeInOut'
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              delay: card.delay,
              ease: 'easeInOut'
            },
            opacity: { duration: 0.5, delay: index * 0.3 },
            scale: { duration: 0.5, delay: index * 0.3 }
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="card-icon">
            <i className={card.icon}></i>
          </div>
          <div className="card-text">{card.text}</div>
        </motion.div>
      ))}

      {/* Profile Card */}
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="profile-image-wrapper">
          <img src="/images/profile.jpg" alt="Abhijeet Cherungottil" onError={(e) => { e.target.src = '/images/pic.jpg' }} />
        </div>
        <div className="profile-info">
          <h3>Abhijeet Cherungottil</h3>
          <p>Instructional Designer & Technologist</p>
          <div className="profile-contact">
            <a href="mailto:abhijeetcherungottil@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/abhijeetcherungottil/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/abhijeet1999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FloatingCards

