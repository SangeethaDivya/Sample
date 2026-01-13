// Typewriter effect for the name
var i = 0;
var userName = 'angeetha Divya';
var speed = 200;

function typeWriter() {
  if (i < userName.length) {
    document.getElementById("name").innerHTML += userName.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Reset and restart the animation
    setTimeout(() => {
      document.getElementById("name").innerHTML = 'S';
      i = 0;
      typeWriter();
    }, 2000);
  }
}

// Certificate modal functionality
let currentCertificate = '';

function openCertificateModal(title, description, imageName) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('certDescription').textContent = description;
  currentCertificate = imageName;
  document.getElementById('certificateModal').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCertificateModal() {
  document.getElementById('certificateModal').style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

function downloadCertificate() {
  // In a real implementation, this would download the actual certificate file
  alert(`Downloading ${currentCertificate}...\n\nIn a real portfolio, this would download the actual certificate file.`);
}

function previewCertificate() {
  // In a real implementation, this would open a full preview
  alert(`Opening full preview of ${currentCertificate}...\n\nIn a real portfolio, this would open a larger preview or PDF viewer.`);
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('certificateModal');
  if (event.target === modal) {
    closeCertificateModal();
  }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Start typewriter effect
  typeWriter();

  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        entry.target.style.animationDelay = Math.random() * 0.5 + 's';
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Enhanced hover effects for project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02) rotate(1deg)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
  });

  // Add particle effect to hero section
  createParticles();

  // Add loading animation
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });

  // Add scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
});

// Create floating particles for hero section
function createParticles() {
  const heroSection = document.querySelector('.hero');
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heroSection.appendChild(particle);
  }
}