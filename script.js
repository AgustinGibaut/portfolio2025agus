document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    const themeToggle = document.getElementById('theme-toggle');
    

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight / 2) &&
        rect.bottom >= (window.innerHeight / 2)
      );
    }
    
  
    function setActiveSection() {
      let currentSection = 'inicio';
      
      sections.forEach(section => {
        if (isInViewport(section)) {
          currentSection = section.id;
        }
      });
      
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + currentSection) {
          item.classList.add('active');
        }
      });
    }
    
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
   
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
   
    navItems.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
    
  
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
    
 
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.checked = true;
    }
    
  
    window.addEventListener('scroll', setActiveSection);
    
 
    setActiveSection();
    
   
    sections.forEach(section => {
      section.classList.add('active');
    });
    
    // Project card animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
    
  
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
    
  
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
      profileImg.addEventListener('mouseenter', function() {
        const rainbowBorder = document.querySelector('.rainbow-border');
        rainbowBorder.style.animation = 'rainbow-rotate 3s linear infinite';
      });
      
      profileImg.addEventListener('mouseleave', function() {
        const rainbowBorder = document.querySelector('.rainbow-border');
        rainbowBorder.style.animation = 'rainbow-rotate 8s linear infinite';
      });
    }
  });