import { motion } from 'framer-motion'

const HomeSimple = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b4e 100%)',
      color: 'white',
      padding: '120px 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem' }}
      >
        Building Apps That Teach
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)' }}
      >
        iOS Developer & Instructional Technologist
      </motion.p>
    </div>
  )
}

export default HomeSimple


