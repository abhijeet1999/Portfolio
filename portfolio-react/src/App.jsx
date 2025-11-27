import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Achievements from './pages/Achievements'
import Certificates from './pages/Certificates'
import Licenses from './pages/Licenses'
import Contact from './pages/Contact'
import Navigation from './components/Navigation'
import './styles/App.css'

function App() {
  console.log('App component rendering...')
  
  return (
    <Router>
      <div className="app" style={{ minHeight: '100vh', background: '#0a0e27' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

