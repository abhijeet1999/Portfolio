import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedStats from '../components/AnimatedStats'
import FloatingCards from '../components/FloatingCards'
import './Home.css'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <div className="home-page" style={{ minHeight: '100vh', background: '#0a0e27', position: 'relative' }}>
      <ParticleBackground />
      
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      >
        <div className="hero-container">
          <motion.div className="hero-content" variants={itemVariants} style={{ color: 'white', opacity: 1 }}>
            <motion.div
              className="hero-badge"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: 'white' }}
            >
              <i className="fas fa-code"></i>
              <span>iOS Developer & Instructional Technologist</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              <motion.span
                className="title-line"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Building Apps
              </motion.span>
              <motion.span
                className="title-line highlight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                That Teach
              </motion.span>
            </motion.h1>

            <motion.p className="hero-description" variants={itemVariants}>
              I craft beautiful iOS applications and design accessible learning experiences.
              Where code meets education, innovation happens.
            </motion.p>

            <AnimatedStats />

            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="btn btn-primary">
                  <span>View My Work</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn btn-secondary">
                  <span>Get in Touch</span>
                  <i className="fas fa-envelope"></i>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <FloatingCards />
        </div>
      </motion.section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore My Expertise
          </motion.h2>
          <div className="quick-links-grid">
            {[
              {
                icon: 'fas fa-rocket',
                title: 'Projects',
                description: 'Real-time weather systems, iOS apps, and learning platforms',
                link: '/projects',
                color: 'var(--primary)'
              },
              {
                icon: 'fas fa-code',
                title: 'Skills',
                description: 'Swift, Kafka, Django, and modern development practices',
                link: '/skills',
                color: 'var(--secondary)'
              },
              {
                icon: 'fas fa-briefcase',
                title: 'Experience',
                description: 'LMS Quality Assurance, iOS Development, and more',
                link: '/experience',
                color: 'var(--accent)'
              },
              {
                icon: 'fas fa-trophy',
                title: 'Achievements',
                description: 'NIOSH Winner, Student Employee of Year, and more',
                link: '/achievements',
                color: 'var(--primary)'
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link to={card.link} className="quick-link-card">
                  <div className="quick-link-icon" style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)` }}>
                    <i className={card.icon}></i>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="quick-link-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {[
              {
                number: '01',
                title: 'iOS Development',
                description: 'Built apps with 100M+ downloads, featuring LiDAR, CoreML, and modern SwiftUI architecture'
              },
              {
                number: '02',
                title: 'Instructional Technology',
                description: 'Designed accessible learning experiences, automated workflows, and improved faculty efficiency by 50%'
              },
              {
                number: '03',
                title: 'Full-Stack Solutions',
                description: 'Architected real-time systems with Kafka, Prometheus, and event-driven architectures'
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.number}
                className="highlight-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="highlight-number">{highlight.number}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

