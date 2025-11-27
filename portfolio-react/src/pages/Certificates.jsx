import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Certificates.css'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const baseUrl = import.meta.env.BASE_URL
  const certificates = [
    {
      title: 'Emerging Leaders Program',
      image: `${baseUrl}certificates/emerging-leader.JPG`,
      alt: 'Certificate: Marist University Emerging Leaders Program awarded to Abhijeet Cherungottil, April 16, 2025'
    },
    {
      title: 'Student Employee of the Year Nominee',
      image: `${baseUrl}certificates/employee-of-year.jpg`,
      alt: 'Certificate: Student Employee of the Year Nominee, Marist University, Abhijeet Cherungottil, April 15, 2025'
    },
    {
      title: 'e-Yantra Robotics Competition (IIT Bombay)',
      image: `${baseUrl}certificates/eyantra.jpg`,
      alt: 'Certificate: e-Yantra Robotics Competition, IIT Bombay, Certificate of Merit for Abhijeet C, March 2019'
    },
    {
      title: 'Cisco thingQbator (Excellence in Innovation)',
      image: `${baseUrl}certificates/cisco-thingqbator.jpg`,
      alt: 'Certificate: Cisco thingQbator Excellence in Innovation awarded to Abhijeet C, September 2020'
    },
    {
      title: 'e-Yantra Robotics Competition – Team Photo',
      image: `${baseUrl}certificates/eyantra-team.jpg`,
      alt: 'Abhijeet Cherungottil and team receiving e-Yantra Robotics Competition certificate at IIT Bombay'
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
          Certificates
        </motion.h1>
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="certificate-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <img src={cert.image} alt={cert.alt} className="certificate-thumb" />
              <h3 className="certificate-title">{cert.title}</h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.img
                src={selectedCertificate.image}
                alt={selectedCertificate.alt}
                className="modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="modal-close"
                onClick={() => setSelectedCertificate(null)}
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="certificates-video-block">
          <div className="video-label">e-Yantra Project Explanation (by Abhijeet, College Days)</div>
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/rHhSgRyXPJE?si=xvjNx4E_UY1RZs6z" 
            title="e-Yantra Project Explanation by Abhijeet" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Certificates
