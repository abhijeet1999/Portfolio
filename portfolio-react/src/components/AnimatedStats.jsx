import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './AnimatedStats.css'

const AnimatedStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats = [
    { value: 100, suffix: 'M+', label: 'Downloads' },
    { value: 99, suffix: '%', label: 'Success Rate' },
    { value: 140, suffix: '+', label: 'Pages Designed' }
  ]

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const animateValue = (start, end, duration, callback) => {
    const startTime = performance.now()
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)
      callback(current)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  return (
    <motion.div
      ref={ref}
      className="hero-stats"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          stat={stat}
          index={index}
          shouldAnimate={hasAnimated}
          animateValue={animateValue}
        />
      ))}
    </motion.div>
  )
}

const StatItem = ({ stat, index, shouldAnimate, animateValue }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (shouldAnimate) {
      animateValue(0, stat.value, 2000, setDisplayValue)
    }
  }, [shouldAnimate, stat.value, animateValue])

  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="stat-number">
        {displayValue}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  )
}

export default AnimatedStats


