import { motion } from 'framer-motion'
import './Page.css'

const About = () => {
  return (
    <div className="page">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>
        
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-text">
            <p>
              I'm an Instructional Designer & Technologist passionate about bridging the gap between technology and education. 
              With a strong background in both computer science and instructional design, I specialize in creating 
              accessible, user-centered learning experiences that drive measurable results.
            </p>
            <p>
              My expertise spans from LMS quality assurance and accessibility compliance to developing scalable 
              applications. I believe in leveraging technology to enhance inclusive learning outcomes and streamline 
              educational processes for both faculty and students.
            </p>
            <p>
              I am highly comfortable using LMS tools such as Brightspace, and have extensive experience identifying and helping to fix accessibility issues in Brightspace courses. My work includes auditing and remediating problems such as color contrast, missing or unclear alt text, improper heading structure, inaccessible links, and more—ensuring all course content is inclusive and meets accessibility standards.
            </p>
            <div className="about-stats">
              <motion.div 
                className="stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3>99%</h3>
                <p>Gradebook Issue Resolution</p>
              </motion.div>
              <motion.div 
                className="stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3>150+</h3>
                <p>Web Pages Redesigned</p>
              </motion.div>
              <motion.div 
                className="stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3>100K+</h3>
                <p>App Downloads</p>
              </motion.div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="profile-card">
              <div className="profile-avatar profile-photo">
                <img src="/images/profile.jpg" alt="Professional headshot of Abhijeet Cherungottil" className="profile-img" />
              </div>
              <h3>Abhijeet Cherungottil</h3>
              <p>Instructional Designer & Technologist</p>
              <p>Marist University</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
