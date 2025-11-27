import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const SkillBar = ({ name, level, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'Instructional Design Tools',
      skills: [
        { name: 'Brightspace LMS', level: 95 },
        { name: 'Panopto', level: 90 },
        { name: 'Power Apps & Automate', level: 88 }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Swift & iOS Development', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      title: 'Web & Design',
      skills: [
        { name: 'HTML/CSS', level: 87 },
        { name: 'Accessibility Testing (WCAG 2.1)', level: 90 },
        { name: 'Canva & Microsoft Office', level: 85 }
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Cloud Computing', level: 80 },
        { name: 'Liferay 7', level: 75 }
      ]
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
          Skills & Expertise
        </motion.h1>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
