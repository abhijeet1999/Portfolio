// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .stat, .education-card, .achievement-card');
    animateElements.forEach(el => observer.observe(el));
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 200);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroGraphic = document.querySelector('.hero-graphic');
    
    if (hero && heroGraphic) {
        const rate = scrolled * -0.5;
        heroGraphic.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    updateCounter();
}

// Initialize counter animations
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            animateCounter(statNumber, number);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statObserver.observe(stat);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    .nav-link.active {
        color: #2563eb !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Modal functionality for certificates
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}
function closeModal(event, id) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('modal-close')) {
        document.getElementById(id).style.display = 'none';
    }
}

// Bloom's Taxonomy free exploration logic
const bloomsLevels = [
  'remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'
];
const bloomsSidebarButtons = {
  create: `<a href='about.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>About</a>
    <a href='projects.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Projects</a>` ,
  evaluate: `<a href='experience.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Experience</a>
    <a href='about.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>About</a>
    <a href='achievements.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Achievements</a>` ,
  analyze: `<a href='projects.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Projects</a>
    <a href='experience.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Experience</a>` ,
  apply: `<a href='skills.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Skills</a>
    <a href='education.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Education</a>
    <a href='experience.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Experience</a>` ,
  understand: `<a href='certificates.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Certificates</a>
    <a href='licenses.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Licenses</a>` ,
  remember: `<a href='contact.html' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Contact</a>`
};
const bloomsDescriptions = {
  remember: `<strong>Remember:</strong><br>Basic facts about me, my education, and certificates.` ,
  understand: `<strong>Understand:</strong><br>My core skills and a summary of my professional experience.` ,
  apply: `<strong>Apply:</strong><br>See my projects, real-world applications, and the tools I use.` ,
  analyze: `<strong>Analyze:</strong><br>Case studies, problem-solving, and process breakdowns from my work.` ,
  evaluate: `<strong>Evaluate:</strong><br>Achievements, testimonials, outcomes, and lessons learned.` ,
  create: `<strong>Create:</strong><br>Innovations, original work, research, and leadership highlights.`
};

// Clear Bloom's session click flag on homepage load
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
  sessionStorage.removeItem('blooms-clicked');
}

function handleBloomClick(idx, scrollIntoView = true) {
  const level = bloomsLevels[idx];
  const contentDiv = document.getElementById('blooms-content');
  const sidebarDiv = document.querySelector('.blooms-sidebar');
  const cards = document.querySelectorAll('.blooms-step');
  cards.forEach(card => card.classList.remove('selected'));
  const selectedCard = document.getElementById('blooms-' + level);
  if (selectedCard) selectedCard.classList.add('selected');
  const wrapper = document.querySelector('.blooms-cards-wrapper');
  if (selectedCard && wrapper) {
    const wrapperRect = wrapper.getBoundingClientRect();
    const cardRect = selectedCard.getBoundingClientRect();
    let offset = cardRect.top - wrapperRect.top;
    if (window.innerWidth <= 900) offset = 0;
    wrapper.style.setProperty('--blooms-content-top', offset + 'px');
  }
  sidebarDiv.innerHTML = bloomsSidebarButtons[level];
  contentDiv.innerHTML = `<div class='blooms-content-main'>${bloomsDescriptions[level]}</div>`;
  contentDiv.classList.add('active');
  // Only scroll if this was triggered by a user interaction
  if (scrollIntoView) {
    contentDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  sessionStorage.setItem('blooms-progress', idx);
}

function setupBloomsProgression() {
  for (let i = 0; i < bloomsLevels.length; i++) {
    const card = document.getElementById('blooms-' + bloomsLevels[i]);
    if (!card) continue;
    card.classList.remove('locked');
    card.classList.add('unlocked');
    card.setAttribute('tabindex', '0');
    card.onclick = () => {
      sessionStorage.setItem('blooms-clicked', 'true');
      handleBloomClick(i, true);
    };
    card.onkeydown = (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && card.classList.contains('unlocked')) {
        sessionStorage.setItem('blooms-clicked', 'true');
        handleBloomClick(i, true);
      }
    };
  }
  const progress = parseInt(sessionStorage.getItem('blooms-progress') || '0', 10);
  const userClicked = sessionStorage.getItem('blooms-clicked') === 'true';
  handleBloomClick(progress, userClicked);
}

