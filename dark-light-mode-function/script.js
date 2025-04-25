// Mobil menyu funksiyasi
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };
  
  document.querySelector('.toggle-menu').addEventListener('click', toggleMenu);
  
  // Mavzu almashinuvi
  const themeToggle = document.getElementById('mode-toggle');
  let isDark = localStorage.getItem('theme') === 'dark';
  
  const updateTheme = () => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  };
  
  themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    updateTheme();
  });
  
  // Sahifa yuklanganda mavzuni sozlash
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    isDark = savedTheme === 'dark';
    updateTheme();
  });
  
  // Formni yuborish
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    console.log('Form ma\'lumotlari:', formData);
    alert('Xabaringiz qabul qilindi! Tez orada javob beramiz.');
    this.reset();
  });
  
  // Smooth scroll effekt
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      
      if(target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Faqatgina kontakt formasi uchun validatsiya
  document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.reportValidity();
    });
  });