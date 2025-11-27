import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  return (
    <div className="page">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>
        
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and collaborations in instructional technology and digital learning. Feel free to reach out!
            </p>
            
            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-envelope"></i>
                <span>abhijeetcherungottil@gmail.com</span>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>New York, USA</span>
              </motion.div>
            </div>
            
            <div className="social-links">
              <motion.a
                href="https://www.linkedin.com/in/abhijeetcherungottil/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              
              <motion.a
                href="https://github.com/abhijeet1999"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              
              <motion.a
                href="mailto:abhijeetcherungottil@gmail.com"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope"></i>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
