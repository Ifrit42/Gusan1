const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove 'active' from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add 'active' to the clicked link
      link.classList.add('active');
    });

  });

const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));