document.addEventListener('DOMContentLoaded', setupBloomsProgression);

const instructionalFunFacts = [
  "The ADDIE model stands for Analyze, Design, Develop, Implement, and Evaluate.",
  "SAM (Successive Approximation Model) is an agile approach to instructional design.",
  "Gagné's Nine Events of Instruction guide the learning process from gaining attention to enhancing retention.",
  "The Kirkpatrick Model evaluates training effectiveness on four levels: Reaction, Learning, Behavior, and Results.",
  "Bloom's Taxonomy classifies learning objectives into six levels, from Remember to Create.",
  "Microlearning delivers content in small, focused bursts for better retention.",
  "SCORM is a set of technical standards for eLearning software products.",
  "Storyboarding is a key step in visualizing and planning instructional content.",
  "Formative assessment provides ongoing feedback to improve learning during instruction.",
  "Gagné's Nine Arcs (Events) include gaining attention, informing learners of objectives, stimulating recall, presenting content, providing guidance, eliciting performance, giving feedback, assessing performance, and enhancing retention."
];

function showRandomFunFact() {
  const factEl = document.getElementById('fun-fact');
  if (factEl) {
    const fact = instructionalFunFacts[Math.floor(Math.random() * instructionalFunFacts.length)];
    factEl.textContent = `Fun Fact: ${fact}`;
  }
}
document.addEventListener('DOMContentLoaded', showRandomFunFact); 
document.addEventListener('DOMContentLoaded', showRandomFunFact); 

document.addEventListener('DOMContentLoaded', function() {
  // Experience page interactive/game mode logic
  const expGame = document.getElementById('experience-game');
  const expTimeline = document.getElementById('experience-timeline');
  const showAllBtn = document.getElementById('show-all-btn');
  const gameModeBtn = document.getElementById('game-mode-btn');
  if (expGame && expTimeline && showAllBtn && gameModeBtn) {
    // Experience details for each card
    const expDetails = [
      `<span class='exp-unlock'>You discovered: LMS Quality Assurance Tester!</span><div class='exp-details'><strong>Marist University - Digital Education</strong><br><em>Sept 2024 – Present</em><ul><li>Resolved recurring gradebook and faculty workflow issues, reducing support requests by 99%.</li><li>Improved accessibility compliance across courses, enabling faster adoption of inclusive practices.</li><li>Automated accessibility audits for all departments, cutting manual effort by 70%.</li><li>Reconstructed 140+ web pages in Liferay 7, emphasizing mobile-first and ADA-compliant design.</li><li>Adapted over 20 video-based courses for inclusive viewing using Panopto and Zoom integrations.</li><li>Instituted a digital badging initiative using Credly, certifying skills in Emerging Leadership.</li></ul></div>`,
      `<span class='exp-unlock'>You discovered: Software Engineer!</span><div class='exp-details'><strong>QBurst Technology</strong><br><em>Aug 2021 – Jul 2024</em><ul><li>Developed scalable iOS applications using UIKit and Swift, achieving 100M+ downloads.</li><li>Led cross-functional coordination, reducing development time by 15%, which enabled faster release cycles.</li><li>Enhanced app usability, resulting in higher engagement and improved app store ratings.</li></ul></div>`,
      `<span class='exp-unlock'>You discovered: Junior Software Developer (Intern)!</span><div class='exp-details'><strong>Atlanto-Axial Healthtech Solutions Pvt Ltd</strong><br><em>May 2021 – Aug 2021</em><ul><li>Helped to build an MVP for the company.</li><li>Technology Stack: Flutter</li></ul></div>`,
      `<span class='exp-unlock'>You discovered: Intern!</span><div class='exp-details'><strong>Neuroplex</strong><br><em>Jun 2019 – Jul 2019</em><ul><li>Worked on Image processing and Convolution Neural Network.</li><li>Face recognition using Dlib Library.</li><li>Case study of YOLO and how to implement it using Darknet.</li></ul></div>`
    ];
    // Game mode: show only cards
    function showGameMode() {
      expGame.style.display = '';
      expTimeline.style.display = 'none';
      document.querySelectorAll('.exp-card').forEach(card => {
        card.classList.remove('revealed');
        card.innerHTML = card.textContent;
      });
    }
    // Show all: show timeline
    function showAllMode() {
      expGame.style.display = 'none';
      expTimeline.style.display = '';
    }
    // Card click logic
    expGame.addEventListener('click', function(e) {
      const card = e.target.closest('.exp-card');
      if (card && !card.classList.contains('revealed')) {
        // Hide all other details
        document.querySelectorAll('.exp-card').forEach(c => {
          c.classList.remove('revealed');
          c.innerHTML = c.textContent;
        });
        // Reveal this one
        const idx = parseInt(card.getAttribute('data-exp'), 10);
        card.classList.add('revealed');
        card.innerHTML = expDetails[idx];
      }
    });
    showAllBtn.addEventListener('click', showAllMode);
    gameModeBtn.addEventListener('click', showGameMode);
    // Start in game mode
    showGameMode();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Plant/roots interactive experience logic
  const expPlant = document.getElementById('experience-plant');
  if (expPlant) {
    const expDetails = [
      `<strong>LMS Quality Assurance Tester</strong><br><em>Marist University - Digital Education, Sept 2024 – Present</em><ul><li>Resolved recurring gradebook and faculty workflow issues, reducing support requests by 99%.</li><li>Improved accessibility compliance across courses, enabling faster adoption of inclusive practices.</li><li>Automated accessibility audits for all departments, cutting manual effort by 70%.</li><li>Reconstructed 140+ web pages in Liferay 7, emphasizing mobile-first and ADA-compliant design.</li><li>Adapted over 20 video-based courses for inclusive viewing using Panopto and Zoom integrations.</li><li>Instituted a digital badging initiative using Credly, certifying skills in Emerging Leadership.</li></ul>`,
      `<strong>Software Engineer</strong><br><em>QBurst Technology, Aug 2021 – Jul 2024</em><ul><li>Developed scalable iOS applications using UIKit and Swift, achieving 100M+ downloads.</li><li>Led cross-functional coordination, reducing development time by 15%, which enabled faster release cycles.</li><li>Enhanced app usability, resulting in higher engagement and improved app store ratings.</li></ul>`,
      `<strong>Junior Software Developer (Intern)</strong><br><em>Atlanto-Axial Healthtech Solutions Pvt Ltd, May 2021 – Aug 2021</em><ul><li>Helped to build an MVP for the company.</li><li>Technology Stack: Flutter</li></ul>`,
      `<strong>Intern</strong><br><em>Neuroplex, Jun 2019 – Jul 2019</em><ul><li>Worked on Image processing and Convolution Neural Network.</li><li>Face recognition using Dlib Library.</li><li>Case study of YOLO and how to implement it using Darknet.</li></ul>`
    ];
    expPlant.addEventListener('click', function(e) {
      const node = e.target.closest('.exp-node');
      if (node) {
        const parent = node.parentElement;
        const idx = parseInt(parent.getAttribute('data-exp'), 10);
        const detailsDiv = parent.querySelector('.exp-details-root');
        const isActive = node.classList.contains('active');
        if (isActive) {
          // If already open, close it
          node.classList.remove('active');
          parent.classList.remove('active');
          detailsDiv.style.display = 'none';
          detailsDiv.innerHTML = '';
        } else {
          // Hide all details and remove active
          document.querySelectorAll('.exp-node').forEach(n => n.classList.remove('active'));
          document.querySelectorAll('.exp-root').forEach(r => r.classList.remove('active'));
          document.querySelectorAll('.exp-details-root').forEach(d => { d.style.display = 'none'; d.innerHTML = ''; });
          // Show this one
          node.classList.add('active');
          parent.classList.add('active');
          detailsDiv.innerHTML = expDetails[idx];
          detailsDiv.style.display = '';
        }
      }
    });
  }
}); 